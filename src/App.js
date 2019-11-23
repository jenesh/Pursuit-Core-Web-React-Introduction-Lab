import React from 'react';
import './App.css';
import Posts from './Components/Posts'
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import Contacts from './Components/Contacts';

class App extends React.Component {
  state = {
    flag: false
  }

  componentDidMount = () => {
    this.setState({ flag: true })
    console.log('componetn mouted')
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <UserProfile />
        <Posts />
        <Contacts />
        <button onClick={(e) => this.setState(prev => ({ flag: !prev.flag }))}> </button>
      </div>
    );
  }
}

export default App;
