# React Simple Clock

🕰 A simple clock in React

## Objectives

In this exercise you will learn

- React elements are immutable
- ReactDOM only updates what has changed
- React DevTools to view `props` and `state` changes
- React components cannot modify `props`
- React components can modify `state` with `setState()`

## Instructions

In the [previous exercise](https://github.com/thoughtworks-jumpstart/react-hello-world) we learned how to create React elements and to render them to the DOM.

One important thing to note is that React elements are [immutable objects](https://en.wikipedia.org/wiki/Immutable_object). This means that its content cannot be changed after it has been created.

If React elements are immutable, how can we build apps that require us to change its content?

We have used a naive approach to update our React component with the current time using `props` and used `setInterval()` to push the new props to the component.

In this exercise, your task is to convert the function component to a class component and use `state` to update the time instead.

## The clock

Let's look at our current implementation:

We defined a function component called `Clock` which returns the React element for the clock app.

We defined a function called `tick` which gets the current time and passes it to `Clock` as an attribute and then renders it to the DOM.

Lastly, we use `setInterval()` to call `tick` every one second.

## ReactDOM only updates what is necessary

Open your browser DevTools and observethat despite creating a React element with multiple HTML elements and rendering on every tick, only the content that has changed gets updated by ReactDOM.

This is because ReactDOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

## React DevTools

Download the [React DevTools](https://github.com/facebook/react-devtools) for either Chrome or Firefox.

Open React DevTools in your browser DevTools, go to settings and turn on `Highlight Updates` if it is not already checked.

You will see a blue border flashing. This is the component that is currently being updated. You will also notice a side panel, this is used to display the contents of `props` and `state` (if any).

## Props are read-only

React has one strict rule: React components must **never** modify its own props.

This is why we had to re-create the `Clock` element and pass it the current time each time we wanted to change its value.

## Components can change their state

In React, `state` allows React componenets to change their output in response to user actions, network calls, or anything else.

Currently, we initialize our `Clock` component like this `<Clock time={time} />` to pass in the time as `props`. This is because time keeps changing and since `props` cannot be mutated by the component itself we have to pass in the new time from outside.

In order for the component to update time on its own, we have to use `state` instead.

First, let's convert our function component to a class component. Add a constructor method and don't forget to call `super(props)`. In the constructor, you should also assign the initial value of `this.state`.

```js
constructor(props) {
    super(props)
    const time = (new Date()).toLocaleTimeString()
    this.state = { time }
  }
```

Next, we want to change `this.props.time` to `this.state.time` in our `render()` method.

Looks like everything is in order, but we still have one more problem to solve. How do we get the component to update itself every second?

## Lifecylce methods

That's where lifecyle methods come into play.

Refer to this [diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) to visualize the lifecycle of a React component.

Let's look at the most common lifecycle methods and their uses:

- [`componentDidMount()`](https://reactjs.org/docs/react-component.html#componentdidmount) - invoked immediately after a component is mounted.
- [`componentDidUpdate()`](https://reactjs.org/docs/react-component.html#componentdidupdate) - invoked immediately after updating occurs.
- [`componentWillUnmount()`](https://reactjs.org/docs/react-component.html#componentwillunmount) - invoked immediately before a component is unmounted and destroyed.

For our use case, we can use `componentDidMount()` to update our `state` with the current time using `setInterval()`.

Since `setInterval()` creates a new timer, this means that we have to also remove the timer after it is unmounted. We can do this with `clearInterval()` in the `componentWillUnmount()`.

## Using `state` correctly

Here are three things to keep in mind when managing `state`.

### 1. Use `setState()` to set `state`

Do not modify state directly, instead you should use `setState()` to update `state`

```js
// Wrong
this.state.name = "Bob";

// Correct
this.setState({ name: "Bob" });
```

### 2. React updates `state` asynchronously

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

### 3. React merges the object into the current state

When we call `setState()`, React merges the object into the current state.

This means you can update state independently with separate `setState()` calls.

For example, if you have `this.state.posts` and `this.state.comments`, doing `setState({ comments })` will replace `this.state.comments`, but keep `this.state.posts` intact.

## Differences between `state` and `props`

`props` (short for “properties”) and `state` are both plain JavaScript objects.

`props` get passed to the component (similar to function parameters) whereas `state` is managed within the component (similar to variables declared within a function).

`props` are read-only and components must not modify them. `state` can be modified using `setState()`.

## References

- [Updating the rendered element](https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element)
- [window.setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
- [React only updates what is necessary](https://reactjs.org/docs/rendering-elements.html#react-only-updates-whats-necessary)
- [Use `state` correctly](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly)
