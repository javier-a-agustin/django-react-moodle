import React, { useState } from 'react'

export const RegisterScreen = () => {
    const initUserInfo = {
        "username": "",
        "email": "",
        "password": "",
    }
    const [userInfo, setUserInfo] = useState(initUserInfo)
    
    const handleUsernameChange = (e) => {
        setUserInfo(
            {...userInfo, "username": e.target.value}
        )
    }
    const handleEmailChange = (e) => {
        setUserInfo(
            {...userInfo, "email": e.target.value}
        );
    }

    const handlePasswordChange = (e) => {
        setUserInfo(
            {...userInfo, "password": e.target.value}
        );
    }


    const handleSubmit =  (e) => {
        e.preventDefault();
        const url = "http://127.0.0.1:8000/api/register/";
        const data = makeRequest(url);
        setUserInfo(initUserInfo);
    }

    const makeRequest = (url) => {
        const data = fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)  
          }
        ) 
            .then(response => {
            })
            .catch(function(error) {
                console.log("ERROR", error);
            });  
        return data
    }


    return (
        <div>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src="http://www.articaonline.com/wp-content/uploads/2016/09/Moodle-1.png" id="icon" alt="User Icon" />
                    </div>

                    <form onSubmit={ handleSubmit }>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username"  onChange={ handleUsernameChange } value={ userInfo.username }/>
                        <input type="email" id="email" className="fadeIn third" name="email" placeholder="Email"  onChange={ handleEmailChange } value={ userInfo.email }/>
                        <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password"  onChange={ handlePasswordChange } value={ userInfo.password }/>
                        <input type="submit" className="fadeIn fourth" value="Register"/>
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="/login">Already have an account? Login</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
