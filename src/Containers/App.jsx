import React, { Component } from "react";
import "./App.css";
import Scroll from "../Components/Scroll";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import { setSearchField } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  render() {
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox
            searchField={this.state.searchField}
            searchChange={onSearchChange}
          />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
