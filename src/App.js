import { Canvas } from '@react-three/fiber';
import { CameraControls, Environment, OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import logo from './logo.svg';
import './App.css';
import Room from './Room'
import Content from './Content';


function App() {
  	return (
		<>
			<Canvas
				flat
			>
				<PerspectiveCamera makeDefault
					position={[3, 1, 3]}
					zoom={1.5}
					setFocalLength={[0,10,0]}
				/>
				<Environment preset="city" />	
				<OrbitControls
					maxDistance={ 5 }
					minAzimuthAngle={ 0 } //horizontal limit
					maxAzimuthAngle={ Math.PI / 2}
					minPolarAngle = { Math.PI / 3 }
					maxPolarAngle = { Math.PI / 2 }
					enableDamping
					dampingFactor={0.38}
					enablePan={false}
					setTarget={[0,0,0]}
					rotateSpeed={0.4}
				/>
				<Room />
			</Canvas>
			<div className='content'>
				<div className='content-crud'>
					<button>
						Create
					</button>
					<button>
						Edit
					</button>
					<button>
						Delete
					</button>
					<button>
						Create
					</button>
				</div>
				<Content/>
			</div>

		</>
  	);
}

export default App;
