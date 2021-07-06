import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { types } from '../auth/types';
import { useForm } from '../helpers/useForm';
import '../css/login-style.css'

export const AuthScreen = () => {
    
    const { dispatch } = useContext( AuthContext );

    const [displayLogin, setdisplayLogin] = useState({"login": true, "register": false});

    const [ loginValues, handleInputChange ] = useForm({
        username: '',
        password: '',
    });

    const { username, password } = loginValues;

    const [ registerValues, handleInputChangeR ] = useForm({
        register_username: '',
        register_email: '',
        register_password: '',
    });

    const { register_username, register_email, register_password } = registerValues;
    
    const handleLogin = (e) => {
        e.preventDefault();


        const url = "http://127.0.0.1:8000/api/login/";
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(loginValues)  
            }
        ) 
            .then(response => response.json() 
            .then(data => {
                if ('token' in data) {
                    dispatch({
                        payload: data,
                        type: types.login
                    }, );
                }   
            }) )
            .catch(function(error) {
                console.log("ERROR", error);
            });  
    }

    const handleCreateUser = (e) => {
        e.preventDefault();
        const payload = {
            username: registerValues.register_username,
            email: registerValues.register_email,
            password: registerValues.register_password
        }
        const url = "http://127.0.0.1:8000/api/register/";
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)  
          }
        ) 
            .then(response => {
                const status_code = response.status;
                if (status_code === 201) {
                    setdisplayLogin({"login": true, "register": false});
                } else {
                    // show message
                }
            })
            .catch(function(error) {
                console.log("ERROR", error);
            }); 
    }


    
    const changeAuthView = () => {
        displayLogin.login === true ? setdisplayLogin({"login": false, "register": true}) : setdisplayLogin({"login": true, "register": false});
    }
    return (
        <div>

            {
                displayLogin.login === true ?
                    <div className="wrapper fadeInDown">
                        <div id="formContent" className="mt-5 ">

                            <div className="fadeIn first">
                                <img src="http://www.articaonline.com/wp-content/uploads/2016/09/Moodle-1.png" id="icon" alt="User Icon" />
                            </div>

                            <form onSubmit={ handleLogin }>
                                <input type="text" id="username" className="fadeIn second" name="username" placeholder="Username" value={ username } onChange={ handleInputChange }/>
                                <input type="password" id="password" className="fadeIn third" name="password" placeholder="Password" value={ password } onChange={ handleInputChange }/>
                                <input type="submit" className="fadeIn fourth" value="Log In"/>
                            </form>

                            <div id="formFooter">
                                <a className="underlineHover" onClick={ changeAuthView }>Don't have an acount? Create account</a>
                            </div>

                        </div>
                    </div>
                :
                    <div className="wrapper fadeInDown">
                        <div id="formContent">

                            <div className="fadeIn first">
                                <img src="http://www.articaonline.com/wp-content/uploads/2016/09/Moodle-1.png" id="icon" alt="User Icon" />
                            </div>

                            <form onSubmit={ handleCreateUser }>
                                <input type="text" id="login" className="fadeIn second" name="register_username" placeholder="Username" value={ register_username } onChange={ handleInputChangeR }/>
                                <input type="email" id="email" className="fadeIn third" name="register_email" placeholder="Email"  value={ register_email } onChange={ handleInputChangeR }/>
                                <input type="password" id="password" className="fadeIn third" name="register_password" placeholder="Password" value={ register_password } onChange={ handleInputChangeR }/>
                                <input type="submit" className="fadeIn fourth" value="Register"/>
                            </form>

                            <div id="formFooter">
                                <a className="underlineHover" onClick={ changeAuthView }>Already have an account? Login</a>
                            </div>

                        </div>
                    </div>
                
            }
        </div>

    )
}
