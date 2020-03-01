import React,{Component} from 'react'
import {Form,FormGroup,Label,Input,Container,Col,Row
,FormFeedback,Alert} from 'reactstrap'
import * as yup from 'yup'
import {getPokemon} from '../Services/pokemonServices'
import Pokemon from './Pokemon'
import Button from '@material-ui/core/Button';
class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            isNameValid:true,
            pokemon:null,
            pokemonExists:true
        }
    }
    onChange=(e)=>{
      const name =e.target.value 
      this.setState({
          name
      })
    }
    onClick= async (e)=>{
        e.preventDefault()
        const {name:poke}=this.state
        console.log(poke)
        let schema = yup.object()
        .shape({
            pokemon: yup.string().min(3).required()
        })
        const isValid = await schema.isValid({pokemon:poke})
        
        this.setState({
            isNameValid:isValid,
            pokemonExists:true 
        }) 
        if (!isValid) return
        let state ={}
        try{    
        const {data}= await getPokemon(poke)
        state={
            pokemonExists:true,
            pokemon:data
        }
        } catch(err){
            state.pokemonExists=false
        }
        this.setState(state)
    }

    
    render(){
        return <Container>
        <Row>

            <Col md='12'>
                <FormGroup>

                    <Label for="pokemon">
                     LOOK FOR A POKEMON   
                    </Label>
                    <Input 
                    type="text" name="pokemon" 
                    placeholder="Nombre del pokemon"
                    value={this.state.name}
                    onChange={this.onChange}
                    invalid={!this.state.isNameValid}/>
                {!this.state.pokemonExists &&
                //<FormFeedback valid={false}>El prokemon no existe</FormFeedback>}
                <Alert color='danger'>El pokemon no existe

                </Alert> }
                </FormGroup>
                <Button variant="contained"
                
                color="secondary"
                onClick={this.onClick}>Buscar</Button>

            </Col>
        </Row>
        {
            this.state.pokemon && 
            <Pokemon pokemon={this.state.pokemon}
            catchPokemon={this.props.catchPokemon}/>
        }
        
        </Container>
    }
}

export default Search