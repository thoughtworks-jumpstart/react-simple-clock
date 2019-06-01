function Clock(props) {
  return (
    <div>
      <h1>What's the time now?</h1>
      <h2>It is {props.time}</h2>
    </div>
  );
}

function tick() {
  const time = new Date().toLocaleTimeString();
  const element = <Clock time={time} />;
  const container = document.getElementById("app");
  ReactDOM.render(element, container);
}

setInterval(tick, 1000);
