import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock_functional from './components/ClockFunctionalComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }

  resetTimer(){
    this.setState({
      date:new Date()
    });
  }

  componentDidMount(){
    this.timerId = setInterval(
      () => {this.resetTimer()}
      ,1000
      );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render(){
    return (
      <div className="App">
        <p>This is App.js</p>
        <Clock_functional date={this.state.date} />
      </div>
    );
  };
  
}

export default App;
