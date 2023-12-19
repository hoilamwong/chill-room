import React from 'react'
import { useState } from 'react'

export default function Content() {
	const [items, setItems ] = useState([
		{
			id: 1,
			date: "12/18/2023",
			item: "onee"
		},
		{
			id: 2,
			date: "12/18/2023",
			item: "twoo"
		},
		{
			id: 3,
			date: "12/18/2023",
			item: "three"
		},
		{
			id: 4,
			date: "12/18/2023",
			item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi veritatis voluptas ea error voluptatem deserunt adipisci fugiat, unde et laudantium alias, harum repudiandae non impedit ipsam, eos magni quae."

		},
		{
			id: 5,
			date: "12/18/2023",
			item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi veritatis voluptas ea error voluptatem deserunt adipisci fugiat, unde et laudantium alias, harum repudiandae non impedit ipsam, eos magni quae."

		},
		{
			id: 6,
			date: "12/18/2023",
			item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi veritatis voluptas ea error voluptatem deserunt adipisci fugiat, unde et laudantium alias, harum repudiandae non impedit ipsam, eos magni quae."

		},
		{
			id: 7,
			date: "12/18/2023",
			item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi veritatis voluptas ea error voluptatem deserunt adipisci fugiat, unde et laudantium alias, harum repudiandae non impedit ipsam, eos magni quae."

		},
		{
			id: 8,
			date: "12/18/2023",
			item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi veritatis voluptas ea error voluptatem deserunt adipisci fugiat, unde et laudantium alias, harum repudiandae non impedit ipsam, eos magni quae."

		},
	])

	const randomMargin =  (max) => {
		var x = Math.floor(Math.random() * max)
		console.log(Math.max(1, x));
		return x
	}

	return (
		<>
			{items.map((item) => (
					// MyContent( item.id,  item.id, item.date, item.item)
					<div className='content-item' id={`content-item-${item.id}`} key={item.id}>
						<p style={{ minHeight:"15ch"}}>
							{item.date} <br/>
							{item.item}
						</p>
					</div>
			)
			)}
		</>
	)
}
