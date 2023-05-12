import raw from '../../assets/Profile/raw.png'
import logout from '../../assets/Profile/logout.png'
import './profile.css'
export default function profile1() {


    return(
        <div className='profilemain'>
            <div className="pic-div">
                <div className='profilepic'>
                  <img  src={raw} alt=''></img>
                  <h3>Shahbaz Ahmed</h3>
                     <div className='namediv'>
                     
                      <p>ID: 12345678</p>
                    </div> 
                </div>
            <div className='logout-button'>
                 <button>
                Logout <img src={logout} alt=''></img>
                </button>
            </div>
            </div>

            <div>
                <div className='dataentry'>
                    <div className='twobuttons'>
                           <button className='commonbutton profilebutton'>My Profile</button>
                           <button className='commonbutton formschedule'>My Form & Scehdule</button>
                    </div>
                    <div className='personaldata'>
                        <div className='inputs-right' style={{marginLeft:"20px"}}>
                        <h2>Personal Data</h2>
                        <br></br>
                        <p>First Name</p>
                        <input  type="text" placeholder='Budi' />
                        <p>Last Name</p>
                        <input type='text' placeholder='Doremi'></input>
                        <p>Email</p>
                        <input type="email" placeholder='budidoremi@gmail.com' />
                        <p>Phone Number</p>
                        <input type="text" placeholder='0821 2121 2121'></input>
                        <div >
                        <button className='commonbutton'>Save</button>
                        </div>
                        
                        </div>
                        
                    </div>

                    <div className='password'>
                        <div className='inputs-right' style={{marginLeft:"20px"}}>
                              <h2>Password</h2>
                              <p>Password</p>
                              <input type='password' placeholder='**********'></input>
                             <div >
                               <button >Reset</button>
                             </div>
                               
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}