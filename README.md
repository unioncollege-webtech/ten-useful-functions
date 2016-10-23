Ten Useful Functions
====================

[![Join the chat at https://gitter.im/unioncollege-webtech/ten-useful-functions](https://badges.gitter.im/unioncollege-webtech/ten-useful-functions.svg)](https://gitter.im/unioncollege-webtech/ten-useful-functions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Write ten functions that are useful in some way, and demonstrate their use both by calling them directly and by passing them to [Array iteration methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods) like .map(), .forEach(), .filter(), .reduce(), .every().

Description
-----------

The only way to write better code is to write more code. In this exercise, you'll
write at minimum ten different functions and use them in some way.

Here are a few ideas:

### Strings

- upperCase(string): Return `string` in all CAPITAL LETTERS.
- lowerCase(string): Return `string` in all lowercase letters.
- capitalize(string): Return `string` with the first letter Capitalized.
- sentenceCase:  Return `string` with the first letter capitalized, and convert the rest of the string to lowercase.
- titleCase(string): Return `string` with Every Word Capitalized.
- camelCase(string): Return `string` converted to camelCase by capitalizing all words but the first, and removing all non-word characters (everything but a–z, A–Z, 0–9, and _ (underscore)). For example: "Bermuda Love Triangle is Awesome!!" would be converted to "bermudaLoveTriangleIsAwesome".
- snakeCase(string): Return `string` converted to "snake_case": separate out all "camelCased" words, lowercase all characters, and replace non-word characters (or multiple non-word characters) with a single underscore. Remove beginning or trailing underscores.
- kebobCase(string): Return `string` converted to "snake_case": separate out all "camelCased" words, lowercase all characters, and replace non-word characters (or multiple non-word characters) with a hyphen (-). Remove beginning or trailing underscores.


### Number Utilities

- range(start, end, step): Return an Array of numbers (positive and/or negative) progressing from `start` up to, but not including, `end`. Increment by `step` if provided, or `1` if not. If `end` is less than `start`, a zero-length range is created unless a negative `step` is specified.
- largest: Return the greater of two numbers
- smallest: Return the smaller of two numbers

### Functional Utilities

- constant(value): Return a function that ALWAYS returns a specific value
- is(value): Return a function that returns `true` when passed something strictly equal to `value`, and `false` when passed something other than `value`.
- greaterThan(n): Return a function that returns `true` when passed a number greater than `value`, and `false` when passed something equal to or smaller than `value`.
- greaterThanOrEqualTo(n): Return a function that returns `true` when passed a number greater than or equal to `value`, and `false` when passed something smaller than `value`.
- lessThan(n): Return a function that returns `true` when passed a number less than `value`, and `false` when passed something equal to or greater than `value`.
- lessThanOrEqualTo(n): Return a function that returns `true` when passed a number less or equal to `value`, and `false` when passed something greater than `value`.
- noop(): Define a function that takes no parameters, has no method body, and returns nothing.
- compose(fn1, fn2[, ...fnN]): Return a new function such that `compose(fn1, fn2)(1, 2)` is the same as `fn1(fn2(1, 2))`.
- pipe(fn1[, fn1[, ...fnN]):  Return a function that, when executed, passes its arguments 
