import React,{Component} from 'react';
import Tilt from 'react-tilt';
import "./logo.css";
import astronaut1 from "../img/astronaut1.png"



class Logo extends Component
{
	render()
	{
		return(

		<Tilt className="Tilt center" options={{ max : 60 }} style={{ height: 130, width: 150 }} >
 			<div className="Tilt-inner center"><img alt ="logo" src = {astronaut1}/></div></Tilt>



			)
	}
}

export default Logo;