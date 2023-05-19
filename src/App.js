import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App.css">
     {/* <!DOCTYPE html>
<html lang="en"> */}

{/* <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume</title>
  <script src="https://unpkg.com/feather-icons"></script>
  <link rel="stylesheet" href="App.css">
</head> */}
{/* 
<body> */}
  <div className="container">
    <div className="profile">
      <div className="profile_container">
        <div className="profile_profileImg">
          <img src="shweta.jpg" alt="Shweta Tyagi"/>
        </div>
        <div>
          <h1 className="profile_name">
            <span className="profile_name_firstName">Shweta Tyagi</span>
            <br/>
          </h1>
          <p className="profile_title">Address: 157-A Sheetal Nagar Indore(MP)</p>
          <br/>
          <p className="profile_title">+91-9109277423</p>
          <br/>
          <p className="profile_title">shwetatyagi149@gmail.com</p>
          <p className="description profile_description">
            shweta-tyagi-b7941721b
          </p>
        </div>
      </div>
    </div>
    <div className="group-1">
    
      <div className="ref">
        <h3 className="title">Career Objective</h3>
        <div className="ref_item">
          <p className="description">To get an opportunity where I can make the best use of my potential, creativity and explore enormous number of things and contribute to the organization’s growth.</p>
        </div>
      </div>

      <div className="skills">
        <h3 className="title">Skills</h3>
        <ul className="skills_list description">
          <li>C++</li>
          <li>Java</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React JS</li>
          <li>Node JS</li>
        </ul>
      </div>

      <div className="edu">
        <h3 className="title">Project</h3>
        <div className="edu_item">
          <h4 className="item_title">Web Application for handicraft Artisans</h4>
          <p className="item_subtitle">
            E-Commerce website where handicraft producers can sell their products and consumers can purchase the product.
<b>Technology:</b> MERN Stack

          </p>
        </div>
        <div className="edu_item">
          <h4 className="item_title">Weather Application</h4>
          <p className="item_subtitle">
            Work on real time API, it shows weather status (cloudy, sunny, rainy) and shows min and max temperature(celsius).
<b>Technology:</b> Html, CSS, Javascript and Node.js

          </p>
        </div>

        <div className="edu_item">
          <h4 className="item_title">Portfolio Website</h4>
          <p className="item_subtitle">
            Compilation of Academic Record, Project, Contact detail, etc.
<b>Technology:</b> Html, CSS and Javascript 


          </p>
        </div>
      </div>

      <div className="certification">
        <h3 className="title">certification</h3>
        <div className="certification_item">
          <ul>
          <li className="item_title">ORACLE Academy - Database Programming with SQL</li>
          <li className="item_title">RDBMS PostgreSQL Training</li>
        </ul>
        </div>
      </div>
    </div>
    <div className="group-2">
      <div className="exp">
        <h3 className="title">Education</h3>
        <div className="exp_item">
          <p className="item_preTitle">2020 - 2024</p>
          <h4 className="item_title">Acropolis Institute of Technology and Research</h4>
          <p className="item_subtitle">Bachelor of Technology</p>
        </div>
        <div className="exp_item">
          <p className="item_preTitle">2020</p>
          <h4 className="item_title">Mar Thoma Higher Secondary School</h4>
          <p className="item_subtitle">Senior Secondary</p>
        </div>
        <div className="exp_item">
          <p className="item_preTitle">2018</p>
          <h4 className="item_title">Mar Thoma Higher Secondary School</h4>
          <p className="item_subtitle">Higher Secondary</p>
        </div>
      </div>
      <div className="awards">
        <h3 className="title">Strength</h3>
        <div className="awards_item">
          <ul>
            <li className="item_title">Creativity</li>
            <li className="item_title">Teamwork</li>
            <li className="item_title">Dedication</li>
          </ul>
        </div>
      </div>

      <div className="awards">
        <h3 className="title">Area of Improvement</h3>
        <div className="awards_item">
          <ul>
            <li className="item_title">Impatience</li>
            <li className="item_title">Self-criticism</li>
          </ul>
        </div>
      </div>

      <div className="awards">
        <h3 className="title">Hobby</h3>
        <div className="awards_item">
          <ul>
            <li className="item_title">Painting</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
  <script>
    feather.replace()
  </script>
{/* </body>

</html> */}
    </div>
  );
}

export default App;
