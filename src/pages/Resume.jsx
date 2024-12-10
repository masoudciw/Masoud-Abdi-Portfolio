import React from 'react';
import ResumePicture from '../assets/images/resume.gif';
import Resumefile from '../assets/resume.pdf';

export default function Resume() {
  return (
    <div className='resumePage'>
      <div className='resumeBox'> 
        <img src={ResumePicture} alt="Picture Of Resume" />
      </div>
      <p>
        Click <a href={Resumefile}>here</a> to view my resume.
      </p>
    </div>
  );
}