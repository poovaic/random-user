import axios from 'axios';
//import React from 'react';

const fetchUser = async()=>{
   let baseURL='https://api.randomuser.me/'
   try{
    const response = await axios.get(baseURL);
    //console.log('apicall',response.data.results);
    return response.data.results;

   
   }

   catch(error){
    console.log(error)
   }
}
//fetchUser()

export default fetchUser