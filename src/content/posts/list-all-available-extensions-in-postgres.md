---
title: "List all available extensions in #Postgres"
slug: "list-all-available-extensions-in-postgres"
description: "A quick guide to listing and enabling available extensions in PostgreSQL using pg_available_extensions."
publishDate: 2017-11-22
tags: ["sql", "postgres"]
isDraft: false
isFeatured: false
canonicalUrl: "https://til.hashrocket.com/posts/84gq2ppkgu-list-all-available-extensions-in-postgres"
relatedPosts: ["case-insensitive-in-query-in-postgres-psql", "show-materialized-view-definition-in-postgresql", "quick-syntax-reference-for-sql-directly-in-psql"]
---

Postgres comes packed with extensions just waiting to be enabled!

To see a list of those extensions:

```sql
select * from pg_available_extensions;
```

This will list the extension's `name`, `default_version`, `installed_version`, and the `comment` which is a one liner description of what the extension does.

Here's an interesting one for example:

```
name              | earthdistance
default_version   | 1.1
installed_version | ø
comment           | calculate great-circle distances on the surface of the Earth
```

To enable an extension, simply call `create extension` on the name:

```sql
create extension if not exists earthdistance;
```