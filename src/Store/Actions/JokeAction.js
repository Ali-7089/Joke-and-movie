import {GET_JOKES} from '../ActionType'

export const GetJokeAction = ()=> dispatch =>{
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
       .then(readable=>{
           console.log(readable)
           let jokeobj = {};
           if(readable.type === 'twopart'){
             jokeobj.question = readable.setup;
             jokeobj.answer = readable.delivery;
             jokeobj.type = readable.type
           } else if(readable.type === 'single'){
               jokeobj.type =  readable.type;
               jokeobj.joke = readable.joke
           }
           return dispatch ({
               type:GET_JOKES,
               payload:jokeobj
           })
       })
       .catch(err => console.log(err))
}