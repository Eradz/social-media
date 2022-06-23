import React from 'react';
import "./Message.css";
import {Link} from "react-router-dom"
import { Primary } from '../Primary';

export const Message = () => {
  return (
    <div className='messages'>
        <div className='message-top'>
            <h2>Message</h2>
            <span><i class="uil uil-edit"></i></span>
        </div>
        <div className='searchbar'>
            <span><i class="uil uil-search"></i></span>
        <input type="search" placeholder="search for creators, projects and inspirations " name="search"></input>
        </div>
        <div className='link-row'>
            <Link className='link' >
                <h3>Primary</h3>
                <div className='line'></div>
            </Link>
            <Link className='link' >
                <h3>General</h3>
                <div className='line'></div>
            </Link>
            <Link className='link' >
                <h3>Requests(7)</h3>
                <div className='line'></div>
            </Link>
        </div>
        <div className='primary'>
          <Primary/>
        </div>
    </div>
  )
}
