import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./Components/Search";
import Profile from "./Components/Profile";
import Pokedex from "./Components/Pokedex";
import Menu from "./Components/Menu";
import { Row, Col, Container } from "reactstrap";





class App extends Component {
  constructor(props){
    super(props)
    this.state={
      pokemons:[]
    }
  }
  catchPokemon=(pokemon)=>{
    this.state.pokemons.push(pokemon)
    this.setState({
      pokemons:this.state.pokemons
    })
  }
  deletePokemon=(pokemon)=>{
    this.state.pokemons.pop(pokemon)
    this.setState({
      pokemons:this.state.pokemons
    })
    
  }
  render() {
    return (
      <Router>
        <Menu />
        <Container>
          <Row>
            <Col md="2"></Col>
            <Col md="8">
              <Switch>
                <Route path="/pokedex">
                <Pokedex pokemons={this.state.pokemons}/>
                </Route>
                <Route path="/profile" component={Profile}>
                <Profile pokemons={this.state.pokemons}/>
                </Route>
                <Route path='/'>
                  <Search catchPokemon={this.catchPokemon}/> 
                  </Route>
              </Switch>
            </Col>
            <Col md="2"></Col>
          </Row>
        </Container>
      </Router>
    );
  }
}
export default App;
