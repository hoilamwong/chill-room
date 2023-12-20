import { useGLTF } from '@react-three/drei'
import React, { useState } from 'react'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Room({ selectedObject, setSelectedObject }) {

	const room = useGLTF('./assets/room_12_19_23.glb')
	const roomRef = useRef()

	const selectMaterial = new THREE.MeshStandardMaterial()

	const handleSelect = (e) => {

		e.stopPropagation()

		// Check if object is interactive first
		if (!e.object.name.match(/interactive/gi)) {
			return
		}

		if (selectedObject) {
			// revert the material of the previously selected object back to its original material
			selectedObject.material = selectedObject.userData.originalMaterial
		}

		// if clicked on the same item
		if (selectedObject != null && selectedObject.name == e.object.name) {
			// reset state
			setSelectedObject(null)
		} else {
			// add material to userData
			e.object.userData.originalMaterial = e.object.material
			// set material to object
			e.object.material = selectMaterial
			// set state
			setSelectedObject(e.object)
		}

	}


	return (
		<>
			<group ref={roomRef}>
				<primitive
					object={room.scene}
					castShadow={true}
					receiveShadow={true}
					// onPointerMove = {handleMove}
					onDoubleClick={(e) => handleSelect(e)}
				/>
			</group>
		</>
	)
}

useGLTF.preload('./assets/room_12_19_23.glb')