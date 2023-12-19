import React from 'react'
import { FaPlus } from "react-icons/fa6";

export default function AddItem({newItem, setNewItem, handleAdd}) {
  return (
    <form className='addForm' onSubmit={handleAdd}>
        <label htmlFor='addItem'>Add Item</label>
        <input
          autoFocus
          id='addItem'
          type='text'
          placeholder='Add Item'
          required
          value={newItem}
          onChange={(e) => {setNewItem(e.target.value);}}
        />
        <button
          type='submit'
          aria-label='Add Item'
        >
          <FaPlus/>
        </button>
    </form>
  )
}
