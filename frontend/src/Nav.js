import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Example() {
  const [search, setSearch] = useState('');
  return (
    <>
      <div className="flex flex-row bg-black md:space-x-52 sticky top-0">
        <div className="text-2xl md:text-3xl p-4 md:m-4 md:mx-16 text-white">Mysite</div>
        <input type="text" className="m-3 md:m-5 rounded-2xl p-2 md:p-3 md:x-4 md:mx-28 w-50 md:w-auto" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <img src="https://w7.pngwing.com/pngs/193/293/png-transparent-menu-hamburger-button-computer-icons-torrance-horizontal-line-food-text-rectangle-thumbnail.png" width={40} height={40} className='md:hidden' alt="" />
        <ul className=" ul hidden md:flex md:space-x-20 container md:mx-auto">
          <li className="text-3xl p-2 m-4 text-white"> <Link to="/">Home</Link></li>
          <li className="text-3xl p-2 m-4 text-white"> <Link to="/contact">Contact Us</Link></li>
          <li className="text-3xl p-2 m-4 text-white"> <Link to="/cart">Cart</Link> </li>
          <li className="text-3xl p-2 m-4 text-white"> <Link to="/login">Login</Link> </li>
        </ul>
      </div>
    </>
  )
}
