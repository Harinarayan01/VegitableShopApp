import React from "react";

const Footer = () => {
  return (
    <div className="footer py-3 ">
      <div className="d-flex flex-column justify-column-center align-items-center pt-3">
        <i className="bi bi-envelope  disablay-3 text-white"></i>
        <h3 className="text-white"> Stay informed about special offer</h3>
        <h5 className="text-white fst-italic mt-2">
          Subscribe to the newslatter
        </h5>

        <div className="input-group mb-3 mt-4 w-50">
          <input
            type="text"
            className="form-control p-2"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-warning px-5" type="button">
              Button
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>About</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Certificate
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    market
                  </a>
                </li>
                
                
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Product</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    vegitable
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Mix Vagitable
                  </a>
                </li>
               
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    fruits
                  </a>
                </li>
               
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Contact</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="https://www.google.com/maps/dir//Jaya+Prakash+Nagar,+Kanakapura+Rd,+Gangadhar+Nagar,+Umarbagh+Layout,+J.+P.+Nagar,+Bengaluru,+Karnataka+560078/@12.9728512,77.6208384,17z/data=!4m17!1m7!3m6!1s0x3bae15657c8e000b:0x84a3ce06f708d790!2sJaya+Prakash+Nagar!8m2!3d12.9075563!4d77.573061!16s%2Fg%2F11d_8bzqq1!4m8!1m0!1m5!1m1!1s0x3bae15657c8e000b:0x84a3ce06f708d790!2m2!1d77.573061!2d12.9075563!3e3?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D" className="nav-link p-0 text-muted">
                    Location
                  </a>
                </li>
                
                <li className="nav-item mb-2">
               
                <a href="mailto:harinarayan947255@gmail.com" className="nav-link p-0 text-muted">Mail Me</a>
                  
                </li>
                
                <li className="nav-item mb-2">
                  <a href="https://www.linkedin.com/in/harinarayan947255/" className="nav-link p-0 text-muted">
                  LinkedIn
                  </a>
                </li>
              </ul>
            </div>

           
          </div>
         
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>Hari Narayan</p>
            
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
