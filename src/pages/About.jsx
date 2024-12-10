import React from "react";
import masoud from "../assets/images/masoud.jpg";

export default function About() {
  return (
    <div className="aboutPage">
      <h2>About Me!</h2>
      <img
        src={masoud}
        className="img-thumbnail"
        alt="Masoud"
      ></img>
      <p className="py-1">
        Hi, My name is <span>MASOUD ABDI</span> and I've got <span>Bachelore of Science in IT</span>.
      </p>
      <p>
        I am a positive, enthusiastic and competent <span>FULL STACK WEB DEVELOPER</span> who have acquired many skills in this field in recent years.
        I will fit myself into team quickly.
        I have a good experience working as part of a team web development projects.
        I take my work as a <span>WEB DEVELOPER</span> seriously and this means I always ensure my skills are kept up to date within this rapidly changing industry.
      </p>
    </div>
  );
}
