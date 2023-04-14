import React from 'react';
import imageLeft from '../../assets/Homepage/imageLeft.png';
import imageRight from '../../assets/Homepage/imageRight.png';
import applyOnlineIcon from '../../assets/Homepage/applyOnlineIcon.png';
import discoverMoreIcon from '../../assets/Homepage/discoverMoreIcon.png';
import card1 from '../../assets/Homepage/oneStopStudySol-Icon.png';
import card2 from '../../assets/Homepage/oneToOne-Icon.png';
import card3 from '../../assets/Homepage/endToEnd-Icon.png';
import './home.css';
export default function Home() {
  return (
    <div>
      <section className="section section1">
        <div className="image-left">
          <img src={imageLeft} alt="leftImage"></img>
        </div>
        <div className="content">
          <h4>SPECIAL OFFER FIRST CUSTOMER</h4>
          <h1>Your success journey start with us!</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <div className="sec1-btns">
            <button className="apply-online-btn">
              Apply Online<img src={applyOnlineIcon} alt="icon"></img>
            </button>
            <button className="discover-more-btn">
              <img src={discoverMoreIcon} alt="icon"></img>Discover More
            </button>
          </div>
        </div>
        <div className="image-right">
          <img src={imageRight} alt="rightImage"></img>
        </div>
      </section>

      <section className="section section2">
        <h4>About Us</h4>
        <h1>Lorem ispum is simple dummy text</h1>
        <div className="about-cards">
          <div className="card">
            <img src={card1} alt="card1"></img>
            <h3>One Stop Study Solution</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has.
            </p>
            <p>Learn More </p>
          </div>
          <div className="card">
            <img src={card2} alt="card2"></img>
            <h3>One To One Discussion</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has.
            </p>
            <p>Learn More </p>
          </div>
          <div className="card">
            <img src={card3} alt="card3"></img>
            <h3>End To End Support</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has.
            </p>
            <p>Learn More </p>
          </div>
        </div>
      </section>
    </div>
  );
}
