---
title: Get last nth elements from Enumerable in #Elixir
publishDate: 2018-06-23
tags: [elixir]
description: Learn how to get the last n elements from an Enumerable in Elixir using Enum.take with negative numbers.
---

You probably know about `Enum.take(n)` where `n` is a number dictating how many elements you want to take from an Enumerable. Use it like this:

```elixir
[1, 2, 3, 4, 5]
|> Enum.take(3)
# => [1, 2, 3]
```

But how can you get the last 3 elements? Just use a negative number!

```elixir
[1, 2, 3, 4, 5]
|> Enum.take(-3)
# => [3, 4, 5]
```