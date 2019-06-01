function Header(props) {
  return <h1>{props.title}</h1>;
}

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
    return <h2>It is {this.state.time}</h2>;
  }
}

function App() {
  return (
    <React.Fragment>
      <Header title="What's the time now?" />
      <Clock />
    </React.Fragment>
  );
}

const element = <App />;

const container = document.getElementById("app");

ReactDOM.render(element, container);
