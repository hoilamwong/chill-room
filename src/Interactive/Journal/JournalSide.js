import React, { useEffect } from 'react'
import { useState } from 'react'

import AddItem from './AddItem';
import JournalEntries from './JournalEntries';

export default function JournalSide({ selectedObject }) {

    const [createNew, setCreateNew] = useState(true)
    const [newItem, setNewItem] = useState(null)
    const [items, setItems] = useState(
        localStorage.getItem("JournalEntriesList") ?
            JSON.parse(localStorage.getItem("JournalEntriesList"))
            : []
    )

    const saveAndsetItem = (listItems) => {
        setItems(listItems)
        localStorage.setItem("JournalEntriesList", JSON.stringify(listItems))
    }

    const handleAdd = (e) => {
        e.preventDefault()
        if (!newItem) return
        const listItems = [...items, newItem]
        saveAndsetItem(listItems)
        setNewItem('')
    }

    const handleAddChange = (e) => {
        var myNewList
        if (!newItem) {
            const newId = items.length ? items[items.length - 1].id + 1 : 1

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;

            myNewList = {
                "id": newId,
                "date": today,
            }
        }
        const { name, value } = e.target
        setNewItem({ ...newItem, ...myNewList, [name]: value })
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        saveAndsetItem(listItems)
    }




    return (
        selectedObject.name.match(/journal/gi) ?
            <div className='journal-entries-panel'>
                <div className='journal-entries-crud'>
                    <button onClick={() => setCreateNew(!createNew)}>
                        Create
                    </button>
                </div>
                {createNew ?
                    <AddItem
                        newItem={newItem}
                        handleAddChange={handleAddChange}
                        handleAdd={handleAdd}
                    />
                    : null
                }
                {items == null || items.length == 0 ?
                    <p>nothing here...</p>
                    :
                    <JournalEntries
                        items={items}
                        handleDelete={handleDelete}
                    />
                }

            </div>
        : null

    )
}
