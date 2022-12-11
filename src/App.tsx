import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className={"header"}>
                <img
                    src={"https://avatars.mds.yandex.net/i?id=5e0babbe5aeabe4e31016651e20a4e36240027da-7662303-images-thumbs&n=13"}/>
            </header>
            <nav className={"nav"}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={"content"}>
                <div>
                    <img
                        src={"https://avatars.mds.yandex.net/i?id=8e898d061411b4c4846cee67b1d4e064e95786c6-4484124-images-thumbs&n=13"}/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
