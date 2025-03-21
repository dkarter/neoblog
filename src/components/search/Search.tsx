import { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import { SearchIcon } from "lucide-react";

{
  /* SOME NOTES:
  1. Takes id/slug, title and description from the posts collection data and searches through the title and descriptions.
    Because of that, ignore the astro:content warning about that it can bloat the payload of client bla bla..
    Data is passed at ./SearchBox.astro file. More of the collection can also be passed to search for. Remember to add keys to the fusejs below.
  2. For big blogs/datasets, consider using useMemo, callback and debounce. Meaning of word 'big' differs for the specs of devices.
     However up to 500+ posts this can work smoothly. Such optimizations are overkill for %99 of the blogs.
     Even if you have 1.000+ blog posts, we both know that %50 of them are outdated and should be sliced! ^^
  3. Have a really reeeaaally GREAT day! :)
  */
}

type PostSummary = {
  id: string;
  title: string;
  description: string;
};

type Props = {
  posts: PostSummary[];
};

export default function Search({ posts }: Props) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<PostSummary[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(0); // Track the focused index
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fuse = new Fuse(posts, {
      keys: ["title", "description"],
      includeScore: true,
      // If you include more keys to search, for example the body of the posts
      // You have to adjust the threshold and distance accordingly.
      // Options below work for 120 characters, which is the maximum description length in posts config.
      // Check https://www.fusejs.io/concepts/scoring-theory.html#fuzziness-score
      threshold: 0.3,
      distance: 400,
      // minMatchCharLength: 3
      // Uncomment above to show results only after 3 or more characters,
      // And if you do this also change the nothing found div to only show after 3 characters. (searchInput.length)
      // For more: https://www.fusejs.io/api/options.html
    });

    if (searchInput) {
      const results = fuse.search(searchInput);
      setFilteredPosts(results.map((result) => result.item));
      setFocusedIndex(0); // Reset focus at input change
    } else {
      setFilteredPosts([]);
    }
  }, [searchInput, posts]);

  // Handle clearing the search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchInput("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle arrow keys, enter and escape key presses
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const resultCount = Math.min(filteredPosts.length, 3);

    if (e.key === "Escape") {
      setSearchInput("");
      setFilteredPosts([]);
      setFocusedIndex(0);
    } else if (e.key === "ArrowDown") {
      setFocusedIndex((prev) =>
        prev === resultCount - 1 ? 0 : Math.min(prev + 1, resultCount - 1),
      );
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      setFocusedIndex((prev) =>
        prev === 0 ? resultCount - 1 : Math.max(prev - 1, 0),
      );
      e.preventDefault();
    } else if (e.key === "Enter") {
      if (filteredPosts.length > 0) {
        const selectedPost = filteredPosts[focusedIndex];
        window.location.href = `/blog/${selectedPost.id}`;
      } else {
        window.location.href = "/contact";
      }
    }
  };

  return (
    <div ref={searchContainerRef} className="relative max-w-md sm:mx-auto">
      {/* Input */}
      <form
        action="#"
        method="POST"
        onSubmit={(e) => e.preventDefault()}
        className="focus-within:border-brand-500 hover:border-brand-500/50 flex items-center rounded-lg border border-neutral-800/40 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 transition-colors duration-300"
      >
        <input
          type="text"
          name="prompt"
          id="prompt"
          autoComplete="off"
          placeholder="What's on your mind?"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown} // Handle key down events
          className="w-full rounded-lg rounded-r-none bg-transparent px-4 py-3 text-sm text-neutral-400 placeholder:text-neutral-400 focus:ring-0 focus:outline-none"
        />
        <label htmlFor="prompt" className="sr-only">
          What's on your mind?
        </label>
        <button
          type="submit"
          tabIndex={-1}
          aria-label="Submit"
          className="hover:text-brand-600 focus:text-brand-600 rounded-lg rounded-l-none p-2 text-neutral-400 transition-colors duration-300 focus:ring-0 focus:outline-none"
        >
          <SearchIcon className="mr-1 h-5 w-5" />
        </button>
      </form>
      {/* If nothing is found */}
      {searchInput && filteredPosts.length === 0 && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-neutral-900 p-4 text-left text-neutral-200 shadow-lg">
          <p className="text-neutral-400">
            There is nothing for "
            <span className="text-neutral-200">{searchInput}</span>".
          </p>
          <p className="mt-1 text-neutral-400">
            You can try to search for something else or hit enter to{" "}
            <a
              href="/contact"
              className="text-brand-500 hover:text-brand-400 transition-colors duration-300"
            >
              contact me{" "}
            </a>
            about it.
          </p>
        </div>
      )}
      {/* 1 or more results found */}
      {filteredPosts.length >= 1 && (
        <div className="animate-fade-in absolute z-10 mt-2 w-full overflow-hidden rounded-md bg-neutral-900 text-left text-neutral-200 shadow-lg">
          <ul className="divide-y-2 divide-neutral-950">
            {filteredPosts.slice(0, 3).map((post, index) => (
              <li
                key={post.id}
                className={`animate-fade-in px-4 py-3 tracking-wide transition-colors duration-300 focus-within:bg-neutral-800/80 hover:bg-neutral-800/80 ${
                  index === focusedIndex ? "bg-neutral-800/80" : ""
                }`}
              >
                <a href={`/blog/${post.id}`} className="focus:outline-none">
                  <p className="text-neutral-200">
                    {highlightText(post.title, searchInput)}
                  </p>
                  <p className="mt-1 text-sm text-neutral-400">
                    {highlightText(post.description, searchInput)}
                  </p>
                </a>
              </li>
            ))}
            {/* Only 1 result found */}
            {filteredPosts.length === 1 && (
              <li className="animate-fade-in px-4 py-3 text-sm tracking-wide transition-colors duration-300 focus-within:bg-neutral-800/80 hover:bg-neutral-800/80">
                <a
                  href="/contact"
                  className="block text-neutral-400 focus:outline-none"
                >
                  There is something for you! However, you can always
                  <span className="text-brand-500 hover:text-brand-400 transition-colors duration-300 focus:outline-none">
                    &nbsp;contact me&nbsp;
                  </span>
                  for your special needs.
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

// Does the highlighting, style it here
const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm) return text;
  const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <span key={index} className="bg-brand-600 text-neutral-50">
        {part}
      </span>
    ) : (
      part
    ),
  );
};
