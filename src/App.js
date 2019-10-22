import React, { useState, useEffect } from 'react';
import './App.scss';

import Jumbotron from "./components/Jumbotron/jumbotron"
import Social from "./components/Social/social"
import Navbar from "./components/Navbar/navbar"
import Card from "./components/Card/card"
import ProjectCard from "./components/ProjectCard/projectcard"
import Modal from "./components/Modal/modal"

import projects from "./projectData";

import arrow from "./media/arrow.png"
import languagesIcon from "./media/js_128.png"
import frameworksIcon from "./media/code_128.png"
import gitIcon from "./media/git_128.png"

import yummiSS from "./media/project_screenshots/yummi1.png"
import artseeSS from "./media/project_screenshots/artsee1.jpeg"
import schedulerSS from "./media/project_screenshots/scheduler1.png"
import satellitSS from "./media/project_screenshots/satellit3.png"

function App() {

  const [modalState, setmodalState] = useState('modal');
  const [modalContent, setmodalContent] = useState('modal__content')
  const [modalData, setmodalData] = useState({});
  const [background, setBackground] = useState('navBar');

  function changeModalState(params1, params2,params3) {
  
    
    setmodalState(params1)
    setTimeout(() => {setmodalContent(params2); setmodalData(projects[params3])}, 300)
  }

  function changeNav() {
    setBackground('navBar moved');
    window.removeEventListener('scroll', () => {
      changeNav();
    });
  }

  window.addEventListener('scroll', function() {
    changeNav();
  });

  return (
    <div className="App">
      <Modal class={modalState} modalContent={modalContent} modalFunc={changeModalState} data={modalData}/>
      <Social />


      <section className="landingSection" id="landing">

      <section className="topNav">
        <Navbar background={background}/>
      </section>

        <Jumbotron />

        <div className="arrow bounce">
          <a href="#about">
            <img src={arrow} alt="arrow"/>
          </a>
        </div>

      </section>

      <section className="aboutSection" id="about">

        <div className="aboutSection__container-left">
            <div className="about__img">

            </div>
          </div>

        <div className="aboutSection__container-right">
            <h1>About Me</h1>
            <br></br>
            <p>I'm a full stack developer focused on building efficient, lightweight and visually captivating web applications. My passion for coding began in seconday school, when I had a chance to build a few websites for my relatives business - and I've been fascinated by tech ever since. <br></br><br></br>I love building API's and I truly think that data (in any shape or form) is beautiful.<br></br> Nowadays I'm working on improving my skills in React-Native and, as always, continuosly learning new technologies.<br></br><br></br> I think this quote by Douglas Adams sums up the tech industry quite well: <br></br><br></br>
            <em>"We are stuck with technology when what we really want is just stuff that works."</em>
             </p>
        </div>

      </section>

      <section className="techStackSection" id="techstack">

        <h1>THE TECH I USE</h1>

        <div className="container">

          <Card 
            imgSrc={frameworksIcon} 
            content={'HTML, CSS, JAVASCRIPT, RUBY'} 
            title={'Languages'} 
          />

          <Card 
            imgSrc={languagesIcon} 
            content={'NodeJS/Express, React, React Native, Rails, Ajax, EJS, jQuery, Bootstrap, Semantic-UI, Ant Design, WebSockets, AWS services'} 
            title={'Frameworks, libraries'}
          />

          <Card 
            imgSrc={gitIcon} 
            content={'SQL, MongoDB, Git, Mocha, Chai, Jest, Cypress, RSpec, Heroku'} 
            title={'The rest'}
          />

        </div>

      </section>

      <section className="projectSection" id="projects">
        <h1>MY PROJECTS</h1>
        <div className="projectContainer">

          <ProjectCard 
            img={yummiSS} 
            title={"Yummi"} 
            tech={"NodeJS, EJS, Semantic-UI"} 
            modalFunc={changeModalState} 
            dataSource={'yummi'} 
            github={"https://github.com/arturaszuta/project_takeout"}
          />

          <ProjectCard 
            img={artseeSS} 
            title={"Artsee"} 
            tech={"React-Native, Rails"} 
            modalFunc={changeModalState} 
            dataSource={'artsee'}
            github={"https://github.com/arturaszuta/artsee"} 
          />

          <ProjectCard 
            img={schedulerSS} 
            title={"Interview Scheduler"} 
            tech={"React, NodeJS"} 
            modalFunc={changeModalState} 
            dataSource={'scheduler'}
            github={"https://github.com/arturaszuta/scheduler"} 
          />

          <ProjectCard 
            img={satellitSS} 
            title={"Satellit"} 
            tech={"React, NodeJS"} 
            modalFunc={changeModalState} 
            dataSource={'satellit'}
            github={"https://github.com/arturaszuta/satellite-go"} 
          />

        </div>
      </section>

      <section className="footer" id="connect">
        <div className="footer_content">
          <h1>Want to connect or would like to work together?</h1>
          <form>
            <input name="name" placeholder="name" type="text"/>
            <input name="email" placeholder="email" type="email" />
            <textarea name="message" placeholder="message" />
            <input name="Submit" type="submit" id="submit" />
          </form>
        </div>
        <p>ARTURAS ZUTA @ 2019</p>
      </section>

    </div>
  );
}

export default App;
