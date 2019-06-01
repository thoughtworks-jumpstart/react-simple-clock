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
