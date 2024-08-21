import React from 'react'
import { Link } from 'react-router-dom'

export default function TypeOfProduct() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-40 z-1 absolute top-[350px] md:top-[700px] left-[30%] md:left-[25%]' >
            <div className='border-white border-2 bg-[#18181B]'>
                <Link to="/list" state={{ type: 'laptop' }}>
                    <img src="https://img5.gadgetsnow.com/gd/images/products/additional/large/G454183_View_1/computer-laptop/laptops/asus-vivobook-15-x1502za-ej541ws-intel-core-i5-12500h-15-6-inches-notebook-laptop-16gb-512gb-ssd-windows-11-quiet-blue-1-7-kg-.jpg" className='w-[60px] md:w-auto h-[60px] md:h-[200px] rounded-[25%]' alt="" />
                </Link>
                <div className="md:text-2xl text-white text-center">Laptop</div>
            </div>
            <div className='border-white border-2 bg-[#18181B]'>
                <Link to="/list" state={{ type: 'phone' }}>
                    <img src="https://images.jdmagicbox.com/quickquotes/images_main/realme-gt-neo-2-ram-12-gb-256-gb-neo-blue-241073706-e39lh.png" className='w-[60px] md:w-auto h-[60px] md:h-[200px] rounded-[25%]' alt="" />
                </Link>
                <div className="md:text-2xl text-white text-center">Phone</div>
            </div>
            <div className='border-white border-2 bg-[#18181B]'>
                <Link to="/list" state={{ type: 'tv' }}>
                    <img src="https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/product/tv/p/p615/pc/product/EM_55P615_left_global.png" className='w-[100px] md:w-auto h-[60px] md:h-[200px] rounded-[25%]' alt="" />
                </Link>
                <div className="md:text-2xl text-white text-center">Television</div>
            </div>
        </div>
    )
}
