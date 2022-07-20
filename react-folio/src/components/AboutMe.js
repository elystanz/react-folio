import { React } from 'react';
import elysePhoto from '../assets/elyse-photo.jpeg';


function AboutMe() {
  return (
    <section className="aboutme">
        <img className="profile-picture" src={ elysePhoto } alt="A photo of Elyse"/>

        <h1>I am Elyse Stanziale, an audio engineer who has taken on coding!</h1> 

        <h3>I started my coding education long ago when Tumblr was still a popular website, 
          and built many pages that are now lost to the ether. I've nearly completed my 
          coding course and feel ready to take on the coding world! With a little help 
          from some forums, of course.</h3>

        <h3>Below are some of the projects I have worked on in my time in the course. 
            Click on the images to see them!</h3>



    </section>
  );
}
export default AboutMe;
