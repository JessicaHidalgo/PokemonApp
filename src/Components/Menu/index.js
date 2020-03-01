import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class Menu extends Component{
    render(){
        return  <nav>
        <ul>
        <li>
          <Link to='/'>Search</Link>
        </li>
        <li>
          <Link to='/pokedex'>Pokedex</Link>
        </li>
        <li>
          <Link to='profile'>profile</Link>
        </li>
        </ul>
     
        </nav>
    }
}

export default Menu