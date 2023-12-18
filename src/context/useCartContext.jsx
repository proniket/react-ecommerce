import { useContext } from 'react';
import { CartContext } from './cart_context';


const useCartContext = () => {
	return useContext(CartContext);
};

export default useCartContext;
