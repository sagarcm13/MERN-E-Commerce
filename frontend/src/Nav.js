import {Link} from 'react-router-dom'
export default function Example() {
  return (
    <>
      <div className="flex flex-row bg-black space-x-52 sticky top-0">
        <div className="text-3xl p-2 m-4 mx-16 text-white">Mysite</div>
        <input type="text" className="m-5 rounded-2xl p-3 px-4 mx-28" placeholder="search" />
        <ul className=" flex space-x-20 container mx-auto">
          <li className="text-3xl p-2 m-4 text-white"> <Link to="/">Home</Link></li>
          <li className="text-3xl p-2 m-4 text-white"> <Link to="/contact">Contact Us</Link></li>
          <li className="text-3xl p-2 m-4 text-white"> <Link to="/cart">Cart</Link> </li>
          <li className="text-3xl p-2 m-4 text-white"> <Link to="/login">Login</Link> </li>
        </ul>
      </div>
    </>
  )
}
