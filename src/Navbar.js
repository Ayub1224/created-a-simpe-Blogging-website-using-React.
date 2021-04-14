import { AiFillBook, AiOutlineHome } from 'react-icons/ai'
import {Link} from 'react-router-dom'
const Navbar = () => {          
    return ( 
		<div className="container">
		<nav className="navbar">
			<h2>Blogging</h2>
			<div className="elem">
				<ul>
					<li><Link to="/" className="a" ><AiOutlineHome/> Home </Link></li>
					<li><Link to="/contact" className="a" ><AiFillBook/> Create Blog</Link></li>
				</ul>
			</div>
		</nav>
	</div>    
     );
}
 
export default Navbar;            