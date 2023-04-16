import './blogpage.css';
import mainimg from '../../assets/BlogPage/blogpageimg1.png';
import calicon from '../../assets/BlogPage/cal-icon.png';
import likeicon from '../../assets/BlogPage/like-icon.png';
import commenticon from '../../assets/BlogPage/comment-icon.png';
import shareicon from '../../assets/BlogPage/share-icon.png';
import img2 from '../../assets/BlogPage/group-men-suits-hold-out-their-hands-unity 2.png';
import arrow from '../../assets/BlogPage/arrow.png';
import profilepic from '../../assets/BlogPage/profile-pic.png';

export default function BlogPage(){
    return(
        <div class='main-container'>
            <section class='first-container'>
                <img src={mainimg}></img>
            </section>
            <section class='second-container'>
                <p className="service-subHeading">
                Home <i class="bx bx-chevron-right"></i>
                <span className="service-subHeading">Our Service</span>
                <i class="bx bx-chevron-right"></i><span className="blue">Blog Detail</span>
                </p>
            </section>
            <section class='third-container'>
                <div class='title'>
                    <h1>Title Of Blog Text In Here</h1>
                </div>
                <div class='blog-subInfo'>
                    <p class='blog-category'>Category A</p>
                    <div class='blog-time'>
                        <img id='cal-icon' src={calicon} alt='calicon'></img>
                        <p id='date-time'>19th Jan 2022 - 12 Noon To 4 Pm</p>
                    </div>
                    <div class='stat-icons'>
                        <img class='icon' src={likeicon}></img>
                        <p>11</p>
                        <img class='icon' src={commenticon}></img>
                        <p>122</p>
                        <img class='icon' src={shareicon}></img>
                        <p>122</p>
                    </div>
                </div>
            </section>
            <section class='blog-container'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </section>
            <section class='similar-blogs'>
                <h1>Similar Blogs</h1>
                <div class='blog-cards'>
                    <div class='blog-item'>
                        <p class='blog-category-2'>Category A</p>
                        <img src={img2}></img>
                        <div>
                            <img id='cal-icon' src={calicon} alt='calicon'></img>
                            <p>19th Jan 2022 - 12 Noon To 4 Pm</p>
                        </div>
                        <h3>Lorem Ipsum is simply dummy text printing</h3>
                        <div class='read-more'>
                            <p>Read More</p>
                            <img src={arrow}></img>
                        </div>
                    </div>
                    <div class='blog-item'>
                        <p class='blog-category-2'>Category A</p>
                        <img src={img2}></img>
                        <div>
                            <img id='cal-icon' src={calicon} alt='calicon'></img>
                            <p>19th Jan 2022 - 12 Noon To 4 Pm</p>
                        </div>
                        <h3>Lorem Ipsum is simply dummy text printing</h3>
                        <div class='read-more'>
                            <p>Read More</p>
                            <img src={arrow}></img>
                        </div>
                    </div>
                    <div class='blog-item'>
                        <p class='blog-category-2'>Category A</p>
                        <img src={img2}></img>
                        <div>
                            <img id='cal-icon' src={calicon} alt='calicon'></img>
                            <p>19th Jan 2022 - 12 Noon To 4 Pm</p>
                        </div>
                        <h3>Lorem Ipsum is simply dummy text printing</h3>
                        <div class='read-more'>
                            <p>Read More</p>
                            <img src={arrow}></img>
                        </div>
                    </div>
                </div>
            </section>
            <section class='comment-section'>
                <div class='comment-heading'>
                    <h1>Comments</h1>
                    <h1 id='comment-number'>(122)</h1>
                </div>
                <div class='comment-box'>
                    <div class='comment-sub'>
                        <img id='profilepic' src={profilepic}></img>
                        <div class='comment-inf0'>
                            <h4>Guzman Anthony</h4>
                            <p>12 July, 2021</p>
                        </div>
                    </div>
                </div>   
            </section>
        </div>
    );
}