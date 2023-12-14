
import PageLinks from "./pagelinks";
import SocialLinks from "./socialLinks";

const Footer = () => {
    return ( 

  <footer className="section footer">
 
   <PageLinks  parentClass='footer-links' itemClass='footer-link'/>
  <SocialLinks />
  
  
  <p className="copyright">
    copyright &copy; Backroads travel tours company
    <span id="date" >{new Date().getFullYear()}</span> all rights reserved
  </p>
</footer>
     );
}
 
export default Footer;