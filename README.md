# Nested `for` Loops

Nested for Loops in an exercise to help with building two dimensional data structures using `for` loops. Using iteration to build strings, arrays or objects is a common practice as a software developer.

## Setup

The exercise will use the browser as your runtime and for testing.
You will need to serve the `index.html` file to run the tests. One way to do this it to use `live-server`.

### Install live-server

`$ npm install -g live-server`

To serve the project you will run `live-server` from the root of the project.

`$ live-server`

This will launch your browser to `http://127.0.0.1:8080`

## Requirements

Here you are asked to finish out the function `nestedForLoops()` found in `js/nested-for-loops.js`. This function can take either one or two numeric parameters. With those parameters you will generate a string output.

### Examples

|invocation|output|
|---|---|
|`nestedForLoops(2)`|`{x:0, y:0}, {x:1, y:0}`<br>`{x:0, y:1}, {x:1, y:1}`|
|`nestedForLoops(4, 2)`|`{x:0, y:0}, {x:1, y:0}`<br>`{x:0, y:1}, {x:1, y:1}`<br>`{x:0, y:2}, {x:1, y:2}`<br>`{x:0, y:3}, {x:1, y:3}`|
|`nestedForLoops()`|""|
|`nestedForLoops("foo")`|""|

## Testing

There are predetermined test you will need to make pass. 

1. invoke with a single parameter.
1. invoke with the first param greater than the second.
1. invoke with the first param less than the second.
1. invoke with no params.
1. invoke with a non-numeric param.

### Debugging

To manually invoke `nestedForLoops` open the browsers console. `nestedForLoops` is available on the global scope and can be invoked directly.

## Console: ⌥⌘J (Mac) or Ctrl + Shift + J (Windows/Linux)

```bash
> nestedForLoops(6, 3)
"
{x:0, y:0}, {x:1, y:0}, {x:2, y:0}
{x:0, y:1}, {x:1, y:1}, {x:2, y:1}
{x:0, y:2}, {x:1, y:2}, {x:2, y:2}
{x:0, y:3}, {x:1, y:3}, {x:2, y:3}
{x:0, y:4}, {x:1, y:4}, {x:2, y:4}
{x:0, y:5}, {x:1, y:5}, {x:2, y:5}
"
```