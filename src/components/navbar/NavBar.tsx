import React from 'react'

function NavBar() {
  return (
    <header className='h-16 via-gray-400 flex justify-around items-center font-poppins m-0 p-0 bg-primary text-white fixed w-full z-10 absolute'>
        <div>
            <p>Logo</p>
        </div>
        <nav className='flex gap-10'>
            <p>Home</p>
            <p>Movie</p>
            <p>Tv</p>
        </nav>
    </header>
  )
}

export default NavBar