import React , {useState} from 'react'
import {GetJokeAction} from './../Store/Actions'
import {connect} from 'react-redux'

function Search(props) {
 
    const [search, setsearch] = useState('')

   const onchangeHandler =(e)=>{
         e.persist()
         setsearch(e.target.value)
   }

   const onSubmitHandler=(e)=>{
        e.preventDefault()
        props.GetJokeAction()
   }

    return (
        <div className="conatiner mt-5 p-5 text-centre" >
            <form onSubmit={onSubmitHandler}>
              <input type="text" 
              onChange={onchangeHandler}
              value={search}
              name="search"
              placeholder="search here afor api ....."
              className="alert alert-dark"
               />  
               <button className="btn btn-primary">Search</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = ({
    GetJokeAction
})


export default connect(null , mapDispatchToProps)(Search); 
