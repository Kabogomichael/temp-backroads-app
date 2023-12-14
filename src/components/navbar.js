import logo from '../images/logo.svg'


import PageLinks from './pagelinks';
import SocialLinks from './socialLinks';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
    return ( 
        <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {/* <!-- left this comment on purpose --> */}
      <PageLinks  parentClass='nav-links' itemClass='nav-link'/>

      <SocialLinks />
        
    </div>
  </nav>
     );
}
 
export default Navbar;