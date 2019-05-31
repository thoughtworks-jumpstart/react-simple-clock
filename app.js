function Clock(props) {
  return (
    <div>
      <h1>What's the time now?</h1>
      <h2>It is {props.date}</h2>
    </div>
  );
}

function tick() {
  const date = new Date().toLocaleTimeString();
  console.log("happy");
  const element = <Clock date={date} />;
  const container = document.getElementById("app");
  ReactDOM.render(element, container);
}

setInterval(tick, 1000);
