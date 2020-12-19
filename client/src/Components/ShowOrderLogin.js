import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'


function ShowOrderLogin() {
    const [login,setlogin]=useState('')
    const [pass,setpass]=useState('')
    const [loggedin,setloggedin]=useState(false)
    const [registered,setregistered]=useState(false)
    const RegisteredUsers=[]

    useEffect(() => {
        if(login !== '' && pass !== '')
        {
            const payload = {username:login,password:pass}

             axios.post("http://localhost:4000/user/add",payload)
             .then(()=>{
                  console.log('axios to mongodb')
             })
             .catch(()=>{
                  console.log('unable  to send from axios to mongodb')
             })
    
        }//end of if
    }, [registered])

    useEffect(() => {
       if(login !== '' && pass !== '')
       {
        const payload = {username:login,password:pass}

        axios.get("http://localhost:4000/user/registered",payload)
        .then((d)=>{
             console.log('axios to mongodb')
        })
        .catch(()=>{
             console.log('unable  to send from axios to mongodb')
        })

       }//if block

    }, [loggedin])

    return (
        <div className="row">
            <div class=" col-lg-4 center-block">
            <div class="card card-signin my-5">
            <div class="card-body">
                <form >
                <div class="form-label-group ">
                <input type="text" id="login" class="form-control mr-sm-2" name="login" placeholder="login" value={login} onChange={(e)=>{setlogin(e.target.value)}}/>
                </div>
                <div class="form-label-group">
                <input type="text" id="password" class="form-control mr-sm-2" name="password" placeholder="password" value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
                </div>
                <div class="form-label-group">   
                <button className="btn btn-outline-success mr-sm-4 my-2 my-sm-0" onClick={(e)=>{ e.preventDefault(); setloggedin(true)}}>Login</button>
                <button className="btn btn-outline-success mr-sm-4 my-2 my-sm-0" onClick={(e)=>{ e.preventDefault(); setregistered(true)}}>Register</button>
                </div> 
                </form>
            </div>
            </div>
            </div>

        </div>
    )
}

export default ShowOrderLogin