import { useEffect, useRef } from "react";

interface MermaidProps {
  code: string;
}

export default function Mermaid({ code }: MermaidProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    const renderDiagram = async () => {
      if (!elementRef.current || !mounted.current) return;

      try {
        // Dynamically import mermaid to avoid SSR issues
        const mermaid = await import("mermaid");

        // Initialize mermaid with dark theme
        mermaid.default.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            primaryColor: "#374151",
            primaryTextColor: "#f9fafb",
            primaryBorderColor: "#6b7280",
            lineColor: "#9ca3af",
            secondaryColor: "#4b5563",
            tertiaryColor: "#6b7280",
            background: "#111827",
            mainBkg: "#1f2937",
            secondBkg: "#374151",
            tertiaryBkg: "#4b5563",
            darkMode: true,
            // Flowchart colors
            clusterBkg: "#374151",
            clusterBorder: "#6b7280",
            defaultLinkColor: "#9ca3af",
            // Sequence diagram colors
            actorBorder: "#6b7280",
            actorBkg: "#374151",
            actorTextColor: "#f9fafb",
            actorLineColor: "#9ca3af",
            signalColor: "#f9fafb",
            signalTextColor: "#f9fafb",
            // Gantt colors
            gridColor: "#4b5563",
            section0: "#374151",
            section1: "#4b5563",
            section2: "#6b7280",
            section3: "#9ca3af",
            // Git graph colors
            git0: "#ef4444",
            git1: "#f59e0b",
            git2: "#10b981",
            git3: "#3b82f6",
            git4: "#8b5cf6",
            git5: "#ec4899",
            git6: "#f97316",
            git7: "#84cc16",
          },
          flowchart: {
            htmlLabels: true,
            curve: "basis",
            useMaxWidth: true,
          },
          sequence: {
            diagramMarginX: 50,
            diagramMarginY: 10,
            actorMargin: 50,
            width: 150,
            height: 65,
            boxMargin: 10,
            boxTextMargin: 5,
            noteMargin: 10,
            messageMargin: 35,
            mirrorActors: true,
            useMaxWidth: true,
          },
          gantt: {
            useMaxWidth: true,
            fontSize: 12,
            gridLineStartPadding: 35,
            bottomPadding: 25,
            leftPadding: 75,
          },
          gitGraph: {
            useMaxWidth: true,
          },
        });

        if (!mounted.current || !elementRef.current) return;

        // Generate unique ID for this diagram
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

        // Render the diagram
        const { svg } = await mermaid.default.render(id, code);

        if (mounted.current && elementRef.current) {
          elementRef.current.innerHTML = svg;

          // Apply additional styling to the rendered SVG
          const svgElement = elementRef.current.querySelector("svg");
          if (svgElement) {
            svgElement.style.backgroundColor = "transparent";
            svgElement.style.maxWidth = "100%";
            svgElement.style.height = "auto";
            svgElement.style.display = "block";
            svgElement.style.margin = "0 auto";

            // Ensure text is visible
            const textElements = svgElement.querySelectorAll("text");
            textElements.forEach((text) => {
              const element = text as SVGTextElement;
              if (!element.style.fill || element.style.fill === "#000000") {
                element.style.fill = "#f9fafb";
              }
            });

            // Style paths and shapes
            const paths = svgElement.querySelectorAll("path");
            paths.forEach((path) => {
              const element = path as SVGPathElement;
              if (!element.style.stroke) {
                element.style.stroke = "#9ca3af";
              }
            });
          }
        }
      } catch (error) {
        console.error("Mermaid rendering error:", error);
        if (mounted.current && elementRef.current) {
          elementRef.current.innerHTML = `
            <div class="rounded border border-red-800/50 bg-red-900/20 p-4 text-red-400">
              <div class="font-medium">Error rendering Mermaid diagram</div>
              <div class="mt-2 text-sm">${error instanceof Error ? error.message : "Unknown error"}</div>
              <details class="mt-3">
                <summary class="cursor-pointer text-xs text-red-300">Show diagram code</summary>
                <pre class="mt-2 whitespace-pre-wrap text-xs text-red-200">${code}</pre>
              </details>
            </div>
          `;
        }
      }
    };

    renderDiagram();

    return () => {
      mounted.current = false;
    };
  }, [code]);

  return (
    <div className="mermaid-wrapper my-6">
      <div
        ref={elementRef}
        className="flex min-h-[120px] items-center justify-center overflow-x-auto rounded-lg border border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 shadow-lg backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 text-gray-400">
          <svg
            className="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Rendering diagram...</span>
        </div>
      </div>
    </div>
  );
}
