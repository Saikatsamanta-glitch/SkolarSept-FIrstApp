import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar  from './navbar';
// SPA ---> single page application
const log = false;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <>
                <Navbar/>
                {
                        log ? "logout" :"login"
                }
                <h1 className='heading'  >Welcome to CSS</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam numquam ducimus quasi impedit ipsam, dignissimos fugiat eos itaque nam. Omnis, similique? Quidem ratione libero hic sapiente necessitatibus, ex dignissimos ipsum.</p>
                
        </>
);


