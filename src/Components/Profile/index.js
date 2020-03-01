import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Row, Col, Container, Button } from "reactstrap";
class Profile extends Component {
  onClick(props) {}
  render() {
    const { pokemons } = this.props;
    return (
      
      <Container>
        {pokemons.map(p => (
          <Row>
            <Col md="6"></Col>
            <img src={p.sprites.front_default} />
            <img src={p.sprites.back_default} />

            <Col md="6">
              <ul>
                <li>Id:{p.id}</li>
                <li>Name:{p.name}</li>
                
                <Button
                
                  onClick={() => {
                    var i = pokemons.indexOf(p);
                    pokemons.splice(i, 1);
                    console.log(pokemons);
                    
                  }}
                  >
                   Delete </Button>
              </ul>
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
}

export default Profile;
