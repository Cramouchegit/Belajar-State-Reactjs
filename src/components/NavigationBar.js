import "../App.css";

const NavigationBar = ({ navValue }) => {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>Belajar State</h1>
        </div>
        <ul>
          <li>
            <a href="home">{!navValue ? "Home" : navValue}</a>
          </li>
          <li>
            <a href="services">{!navValue ? "Services" : navValue}</a>
          </li>
          <li>
            <a href="blog">{!navValue ? "Blog" : navValue}</a>
          </li>
          <li>
            <a href="contact">{!navValue ? "Contact" : navValue}</a>
          </li>
        </ul>
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>
      <div className="menubar">
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="blog">Blog</a>
          </li>
          <li>
            <a href="contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
