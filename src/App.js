import { Canvas } from '@react-three/fiber';
import { useState } from 'react'
import { CameraControls, Environment, OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import logo from './logo.svg';
import './App.css';
import Room from './Room'
import Content from './Content';
import AddItem from './AddItem';


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

	const [items, setItems] = useState(JSON.parse(localStorage.getItem("ContentList")))
	const [newItem, setNewItem] = useState('')
	const [createNew, setCreateNew] = useState(false)

	const saveAndsetItem = (listItems) => {
		setItems(listItems)
		localStorage.setItem("ContentList", JSON.stringify(listItems))
	}

	const addItem = (item) => {
		const newId = items.length ? items[items.length - 1].id + 1 : 1

		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		today = mm + '/' + dd + '/' + yyyy;

		const myNewItem = {
			id: newId,
			date: today,
			item: item
		}
		const listItems = [...items, myNewItem]
		saveAndsetItem(listItems)
	}

	const handleAdd = (e) => {
		e.preventDefault()
		if (!newItem) return
		addItem(newItem)
		setNewItem('')
	}

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id)
		saveAndsetItem(listItems)
	}
	return (
		<>
			<Canvas
			>
				<PerspectiveCamera makeDefault
					position={[3, 1, 3]}
					zoom={1.5}
					setFocalLength={[0, 10, 0]}
				/>
				<Environment preset="city" />
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
				<Room />
			</Canvas>
			<div className='content-panel'>
				<div className='content-crud'>
					<button onClick={() => setCreateNew(!createNew)}>
						Create
					</button>
					<button>
						Edit
					</button>
					<button>
						Delete
					</button>
				</div>
				{createNew ?
					<AddItem
						newItem={newItem}
						setNewItem={setNewItem}
						handleAdd={handleAdd}
					/>
					: null
				}
				{items == null || items.length == 0 ?
					<p>nothing here...</p>
					:
					<Content
						items={items}
						handleDelete={handleDelete}
					/>
				}

			</div>

		</>
	);
}

export default App;
