import vector from "../../assets/Homepage/Contact/Group.png";
import Group from "../../assets/About/group.png";
import tick from "../../assets/About/tick.png";
import go from "../../assets/About/go.png";
import globe from "../../assets/About/globe.png";
import elearning from "../../assets/About/elearning.png";
import student from "../../assets/About/student.png";
import support from "../../assets/About/support.png";
import img1 from "../../assets/About/img.png";
import "./About.css";
import Testimonial from "../../components/Testimonial/Testimonial";
export default function About() {
  return (
    <div>
      <div className="contact">
        <div className="us">
          <img src={vector}></img>
          <h1>
            <spna className="underlined">
              <span className="under">About Us</span>
            </spna>
          </h1>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>
      <div>
        <div className="about">
          <div className="about-left">
            <img src={Group} alt="GroupPic"></img>
          </div>
          <div className="about-right">
            <h4>About Us</h4>
            <h2>Lorem Ipsum is Simple Dummy</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <br></br>
              <br></br>It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </p>
            <div className="logout-button ">
              <button>
                Apply Online   <img src={go} alt=""></img>
              </button>
            </div>
          </div>
        </div>

        <div className="info">
            
                <div className="data-info">
                    <div className="info-img">
                    <img src={student} alt=""></img>
                    </div>
                    <div className="datas">
                    <h2>1000+</h2>
                    <p>More Then Students</p>
                    </div>
                    
                </div>
                <div className="data-info">
                    <div className="info-img">
                    <img src={support} alt=""></img>
                    </div>
                    <div className="datas">
                    <h2>100</h2>
                    <p>Total Consultants</p>
                    </div>
                    
                </div>
                <div className="data-info">
                    <div className="info-img">
                    <img src={elearning} alt=""></img>
                    </div>
                    <div className="datas">
                    <h2>100</h2>
                    <p>Total Courses</p>
                    </div>
                    
                </div>
                <div className="data-info">
                    <div className="info-img">
                    <img src={globe} alt=""></img>
                    </div>
                    <div className="datas">
                    <h2>100</h2>
                    <p>Countries</p>
                    </div>
                    
                </div>
            
        </div>


    

      </div>
    </div>
  );
}
