import React from 'react'
import ReactDOM from 'react-dom/client'

import { Auth0Provider } from '@auth0/auth0-react'

import { AppProvider } from './context/productcontex';
import { FilterContextProvider } from './context/filter_context';
import CartProvider from './context/cart_context';

import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Auth0Provider
			domain={import.meta.env.VITE_DOMAIN}
			clientId={import.meta.env.VITE_CLIENTID}
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}>
			<AppProvider>
				<FilterContextProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</FilterContextProvider>
			</AppProvider>
		</Auth0Provider>
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
