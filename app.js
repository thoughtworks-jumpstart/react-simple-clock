class Clock extends React.Component {
  constructor(props) {
    super(props);
    const time = new Date().toLocaleTimeString();
    this.state = { time };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      this.setState({ time });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h1>What's the time now?</h1>
        <h2>It is {this.state.time}</h2>
      </div>
    );
  }
}

function tick() {
  const element = <Clock />;
  const container = document.getElementById("app");
  ReactDOM.render(element, container);
}

setInterval(tick, 1000);
