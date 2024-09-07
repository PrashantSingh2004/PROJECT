import React from 'react';
import './App.css';
import logo from './logo-transparent-png.png'; // Import the logo
import backgroundImage from './finalfinal.jpg'; // Import the background image

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="#" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#game">Game</a>
        </nav>
        <div className="icons">
          <i className="fa-solid fa-bars" id="menu-btn"></i>
        </div>
      </header>

      <section className="home" id="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="content">
          <h3>Understanding the Constitution</h3>
          <p>"The Constitution is the foundational legal document that outlines the structure, powers, and principles of a government, ensuring the rights and duties of its citizens."</p>
        </div>
      </section>

      <section className="about" id="about">
        <h1 className="heading"><span>about</span>us</h1>
        <div className="row">
          <div className="image">
            <img src="image-from-rawpixel-id-6284515-png.png" alt="About" />
          </div>
          <div className="content">
            <h3>About Project</h3>
            <p>"Understanding the Constitution" is a project aimed at raising awareness about the rights and protections granted to women and children under the Indian Constitution. The initiative highlights key constitutional provisions, such as Articles 14 (equality before the law), 15 (prohibition of discrimination), and 21A (right to education), which serve as the foundation for safeguarding these vulnerable groups.<br /><br />
              Through real-life scenarios and challenges, the project emphasizes the importance of understanding legal frameworks, promoting empathy, and encouraging individuals to apply constitutional principles in daily life. The goal is to empower citizens with knowledge, fostering a more inclusive and just society by ensuring that the rights of women and children are recognized and upheld.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
