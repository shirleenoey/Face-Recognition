import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt 
				style={{width: '150px', 
								height: '150px', 
								tiltMaxAngleX: '90deg', 
								tiltMaxAngleY: '80deg'}}
				className='Tilt br2 shadow-2'>
					<div>
						<img className='pa2' alt='logo' src={brain} />
					</div>
			</Tilt>
		</div>
	);
}

export default Logo;