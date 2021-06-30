import React,{Component} from 'react';
import "./FaceRecognition.css";
import Tilt from 'react-tilt';


class FaceRecognition extends Component
{
	render()
	{
		return(
				<Tilt className="Tilt br2 center shadow-2" options={{ max: 50 }} style={{ height: 300, width: 300 }}>
                  <div className="Tilt-inner pa3">
                    {/* <img src={astronaut1} alt="img" style={{ width: '232px' }} /> */}
					<img onLoad = {this.props.getImageData} className = "" src = {this.props.searchName} width ="300px" height = "auto" alt =""/>
					<div className = "bounding-boxes" style ={ {top: this.props.box.topRow, bottom: this.props.box.bottomRow, left: this.props.box.leftCol, right: this.props.box.rightCol}}></div>
                  </div>
                </Tilt>				
			)

	}
}

export default FaceRecognition;