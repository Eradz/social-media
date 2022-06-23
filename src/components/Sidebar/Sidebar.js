import React from 'react';
import "./Sidebar.css"

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='side'>
            <div className='sidetop'>
                <div className='img2'></div>
                <div>
                <h2>Chidi andrew</h2>
                <p>@chidi</p>
                </div>
            </div>
            <div className='links'>
                  <a href='#'> <i class="uil uil-home"></i><h2>Home</h2></a>
                  <a href='#'> <i class="uil uil-bell"></i><h2>Notifications</h2></a>
                  <a href='#'> <i class="uil uil-envelope"></i><h2>Messages</h2></a>
                  <a href='#'> <i class="uil uil-palette"></i> <h2>Theme</h2></a>
                  <a href='#'> <i class="uil uil-setting"></i> <h2>Settings</h2></a>  
            </div>
            <div className="btn">
                <button className='btn1'>Create post</button>
            </div>
        </div>
    </div>
  )
}
