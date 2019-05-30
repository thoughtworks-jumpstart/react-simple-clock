# React Simple Clock

🕰 A simple clock in React

## Objectives

In this exercise you will learn that

- React elements are immutable
- Update elements by using `setInterval()`

## Instructions

In the [previous exercise](https://github.com/thoughtworks-jumpstart/react-hello-world) we learned how to create React elements and to render them to the DOM.

In this exercise, we will look at how to update these elements.

One important thing to note is that React elements are [immutable objects](https://en.wikipedia.org/wiki/Immutable_object). This means that its content cannot be changed after it has been created.

If React elements are immutable, how can we build apps that require us to change its content?

In the case of a clock app, our seconds should change every one second. Wrap the code you see in `app.js` in a function block and use `setInterval()` to call the function every one second.

## References

- [Updating the rendered element](https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element)
- [window.setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)