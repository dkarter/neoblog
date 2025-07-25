---
title: 📅 Get beginning and end of week with Moment.js
publishDate: 2018-04-26
tags: [javascript]
description: Get beginning and end of week using Moment.js startOf/endOf functions with locale and ISO 8601 support.
---

To get the date for beginning of week for a date in moment you can use the `startOf` and `endOf` functions on moment objects.

```javascript
const today = moment();
const from_date = today.startOf('week');
const to_date = today.endOf('week');
console.log({
  from_date: from_date.toString(),
  today: moment().toString(),
  to_date: to_date.toString(),
});

// {
//   from_date: "Sun Apr 22 2018 00:00:00 GMT-0500",
//   today: "Thu Apr 26 2018 15:18:43 GMT-0500",
//   to_date: "Sat Apr 28 2018 23:59:59 GMT-0500"
// }
```

NOTE: Remember that the start of week will depend on the user's locale settings on their machine. If you want to use start of week based on ISO 8601 you can use `moment().startOf('isoWeek');`

The same technique can be used for start of month (`startOf('month')`), start of year (`startOf('year')`) and even quarter (`startOf('quarter');`).