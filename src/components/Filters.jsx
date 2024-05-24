import React from 'react'
import Sort from './Sort'
import Search from './Search'

export default function Filters() {
  return (
    <div className='mb-3 d-flex'>
      <Search/>
      <Sort/>
    </div>
  )
}
