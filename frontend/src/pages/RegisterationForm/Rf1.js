import React from 'react';
import pic2 from '../../assets/Registrationform/pic2.png';
import Section1 from '../../assets/Registrationform/Section1.png';
import usa from '../../assets/Profile/usa.png';
import germany from '../../assets/Profile/Flag2.png';
import england from '../../assets/Profile/england.png';
import canada from '../../assets/Profile/canada.png';
import japan from '../../assets/Profile/japan.png';
import { useState } from 'react';
import './rf.css';
import { Link } from 'react-router-dom';

export default function Rf1({ handleFormData }) {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [dob, setdob] = useState('');
  const [Nationality, setnationality] = useState('');
  const [gender, setgender] = useState('');
  const [desiredschool, setdesiredschool] = useState('');
  const [englishskill, setenglishskill] = useState('');
  const [consultationpackage, setconsultationpackage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormData({
      rf1Data: {
        name,
        email,
        dob,
        Nationality,
        gender,
        desiredschool,
        englishskill,
        consultationpackage,
      },
    });
  };

  const [selected, setSelected] = useState(null);

  function handleCheckboxChange(event) {
    setSelected(event.target.value);
  }
  const [selectedImages, setSelectedImages] = useState([]);

  function toggleSelected(event) {
    const selectedImage = event.target.src;
    if (selectedImages.includes(selectedImage)) {
      setSelectedImages(selectedImages.filter((img) => img !== selectedImage));
    } else {
      setSelectedImages([...selectedImages, selectedImage]);
    }
  }
  const [isEditable, setIsEditable] = useState(true);

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className="top">
      <h1>Registration Form</h1>
      <div className="page1image">
        <img src={pic2} alt=""></img>
      </div>

      <div className="page1img">
        <img src={Section1} alt=""></img>
      </div>

      <form>
        <div className="formsection">
          <div className="fir">
            <h2>
              <strong>Personal Data Form</strong>
            </h2>
            <p>What State are you planning to apply for ?</p>
          </div>
          <div className="TB">
            <button>School</button>
           <Link className='link' to='/reg2'> <button>University</button></Link>
            <hr style={{ marginTop: '30px' }}></hr>
          </div>

          <div className="inputf">
            <div className="nameinput">
              <p>
                First Name<span className="imp">*</span>
              </p>
              <input
                className="i"
                disabled={isEditable ? false : true}
                type="text"
                onChange={(event) => {
                  setname(event.target.value);
                }}
              />
            </div>
            <div className="nameinput">
              <p>
                Email<span className="imp">*</span>
              </p>
              <input
                className="i"
                disabled={isEditable ? false : true}
                type="email"
                onChange={(event) => {
                  setemail(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="inputf">
            <div className="nameinput">
              <p>
                Date of Birth<span className="imp">*</span>
              </p>
              <input
                className="i"
                type="date"
                id="dob"
                disabled={isEditable ? false : true}
                onChange={(event) => {
                  setdob(event.target.value);
                }}
              />
            </div>
            <div className="emailinput">
              <p>
                Nationality<span className="imp">*</span>
              </p>
              <select
                className="nation"
                disabled={isEditable ? false : true}
                onChange={(event) => {
                  setnationality(event.target.value);
                }}
              >
                <option value="">Select Nationality</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
                <option value="india">India</option>
              </select>
            </div>
          </div>

          <p>Gender</p>
          <div className="gender">
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                disabled={isEditable ? false : true}
                type="checkbox"
                value="option1"
                checked={selected === 'option1'}
                onChange={handleCheckboxChange}
              />
              <p>Male</p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                disabled={isEditable ? false : true}
                type="checkbox"
                value="option2"
                checked={selected === 'option2'}
                onChange={handleCheckboxChange}
              />
              <p> Female </p>
            </div>
          </div>
          <p>Select prefered study destination</p>
          <div className="countrypics">
            <img
              disabled={isEditable ? false : true}
              src={usa}
              alt="Image 1"
              className={
                selectedImages.includes('image1.jpg') ? 'selected' : ''
              }
              onClick={toggleSelected}
            />
            <img
              disabled={isEditable ? false : true}
              src={germany}
              alt="Image 2"
              className={
                selectedImages.includes('image2.jpg') ? 'selected' : ''
              }
              onClick={toggleSelected}
            />
            <img
              disabled={isEditable ? false : true}
              src={england}
              alt="Image 3"
              className={
                selectedImages.includes('image3.jpg') ? 'selected' : ''
              }
              onClick={toggleSelected}
            />
            <img
              disabled={isEditable ? false : true}
              src={japan}
              alt="Image 4"
              className={
                selectedImages.includes('image4.jpg') ? 'selected' : ''
              }
              onClick={toggleSelected}
            />
            <img
              disabled={isEditable ? false : true}
              src={canada}
              alt="Image 5"
              className={
                selectedImages.includes('image5.jpg') ? 'selected' : ''
              }
              onClick={toggleSelected}
            />
          </div>
          <div className=" desire">
            <p>Your desired School</p>
            <input
              disabled={isEditable ? false : true}
              type="text"
              placeholder="Type a tag and press Enter"
            />
          </div>
          <div>
            <p for="skill">English Skill</p>
            <select
              disabled={isEditable ? false : true}
              className="selectskill"
              style={{ width: '470px' }}
              id="skill"
              name="skill"
              onChange={(event) => {
                setenglishskill(event.target.value);
              }}
            >
              <option value="">--Please select your English skill--</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Fluent">Fluent</option>
            </select>
          </div>
          <div>
            <p>Ordered Consultation Package</p>
            <select
              disabled={isEditable ? false : true}
              className="selectskill"
              style={{ width: '470px' }}
              id="package"
              name="package"
              onChange={(event) => {
                setconsultationpackage(event.target.value);
              }}
            >
              <option value="">
                --Please select your Ordered Consultation Pacakge--
              </option>
              <option value="ConsultationA">Consultation A</option>
              <option value="ConsultationB">Consultation B</option>
              <option value="ConsultationC">Consultation C</option>
              <option value="ConsultationD">Consultation D</option>
              <option value="ConsultationE">Consultation E</option>
              <option value="ConsultationF">Consultation F</option>
            </select>
          </div>

          <div className="savebt">
        <Link className='link' to ='/reg3'><button>Save & Next</button></Link>
          </div>
        </div>
      </form>
    </div>
  );
}
