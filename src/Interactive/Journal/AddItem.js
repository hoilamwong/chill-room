import React from 'react'
import { FaPlus } from "react-icons/fa6";

export default function AddItem({handleAddChange, handleAdd}) {
  return (
    <form className='addForm' onSubmit={handleAdd}>
        <label htmlFor='addItemTitle'>Title: </label>
        <input
          autoFocus
          id='addItemTitle'
          type='text'
          placeholder='Title'
          required
          name='title'
          onChange={(e) => {handleAddChange(e);}}
        />
        <br/>
        <label htmlFor='addItem'>Add Item</label>
        <input
          autoFocus
          id='addItem'
          type='text'
          placeholder='Add Item'
          required
          name='item'
          onChange={(e) => {handleAddChange(e);}}
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
