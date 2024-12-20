import React from "react";
import MyProject from '../assets/images/myProject.jpg';

export default function Portfolio() {
  return (
    <>
      <div className="sampleProject">
        <h2>My Sample Project</h2>
        <div className="card1">
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
      
      <div className="myProjects">
        <div>
          <div className="card">
            <h5>Readme Generator</h5>
            <p>
              This project will generate a high quality README.md file you can copy to your GitHub project based on CLI prompts.
            </p>
            <a
              href="https://github.com/masoudciw/readme-generator"
              target="_blank"
            >
              Github Link
            </a>
          </div>
        </div>

        <div>
          <div className="card">
            <h5>e-commerce</h5>
            <p>
              This application provides an E-Commerce platform that allows users to manage (view, create, update, and delete) products, product categories, and product tags.
            </p>
            <a
              href="https://github.com/masoudciw/e-commerce"
              target="_blank"
            >
              Github Link
            </a>
          </div>
        </div>

        <div>
          <div className="card">
            <h5>Employee Tracker</h5>
            <p>
              Employee Tracker A content management system "cms" where you can manage your employees but accessing tables of roles, departments, and employees.</p>
            <a
              href="https://github.com/masoudciw/employee-tracker"
              target="_blank"
            >
              Github Link
            </a>
          </div>
        </div>

        <div>
          <div className="card">
            <h5>Note Taker</h5>
            <p>
              An Express.js application for taking notes.</p>
            <a
              href="https://github.com/masoudciw/NOTE-TAKER"
              target="_blank"
            >
              Github Link
            </a>
          </div>
        </div>

        <div>
          <div className="card">
            <h5>PWA Text Editor</h5>
            <p>
              J.A.T.E is a Progressive Web Application (PWA) that runs in the browser, offline and can be installed locally to your machine. This application features a number of data persistence techniques, insuring the application runs regardless of browser supported function. J.A.T.E uses an IndexedDB database and the idb package. This application is deployed to Heroku, to access it in production continue reading the documentation!</p>
            <a
              href="https://github.com/masoudciw/PWA-TEXT-EDITOR"
              target="_blank"
            >
              Github Link
            </a>
          </div>
        </div>

        <div>
          <div className="card">
            <h5>Tech Blog</h5>
            <p>
              The application contained within is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.</p>
            <a
              href="https://github.com/masoudciw/Teck-Blog"
              target="_blank"
            >
              Github Link
            </a>
          </div>
        </div>

        <div>
          <div className="card">
            <h5>SVG Logo Maker</h5>
            <p>
              Generate an SVG logo with your choice of shape (circle, square, or triangle), shape color, text (limit of 3 characters), and text color. Shape and text colors can be chosen using color keywords or hexadecimal numbers.</p>
            <a
              href="https://github.com/masoudciw/SVG-MAKER"
              target="_blank"
            >
              Github Link
            </a>
          </div>
        </div>

        <div>
          <div className="card">
            <h5>Social Network API</h5>
            <p>
              The application contained within is a functional backend for a proposed social networking platform. It is built with Node, MongoDB, Mongoose, ExpressJS, MomentJS, NoDemon, NoSQL, and utilizes the Model - View - Controller architecture.</p>
            <a
              href="https://github.com/masoudciw/social-network-api"
              target="_blank"
            >
              Github Link
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
