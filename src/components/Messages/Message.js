import React, {useState} from 'react';
import "./Message.css";
import { Primary } from '../Primary';
import { Requests } from '../Requests';
import { General } from '../General';

export const Message = () => {
    let[click, setClick]= useState(<Primary/>)
    const primary = () => {
        setClick(<Primary/>)
    }
    const general = () => {
        setClick(<General/> )
    }
    const requests =()=> {
        setClick(<Requests/>)
    }
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
            <h3 onClick={primary} className='link' >
                <h3>Primary</h3>
                <div className='line'></div>
            </h3>
            <h3 onClick={general}  className='link' >
                <h3>General</h3>
                <div className='line'></div>
            </h3>
            <h3 onClick={requests} className='link' >
                <h3>Requests(7)</h3>
                <div className='line'></div>
            </h3>
        </div>
        <div >
          {click}
        </div>
    </div>
  )
}
