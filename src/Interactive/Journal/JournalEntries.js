import React, { useState, useEffect } from 'react'
import { FaTrash, FaPen } from "react-icons/fa";

export default function JournalEntries({ items, handleDelete }) {

	const [itemColors, setItemColors] = useState({});

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

	useEffect(() => {
		const newColors = {};
		items.forEach(item => {
			if (!itemColors[item.id]) {
				newColors[item.id] = randomColor();
			} else {
				newColors[item.id] = itemColors[item.id];
			}
		});
		setItemColors(newColors);
	}, [items]);

	const randomMargin = (max) => {
		var x = Math.floor(Math.random() * max)
		return Math.max(1, x)
	}

	return (
		<div className='journal-entries'>
			{items.map((item) => (
				// MyContent( item.id,  item.id, item.date, item.item)
				<div className='journal-entry' id={`journal-entry-${item.id}`} key={item.id} style={{ backgroundColor: itemColors[item.id] }}>
					{item.date} <br />
					{item.item}

					<div className='journal-entry-buttons'>
						<button
							type='button'
							aria-label='edit'
							onClick={() => handleDelete(item.id)}
						>
							<FaPen />
						</button>
						<button
							type='button'
							aria-label='delete'
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
