import React from 'react';
import './App.css';
import SearchBox from './Components/SearchBox';
import CardList from './Components/CardList';
import Scroll from './Components/Scroll';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> {
        return response.json();
      })
      .then(users => {
        this.setState({robots: users})
      })
    
  }
    
  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    })
  }

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (!robots.length) {
      return <h1>Loading</h1>
    }
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
        
      </div>
    );
  }
 
}

export default App;
