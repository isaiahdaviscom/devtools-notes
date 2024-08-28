import React from 'react'

export default function Search() {
  return (
    <div className="top-navigation">
      <label htmlFor="search">Search</label>
      <input id="search" type={'text'} placeholder="Search..." />
    </div>
  )
}
