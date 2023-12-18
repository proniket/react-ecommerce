import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
		<MainHeader>
			<NavLink to='/'>
				<div className='logo-holder logo'>
						<h3>
							Inno <span>Vista</span>
						</h3>
				</div>
			</NavLink>
			<Nav />
		</MainHeader>
  );
};

const MainHeader = styled.header`
	padding: 0 4.8rem;
	height: 10rem;
	background-color: ${({ theme }) => theme.colors.bg};
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	/* .logo a {
		text-decoration: none !important;
		display: inline-block;
	} */
	
	.logo-holder {
		text-align: center;
	}
	.logo h3 {
		color: #6254f3;
		/* font-family: 'Cinzel', serif; */
		font-weight: 300;
		font-size: 30px;
		line-height: 1.3;
	}

	.logo h3 span {
		background: #6254f3;
		color: #fff;
		display: inline-block;
		line-height: 1.8;
		padding: 0 16px;
	}
`;
export default Header;



{/* <NavLink to='/'> */}
	{/* <img src="./images/inno-logo.png" alt="innovista logo" className='logo' /> */}
	{/* <h2>Innovista</h2> */}
	{/* <div className='logo-holder logo'>
		<h3>
			Inno <span>Vista</span>
		</h3> */}
		{/* <h3>
							Lorem <span>Ipsum</span>
						</h3> */}
	{/* </div> */}
{/* </NavLink>; */}