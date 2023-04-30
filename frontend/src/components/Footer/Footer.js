import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section className="section-footer">
      <div className="footer-flex">
        <div className="our-contact">
          <h3 className="footer-heading">Our Contact</h3>
          <p className="footer-para">
            Address : Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <p className="footer-para">(01) 0101-0101-0101</p>
          <p className="footer-para">info@youremail.org</p>
          <div className="footer-icons">
            <Link>
              <i class="bx bxl-twitter"></i>
            </Link>
            <Link>
              <i class="bx bxl-facebook-circle"></i>
            </Link>
            <Link>
              <i class="bx bxl-facebook-circle"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
