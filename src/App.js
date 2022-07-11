import fetchUser from './services/rando_user'
import './App.css';
import { useState,useEffect } from 'react';
import UserSummary from './components/UserSummary.js'
function App() {
  const [currentUser,setCurrentUser] = useState(null);
  
  useEffect(()=>{
     refreshUser()
      },[])

  const refreshUser= async ()=>{
    console.log('hello')
  
  //data from calling the function needs to be inside another variable here.
  // const res = await fetchUser();

    const res=await fetchUser();
    console.log(res);

    //let name = `${res[0].name.first} ${res[0].name.last}`
    setCurrentUser(res[0])
  
    console.log('currentuser',currentUser)
    
  
  }
  

  
    //everything inside this function will be executed every time the application is rendered
    //ususally takes a second parameter as an array
    //you can specify the parameter inside the array. if its currentUser, everytime current user changes, useEffect is executed
    //empty array means oly when mounted it useEffect will be exeructe. not again.

   
 
  return(
    <div className="App">
    
    <button className="refresh" onClick={refreshUser}>REFRESH USER</button>
    <UserSummary userData={currentUser}/>
    </div>
  )


}

export default App