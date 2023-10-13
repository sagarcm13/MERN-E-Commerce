import { useQuery } from 'react-query';
import axiosClient  from './axios';

export const getProducts = async (context) =>  {
    const type = context.queryKey[1]
    return axiosClient.get('/list', { params: {type: type}}).then(res => res.data)
}

export function useProducts(type) {
    return useQuery({
      queryKey: ["products", type],
      queryFn: getProducts,
    });
  }
