import { Canvas } from '@react-three/fiber';
import { useState } from 'react'
import { CameraControls, Environment, OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import logo from './logo.svg';
import './App.css';
import Room from './Room';
import JournalSide from './Interactive/Journal/JournalSide';


function App() {
	// const [items, setItems] = useState([
	// 	{
	// 		id: 1,
	// 		date: "12/18/2023",
	// 		item: "onee"
	// 	},
	// 	{
	// 		id: 2,
	// 		date: "12/18/2023",
	// 		item: "twoo"
	// 	},
	// 	{
	// 		id: 3,
	// 		date: "12/18/2023",
	// 		item: "three"
	// 	},
	// 	{
	// 		id: 4,
	// 		date: "12/18/2023",
	// 		item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi veritatis voluptas ea error voluptatem deserunt adipisci fugiat, unde et laudantium alias, harum repudiandae non impedit ipsam, eos magni quae."

	// 	},
	// 	{
	// 		id: 5,
	// 		date: "12/18/2023",
	// 		item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi veritatis voluptas ea error voluptatem deserunt adipisci fugiat, unde et laudantium alias, harum repudiandae non impedit ipsam, eos magni quae."

	// 	},
	// 	{
	// 		id: 6,
	// 		date: "12/18/2023",
	// 		item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi veritatis voluptas ea error voluptatem deserunt adipisci fugiat, unde et laudantium alias, harum repudiandae non impedit ipsam, eos magni quae."

	// 	},
	// 	{
	// 		id: 7,
	// 		date: "12/18/2023",
	// 		item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi veritatis voluptas ea error voluptatem deserunt adipisci fugiat, unde et laudantium alias, harum repudiandae non impedit ipsam, eos magni quae."

	// 	},
	// 	{
	// 		id: 8,
	// 		date: "12/18/2023",
	// 		item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi veritatis voluptas ea error voluptatem deserunt adipisci fugiat, unde et laudantium alias, harum repudiandae non impedit ipsam, eos magni quae."

	// 	},
	// ])

	const [selectedObject, setSelectedObject] = useState(null)

	return (
		<>
			<Canvas
			>
				<PerspectiveCamera makeDefault
					position={[3, 1, 3]}
					zoom={1.5}
					setFocalLength={[0, 10, 0]}
				/>
				<Environment preset="dawn" />
				<OrbitControls
					maxDistance={5}
					minAzimuthAngle={0} //horizontal limit
					maxAzimuthAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 3}
					maxPolarAngle={Math.PI / 2}
					enableDamping
					dampingFactor={0.38}
					enablePan={false}
					setTarget={[0, 0, 0]}
					rotateSpeed={0.4}
				/>
				<Room 
					selectedObject={selectedObject}
					setSelectedObject={setSelectedObject}
				/>
			</Canvas>
			{selectedObject? 
				<JournalSide selectedObject={selectedObject}/>
				:
				null
			}
		</>
	);
}

export default App;
