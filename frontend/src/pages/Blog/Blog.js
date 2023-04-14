import React from 'react';
import './blog.css';

export default function Blog(){
    return(
        <div class='main-container'>
            <section class='first-container'>
                <h1><span class='underlined'>Blogs</span></h1>
            </section>
            <section class='second-container'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </section>
            <section class='third-container'>
                <div class='card'>
                    <div>
                        <input class='search' type='text' placeholder='Search'></input>
                        <button class='search-button'>Search</button>
                    </div>
                    <div class='category-container'>
                        <h3>Categories</h3>
                        <ul class='category-list'>
                            <li>Category A <div></div></li>
                            <li>Category B <div></div></li>
                            <li>Category C <div></div></li>
                            <li>Category D <div></div></li>
                            <li>Category E <div></div></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}