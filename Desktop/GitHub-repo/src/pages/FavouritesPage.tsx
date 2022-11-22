import React from 'react'
import { useAppSelector } from '../hooks/redux'

export function FavouritesPage() {
  const {favoutites} = useAppSelector(state => state.github)

  if(favoutites.length === 0) return <p className='text-center'>No Items</p>
  return(
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      <ul className='list-none'>
      {favoutites.map(f => (
        <li key={f}>
          <a href={f} target="_blank">{f}</a>
        </li>
      ))}
    </ul>
    </div>
  )
}