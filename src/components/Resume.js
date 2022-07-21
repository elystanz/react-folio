import { React } from 'react';
import resumePic from '../assets/resume.png'


function Resume() {
  return (
    <section className="resume">
        <h3>Take a peak at my resume here!</h3>
        <img className="resume-picture" src={ resumePic } alt="Elyse's Resume"/>
    </section>
  );
}
export default Resume;
