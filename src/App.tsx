import React from 'react';
import './App.css';
import Header from "./Header";
import Technologies from "./Technologies";
import Footer from "./Footer";

const App = () => {
    return (
        <div className='app-wrapper'>

            <header className='header'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-gzBtjN0Dwj0tRp9KcKew4l5dtmPsfepHw&usqp=CAU'/>
            </header>
            <nav className='nav'>
                <div><a>
                    Profile
                </a></div>
                <div><a>
                    Messages
                </a></div>
                <div><a>
                    News
                </a></div>
                <div><a>
                    Music
                </a></div>
                <div><a>
                    Settings
                </a></div>
            </nav>
            <div className='content'>
                <div><img
                    src='https://www.grekomania.ru/images/greek-articles/places/big/229_Navagio-Beach-Zakynthos.jpg'/>
                </div>
                <div>Ava + DD</div>
                <div>My Posts
                    <div>New Post</div>
                    <div>
                        <div>Post1</div>
                        <div>Post2</div>

                    </div>
                </div>
            </div>


        </div>
    );
}


export default App;
