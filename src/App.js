import React from 'react';
import './App.css';
import Nav from "./Navigation/Navigation";
import FaceRecognition from "./FaceRecognition/FaceRecognition";
import Input from "./input/Input";
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Login from "./Login";
import Register from "./Register/Register"


const paraparticles = {
"particles": {
  "number": {
      "value": 8,
      "density": {
          "enable": true,
          "value_area": 200
      }
  },
  "line_linked": {
      "enable": false
  },
  "move": {
      "speed": 1,
      "out_mode": "out"
  },
  "shape": {
      "type": ["circle","star"]
  },
  "color": {
      "value": ["#eccc68","#70a1ff","#ffa502"]
  },
  "size": {
      "value": 15,
      "random": false,
      "anim": {
          "enable": true,
          "speed": 4,
          "size_min": 10,
          "sync": false
      }
  }
},
"retina_detect": false
}
const app = new Clarifai.App({
 apiKey: '1fd12b67a4f8408e9df76b0efd49f8e1'
//  'd594124ba6f74195aaf8982d7134ca75'
});

class App extends React.Component{

	constructor()
	{
		super();
		this.state =
		{
			input:"",
			searchName:"",
      box:{},
			boxWidth:0,
			boxHeight:0,
			faceBoxClass:"",
      route:'Login',
      isSignedIn: false
		}
	}

	onFaceCalculate = (data,height,width) =>
	{
		const faceDetails = data.outputs[0].data.regions[0].region_info.bounding_box;
		this.setState({box:{
			rightCol: (width - faceDetails.right_col * width),
			leftCol:(width * faceDetails.left_col),
			topRow: (height * faceDetails.top_row),
			bottomRow: (height - height * faceDetails.bottom_row)
	}
})
	};


	getImageData = (event) =>
	{
		this.setState({boxWidth:event.target.width, boxHeight:event.target.height});
	}

	onInputChange = (event) =>
	{
		this.setState({input:event.target.value});
		
	}
// "a403429f2ddf4b49b307e318f00e528b"
	onButtonClick = (event) =>
	{
		this.setState({})
		this.setState({searchName:this.state.input});
		app.models.predict("d02b4508df58432fbb84e800597b8959", this.state.input)
		.then(response =>
		{
      		this.onFaceCalculate(response,this.state.boxHeight,this.state.boxWidth);
    	},
    function(err) {
      // there was an error
    }
  );
  }
	componentDidMount()
	{

	}

  onRouteChange = (route) =>
  {
    if(route === 'sigout'){
      this.setState({isSignedIn: false})
    } else if(route === 'home'){
      this.setState({isSignedIn : true})
    }
    this.setState({route: route});
  }

	render(){
  return (
    <div className="App">
        <Particles className="particles"
        params = {paraparticles} />
         <Nav 
         isSignedIn={this.state.isSignedIn}
         onRouteChange={this.onRouteChange}/>
          { this.state.route ==='home'
          ?
          <div>
              <Input 
            onInputChange = {this.onInputChange}
            onButtonClick = {this.onButtonClick}
            />
            <FaceRecognition 
            box = {this.state.box} 
            searchName = {this.state.searchName} 
            getImageData = {this.getImageData}
            />
         </div>
         : (
           this.state.route ==='Login'
           ?
           <Login onRouteChange={this.onRouteChange}/>
           :
           <Register onRouteChange={this.onRouteChange}/>
         )
        }
    
    </div>
  );
}
}
export default App;
