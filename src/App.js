import './App.css';
import { Component} from "react";
import moment from 'moment';
import Form from './components/Form';
import ClockWrap from './components/ClockWrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      clocks: [],
      UTC: null
    }
  }
  componentDidMount() {
    this.currentTime();
  }

  componentWillUnmount() {
    clearInterval(this.currentTime);
  }

  handleRemove = id => {
    this.setState(prevState => ({
      clocks: prevState.clocks.filter(clock => clock.id !== id)
    }));
  };

  handleAdd = clock => {
    this.setState(prevState => ({
      clocks: [...prevState.clocks, clock]
    }));
  };

  currentTime = () => {
    setInterval(() => {
      this.setState({
        UTC: moment().utc()
      });
    }, 1000);
  };

  render(){
    return (
      <div className="App">
        <Form handleAdd={this.handleAdd}/>
        <ClockWrap
            clocks={this.state.clocks}
            UTC={this.state.UTC}
            handleRemove={this.handleRemove}
          />
      </div>
    )
  }
}

export default App;
