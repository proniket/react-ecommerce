import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productcontex';
import { FilterContextProvider } from './context/filter_context';
import CartProvider from './context/cart_context';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppProvider>
			<FilterContextProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</FilterContextProvider>
		</AppProvider>
	</React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom'; // Import ReactDOM from react-dom

// import App from './App.jsx';
// import './index.css';
// import { AppProvider } from './context/productcontex';
// import { FilterContextProvider } from './context/filter_context';
// import CartProvider from './context/cart_context';

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
// 		<AppProvider>
// 			<FilterContextProvider>
// 				<CartProvider>
// 					<App />
// 				</CartProvider>
// 			</FilterContextProvider>
// 		</AppProvider>
// 	</React.StrictMode>
// );
