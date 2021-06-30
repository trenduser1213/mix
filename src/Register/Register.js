import React from 'react';
import 'tachyons';
import Tilt from 'react-tilt';

    const Register = ({onRouteChange}) =>{
            return (
                <article style={{marginTop : '150px'}} class="br3 ba dark-gray  mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 text-light black-80">
                <form className="measure center">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                      <Tilt className="Tilt input w-90" options={{ max : 15 }} style={{  }} >
                        <div className = " Tilt-inner ">
                             <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                          </div>
                      </Tilt>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                      <Tilt className="Tilt input w-90" options={{ max : 15 }} style={{  }} >
                        <div className = " Tilt-inner ">
                             <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                          </div>
                      </Tilt>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                      <Tilt className="Tilt input w-90" options={{ max : 15 }} style={{  }} >
                        <div className = " Tilt-inner ">
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white text-light w-100" type="password" name="password" id="password" />
                        </div>
                    </Tilt>
                    </div>
                  </fieldset>
                  <div className>
                    <input 
                    onClick={() => onRouteChange('Login')}
                    className="b ph3 pv2 input-reset ba l--light bg-transparent grow pointer f6 dib text-light" 
                    type="submit" 
                    defaultValue="Register" />
                  </div>
                </form>
              </main>
            </article>
            
            )
        

    }
    export default Register;