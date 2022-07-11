//import NullMessage from './NullMessage.js'
import {useState} from 'react'
function UserSummary(userData){
    const[showMore,setShowMore]=useState(false)
    console.log(showMore)


console.log(userData)
console.log('name',userData.userData)
let name=userData.userData
   if(name===null){
    return<h2>No user data</h2>}
else if(showMore===false){
    return(
       
    <div>
         <button className="show-more" onClick={()=>setShowMore(!showMore)}>MORE/LESS</button>
         <h2><span className="keys">Name:</span>{userData.userData.name.first} {userData.userData.name.last} </h2>
        <h2><span className="keys">Email:</span>{userData.userData.email}</h2>
    
    </div>

    )
   
}
else if(showMore===true){
    return(
    <div>
    
    <button className='show-more' onClick={()=>setShowMore(!showMore)}>MORE/LESS</button><br></br>
    <img className="picture" src={userData.userData.picture.medium} alt="image"></img>
    <h2><span className="keys">Name:</span> {userData.userData.name.title}{userData.userData.name.first} {userData.userData.name.last} </h2>
    <h2><span className="keys">Email:</span>  {userData.userData.email}</h2>
    <h2><span className="keys">Street:</span>  {userData.userData.location.street.name}</h2>
    <h2><span className="keys">City:</span>  {userData.userData.location.city}</h2>
    <h2><span className="keys">State:</span>  {userData.userData.location.state}</h2>
    <h2><span className="keys">Username:</span> {userData.userData.login.username}</h2>
    
    </div>
    )
}

  
}
export default UserSummary