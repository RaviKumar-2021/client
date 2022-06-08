import React, { Component } from 'react'
import { useState } from 'react';
const Registation=()=> {
    
    const [email, setemail] = useState()
    const [pwd, setpwd] = useState()

    const getData =()=>{
postData();
    }
  const postData=()=>{  
    const data = { 
      email: 'email' ,
      password:'pwd'

    };

fetch('mongodb://localhost:27017/example', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}


    
    return (
     
        <div class="container">
  <h2>Login</h2>
    <div class="form-group">
      <div class="col-sm-12">
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={
            (e)=>{
            setemail(e.target.value);
            }
        }/>
      </div>
    </div>
    <div class="form-group"> 
      <div class="col-sm-12">          
      console.log(email)
        <input type="password" class="form-control"  placeholder="Enter password" onChange={(e)=>{
          setpwd(e.target.value)
        }}        
        />
      </div>
    </div>
    <div class="form-group">        
      <div class="col-sm-12">
        <div class="checkbox">
          <label><input type="checkbox" name="remember" /> Remember me</label>
        </div>
      </div>
    </div>
    <div class="form-group">        
      <div class="col-sm-12">
       <button onClick={getData} class="form-control"></button>
      </div>
    </div>
  
</div>

        
    )
  }


export default Registation