# React Simple Clock

🕰 A simple clock in React

## Objectives

In this exercise you will learn that

- React elements are immutable
- ReactDOM only updates what has changed
- React components cannot modify `props`
- React components can modify `state`

## Instructions

In the [previous exercise](https://github.com/thoughtworks-jumpstart/react-hello-world) we learned how to create React elements and to render them to the DOM.

One important thing to note is that React elements are [immutable objects](https://en.wikipedia.org/wiki/Immutable_object). This means that its content cannot be changed after it has been created.

If React elements are immutable, how can we build apps that require us to change its content?

In this exercise, we will look at how to update these elements.

## The clock

Let's look at our current implementation:

We defined a function component called `Clock` which returns the React element for the clock app.

We defined a function called `tick` which gets the current date and time and passes it to `Clock` as an attribute and then renders it to the DOM.

Lastly, we use `setInterval()` to call `tick` every one second.

## ReactDOM only updates what is necessary

Open your browser DevTools and observethat despite creating a React element with multiple HTML elements and rendering on every tick, only the content that has changed gets updated by ReactDOM.

This is because ReactDOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

## Props are read-only

React has one strict rule: React components must **never** modify its own props.

This is why we had to re-create the `Clock` element and pass it the date each time we wanted to change its value.

## State and lifecycle

In React, `state` allows React componenets to change their output in response to user actions, network calls, or anything else.

## Using `state` correctly

Do not modify state directly

```js
// Wrong
this.state.name = "Bob";

// Correct
this.setState({ name: "Bob" });
```

For performance reasons, React may batch multiple `setState()` calls into a single update.

Because `props` and `state` may be updated asynchronously, you should not rely on their values for calculating the next `state`.

Instead of passing `setState()` an object, we can pass it a function that will receive the previous `state` and previous `props` as arguments.

```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment
});

// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

## Differences between `state` and `props`

`props` (short for “properties”) and `state` are both plain JavaScript objects.

`props` get passed to the component (similar to function parameters) whereas `state` is managed within the component (similar to variables declared within a function).

`props` are read-only and components must not modify them. `state` can be modified using `setState()`.

## References

- [Updating the rendered element](https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element)
- [window.setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
- [React only updates what is necessary](https://reactjs.org/docs/rendering-elements.html#react-only-updates-whats-necessary)
- [Use `state` correctly](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly)
