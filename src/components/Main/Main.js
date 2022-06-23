import React from 'react';
import './Main.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Nav } from '../Nav/Nav';
import { Message } from '../Messages/Message';
import Story from '../../Story/Story';
import { Post } from '../Post/Post';
import News from '../Newsfeed/News';

export const Main = () => {
  return (
    <div className='main'>
      <Nav/>
      <div className='between'>
      <div className='main-row'>
      <Sidebar/>
      <div className='middle'>
      <Story/>
      <Post/>
      <News/>
      </div>
      <Message/>
      </div>
      </div>
    </div>
  )
}
