import React,{Component} from 'react';
import "./Input.css";
import Logo from "../logo/logo";
import Tilt from 'react-tilt';
class Input extends Component
{
	
	render(){
		return(
			<div style={{marginTop : '30px'}}>
				<Logo/>
				<div className="illustration">
                  <header>
                    <h1 className="text-monospace text-light">Neal_Amstrong</h1>
                  </header>
                  <p className="text-white " /*style={{paddingTop: '23px'}}*/>
                    This Magic Brain Will Detect Faces in Your Pictures.Give It a Try.
                  </p>
				</div>
				<Tilt className="Tilt input w-50" options={{ max : 35 }} style={{  }} >
					<div className='center'>
						<div className = " Tilt-inner  inputBox shadow-5 w-100 pa4 br3 form">
							<input id="ya" onChange = {this.props.onInputChange} className = "f4 pa2 w-70 center " type="text" placeholder="Enter your URL and get the faces detected"/>
							<button id="ya" onClick =  {this.props.onButtonClick} className = "link w-30 grow pointer subbutton"> Detect</button>
						</div>
					</div>
				</Tilt>
			</div>
			)
	}
}


export default Input;