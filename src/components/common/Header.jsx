import React from 'react'
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="container-fluid">
  <div className="">
    <nav>
      <Link>
      <h1 className='text-3xl font-bold underline'>
        Cake<span> World</span>
      </h1>
      </Link>
    </nav>
  </div>
  </div>
  )
}
