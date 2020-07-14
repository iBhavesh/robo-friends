import React, { Component } from "react";
import "./App.css";
import Scroll from "../Components/Scroll";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
      /*user: {
        count: 1,
        name: 'Bhavesh Sharma'
      },*/
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange(event) {
    this.setState({ searchField: event.target.value });
    //Update State CallBack
    /*this.setState(state => ({
      user: {
        ...state.user,
        count: state.user.count++
      }
    }));*/
  }

  render() {
    //console.log('state.user:', this.state.user);
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox
            searchField={this.state.searchField}
            searchChange={this.onSearchChange}
          />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
