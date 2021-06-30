import React from 'react';
import Tilt from 'react-tilt';


const Nav =({onRouteChange , isSignedIn}) =>
{
	if (isSignedIn){
		return(
		<nav className="navbar navbar-light navbar-expand-sm fixed-top navbar-kustom">
            <div className="container"><a className="navbar-brand text-light logo dim" href="{#}">Neal_Amstrong</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ml-auto underline dim">
					<Tilt className="Tilt" options={{ max : 60 }} style={{  }} >
					<div className="Tilt-inner">
					{/* <li className = "pointer">Sign Out</li> */}
                        <li className="nav-item item pointer" role="presentation"><p className="nav-link active text-light" onClick={() => onRouteChange('login')} style={{ marginTop: '16px' }}>Sign Out</p></li>
					</div>
					</Tilt>
                    </ul>
                </div>
            </div>
        </nav>
		);
	} else{
		return(
			<nav className="navbar navbar-light navbar-expand-sm fixed-top navbar-kustom">
				<div className="container"><a className="navbar-brand text-light logo dim" href="{#}">Neal_Amstrong</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
					<div className="collapse navbar-collapse  " id="navbarNav">
						<ul className="nav navbar-nav ml-auto dim">
						<Tilt className="Tilt" options={{ max : 60 }} style={{  }} >
						<div className="Tilt-inner">
						{/* <li className = "pointer">Sign Out</li> */}
							<li className="nav-item item pointer" ><p className="nav-link active text-light" onClick={() => onRouteChange('home')} style={{ marginTop: '16px' }}>Sign in</p></li>
						</div>
						</Tilt>
						</ul>
						<ul className="nav navbar-nav ml-1 dim">
						<Tilt className="Tilt" options={{ max : 60 }} style={{  }} >
						<div className="Tilt-inner">
						{/* <li className = "pointer">Sign Out</li> */}							
							<li className="nav-item item pointer"><p className="nav-link active text-light" onClick={() => onRouteChange('register')} style={{ marginTop: '16px' }}>Register</p></li>
						</div>
						</Tilt>
						</ul>
					</div>
				</div>
			</nav>
			);
	}



}


export default Nav;
