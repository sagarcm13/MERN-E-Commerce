import {Link} from 'react-router-dom'
export default function Example() {
  const showNavLinks=()=>{
    let ul=document.getElementsByClassName('ul')[0];
    // let li=document.getElementsByTagName('li')[0];
    console.log(ul);
    if (ul.style.display==='none') {  
      ul.style.display='flex';
      console.log('hd');      
    }
    else{ 
      ul.style.display='none';
      console.log('sh');
    }
  }
  return (
    <>
      <div className="flex flex-row bg-black md:space-x-52 sticky top-0">
        <div className="text-2xl md:text-3xl p-4 first-letter:md:p-2 md:m-4 md:mx-16 text-white">Mysite</div>
        <input type="text" className="m-5 rounded-2xl p-2 md:p-3 md:x-4 md:mx-28 w-50 md:w-auto" placeholder="search" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTo10wMi6KjmiZJyABHlbeuUAS6bx3Jqd7262wd1yacg&s" width='50' height={50} className='md:hidden' alt="" onClick={showNavLinks} />
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
