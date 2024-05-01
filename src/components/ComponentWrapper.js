// ComponentWrapper.js
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/plugins/owl-carousel/owl.carousel.min.css";
import "../assets/plugins/Magnific-Popup/magnific-popup.css";
import "../assets/plugins/animate-css/animate.min.css";
import "../assets/plugins/swiper/swiper.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/custom.css";
import "../assets/css/Navbar.css";
const ComponentWrapper = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default ComponentWrapper;
