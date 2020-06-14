import React , {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import activities_data from './components/data/data';

class App extends Component {
  render(){

    const activities = activities_data;
    
    return (
      <div className="App">
        <div className="notificationsFrame">
          <div className="panel">
            {/* content is here !*/}
            <Header title="Timeline"/>
            <Header title="Profile"/>
            <Header title="Settings"/>
            <Header title="Chat"/>
            <Content activities={activities}/>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
