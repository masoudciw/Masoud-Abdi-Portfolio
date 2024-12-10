import React from "react";
import MyProject from '../assets/images/myProject.jpg';

export default function Portfolio() {
  return (
    <>
      <div className="myProjects">
        <div>
          <h2>My Project</h2>
          <div className="card">
            <img
              src={MyProject}
              alt="Full Stack Web Development Image"
            />
            <h5>Full Stack Web Development</h5>
            <p>
              This Project is a full stack development encompasses the complete process of application software development, including both the front-end and back-end development. The front end consists of the user interface (or UI), and the back end handles the business logic and application workflows that run behind the scenes.
            </p>
            <a
              href="https://masoud-project.onrender.com/"
              target="_blank"
            >
              Deployed
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
