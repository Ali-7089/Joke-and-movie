import React, { Component } from 'react'
import Navigation from './Component/Navigation'
import Search from './Component/Search'
import Show from './Component/Show'
import HomePage from './Component/HomePage'
import {BrowserRouter, Route , Switch} from 'react-router-dom'

 class App extends Component {


  componentDidMount(){
    fetch(
      "https://jokeapi-v2.p.rapidapi.com/joke/Any?type=single%2Ctwopart&format=json&idRange=0-303&blacklistFlags=nsfw%2Cracist",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
          "44b43c5199msh40ab10a323331cap13ad60jsn9319419a751e",
          "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
        },
      }
      )
     .then(response=>response.json())
     .then(readable=>console.log(readable))
       
  }

  render() {
    return (
      <BrowserRouter>
        <Navigation/>
       <Switch>
          <Route path='/search' component={Search} />
          <Route path='/show' component={Show} />
          <Route exact path='/' component={HomePage} />
          
       </Switch>
      </BrowserRouter>
    )
  }
}
export default App;