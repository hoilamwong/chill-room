import React from 'react'

export default function CreateForm() {
  return (
    <form className='addForm'>
        <label htmlFor='addItem'>Add Item</label>
        <input
          autoFocue
          id='addItem'
          type='text'
          placeholder='Add Item'
          required
        />
        <button
          type='submit'
          aria-label='Add Item'
        >

        </button>
    </form>
  )
}
