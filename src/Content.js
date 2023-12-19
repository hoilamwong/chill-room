import React from 'react'
import { FaTrash } from "react-icons/fa";

export default function Content({ items, handleDelete }) {

	const color = 
	[ 
		"rgba(217, 217, 217, 0.6)",
		"rgba(164, 166, 179, 0.6)",
		"rgba(115, 115, 115, 0.6)",
		"rgba(94, 94, 94, 0.6)",
	]

	const randomColor = () => {
		var x = Math.floor(Math.random() * color.length)
		return color[x]
	}

	const randomMargin =  (max) => {
		var x = Math.floor(Math.random() * max)
		return Math.max(1, x)
	}

	return (
		<div className='content'>
			{items.map((item) => (
					// MyContent( item.id,  item.id, item.date, item.item)
					// <div className='content-item' id={`content-item-${item.id}`} key={item.id} style={{backgroundColor:randomColor()}}>
					<div className='content-item' id={`content-item-${item.id}`} key={item.id}>		
							{item.date} <br/>
							{item.item}
							<div>
								<button
									type='button'
									aria-label='delete'
									className='delete-item'
									onClick={() => handleDelete(item.id)}
								>
									<FaTrash />
								</button>
							</div>
					</div>
			)
			)}
		</div>
	)
}
