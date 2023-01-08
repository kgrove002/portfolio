import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/About.css';
import image from './images/kevingrove.jpg';

const About = () => {
  return (
    <main className="About">
      <div className="image">
        <img src={image} alt="Author" />
      </div>
      <div className="intro">
        <p>
          Hello, my name is Kevin Grove. I am a software engineer who has a
          passion for computers. I currently work for Walmart with a desire to
          leave retail behind me. In my spare time I am working on my college
          work or learning all I can to increase my knowledge of programming
          languages and increasing system productivity. I am well rounded
          individual who can work Front-End, Back-End and Full-Stack. Below is a
          list of my current goals.
        </p>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Year Expected to Complete Goal</th>
              <th>Goal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025</td>
              <td>Complete my degree with Wilmington University. </td>
            </tr>
            <tr>
              <td>2023-2025</td>
              <td>Obtain a job within my degree's field. </td>
            </tr>
            <tr>
              <td>2030-2035</td>
              <td>Start my own software development business.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default About;
