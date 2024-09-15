import { useEffect, useState } from 'react';
import { useProducts } from '../../api';
import { Link } from 'react-router-dom';
import AddToCart from './../../components/AddToCart'

// eslint-disable-next-line react/prop-types
export default function Right({ type, filter, sortBy }) {
    const { data, isFetched } = useProducts(type);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        if (data) {
            const filteredData = applyingFilter(data, filter, sortBy);
            setProductData(filteredData);
        }
    }, [data, sortBy, filter]);

    if (!isFetched) {
        return <div className='content-center text-white text-3xl'>Loading...</div>;
    }

    const applyingFilter = (data, filter, sortBy) => {
        let filteredData = [...data];
        if (filter === 'b20') {
            filteredData = filteredData.filter((item) => item.price < 20000);
        } else if (filter === '20-45') {
            filteredData = filteredData.filter((item) => item.price >= 20000 && item.price < 45000);
        } else if (filter === 'a45') {
            filteredData = filteredData.filter((item) => item.price >= 45000);
        }

        if (sortBy === 'htl') {
            filteredData = filteredData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        } else if (sortBy === 'lth') {
            filteredData = filteredData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        }
        return filteredData;
    };

    return (
        <div className='float-r w-[75%] flex'>
            <ul className="flex-col w-[100%]">
                {productData.length > 0 &&
                    productData.map((item) => (
                        <li className='' id={item._id} key={item._id}>
                            <div className='flex flex-col md:flex-row  border-white border-2 border-r-0 rounded-xl'>
                                <div className="md:float-l md:w-[30%] flex justify-center m-6">
                                    <img src={item.Images.i1} height={200} width={200} alt="" />
                                </div>
                                <div className="md:float-r md:w-[70%] m-6">
                                    <Link to='/product' state={{ id: item._id }}>
                                        <div className="desc text-white text-2xl font-bold m-2">{item.name}</div>
                                        <div className="price text-white text-3xl m-2">₹{item.price}</div>
                                    </Link>
                                    <AddToCart id={item._id} />
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}