---
title: Custom errors in JavaScript ⚠️
publishDate: 2018-04-27
tags: [javascript]
description: Create custom error types in JavaScript by extending Error prototype for better error handling.
relatedPosts: ["make-consolelog-stand-out-with-custom-css-style"]
---

Javascript provides the ability to create custom errors by modifying the prototype of a function to the Error protorype. This is how one would create a custom error:

```javascript
function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}
ValidationError.prototype = Error.prototype;

// USAGE
throw new ValidationError("the form is invalid");
```

To catch it you can check the class of an error using
`instanceof`:

```javascript
try {
  // do stuff
  throw new ValidationError("the form is invalid");
} catch (ex) {
  if (ex instanceof ValidationError) {
    alert(ex.message); // the form is invalid
  } else {
    // crash and burn
    throw ex;
  }
}
```
