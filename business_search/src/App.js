import React , {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/userInputComponent/UserInputComponent';
import UserOutput from './components/userOutputComponent/UserOutputComponent';

class App extends Component{
  constructor(props){
    super();
    this.state = {
      searchKey:'Your search Key'
    };
  }

  searchkeyChangehandler = (keyEvent) =>{
    this.setState({
      searchKey: keyEvent.target.value
    });
  };

  render(){
    return (
      <div className="App">
        this is app.js
        <div>
          <UserInput changed={this.searchkeyChangehandler} searchKey={this.state.searchKey} />
          <UserOutput searchKey={this.state.searchKey} />
        </div>
      </div>
    );
  };
}

export default App;
