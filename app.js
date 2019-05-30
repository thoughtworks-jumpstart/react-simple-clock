const element = (
  <div>
    <h1>What's the time now?</h1>
    <h2>It is {new Date().toLocaleTimeString()}</h2>
  </div>
);

const container = document.getElementById("app");

ReactDOM.render(element, container);

// Wrap the above code in a function block and use setInterval to call it every second
