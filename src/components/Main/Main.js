import React from 'react';
import './Main.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Nav } from '../Nav/Nav';
import { Message } from '../Messages/Message';
import Story from '../../Story/Story';

export const Main = () => {
  return (
    <div className='main'>
      <Nav/>
      <div className='main-row'>
      <Sidebar/>
      <Story/>
      <Message/>
      </div>
    </div>
  )
}
