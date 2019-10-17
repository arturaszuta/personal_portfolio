import React, { useState, useEffect } from 'react';
import './App.scss';

import Jumbotron from "./components/Jumbotron/jumbotron"
import Social from "./components/Social/social"
import Navbar from "./components/Navbar/navbar"
import Card from "./components/Card/card"
import ProjectCard from "./components/ProjectCard/projectcard"
import Modal from "./components/Modal/modal"

import arrow from "./media/arrow.png"
import portfolio from "./media/portfolio-placeholder.jpg"

function App() {

  const [modalState, setmodalState] = useState('modal');
  const [modalContent, setmodalContent] = useState('modal__content')

  function changeModalState(params1, params2) {
    setmodalState(params1)
    setTimeout(() => {setmodalContent(params2)}, 100)
  }
 


  return (
    <div className="App">
      <Modal class={modalState} modalContent={modalContent} modalFunc={changeModalState} />
      <Social />


      <section className="landingSection">

      <section className="topNav">
        <Navbar />
      </section>

        <Jumbotron />

        <div className="arrow bounce">
          <img src={arrow} />
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
            <p>I'm a full stack developer focused on building efficient, lightweight and visually captivating web applications. My passion for coding began in seconday school, when I had a chance to build a few websites for my relatives business - and I've been captivated by tech ever since. <br></br><br></br>I love building API's and I truly think that data(in any shape or form) is beautiful.<br></br> Nowadays I'm working on improving my skills in React-Native and, as always, continuosly learning new technologies.<br></br><br></br> I think this quote by Douglas Adams sums up tech industry quite well: <br></br><br></br>
            <em>We are stuck with technology when what we really want is just stuff that works.</em>
             </p>
        </div>

      </section>

      <section className="techStackSection">

        <h1>THE TECH I USE</h1>

        <div className="container">

          <Card 
            imgSrc={'https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true'} 
            content={'HTML, CSS, JAVASCRIPT, RUBY'} 
            title={'Languages'} 
          />

          <Card 
            imgSrc={'https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true'} 
            content={'NodeJS/Express, React, React Native, Rails, Ajax, EJS, jQuery, Bootstrap, Semantic-UI, Ant Design, WebSockets, AWS services'} 
            title={'Frameworks, libraries'}
          />

          <Card 
            imgSrc={'https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true'} 
            content={'SQL, MongoDB, Git, Mocha, Chai, Jest, Cypress, RSpec, Heroku'} 
            title={'The rest'}
          />

        </div>

      </section>

      <section className="projectSection">
        <h1>MY PROJECTS</h1>
        <div className="projectContainer">
          <ProjectCard img={portfolio} title={"Yummi"} tech={"NodeJS, EJS, Semantic-UI"} modalFunc={changeModalState} />
          <ProjectCard img={portfolio} title={"Yummi"} tech={"NodeJS, EJS, Semantic-UI"} modalFunc={changeModalState} />
          <ProjectCard img={portfolio} title={"Yummi"} tech={"NodeJS, EJS, Semantic-UI"} modalFunc={changeModalState} />
        </div>
      </section>

      <section className="footer">
        <p>This is my awesoem footer!</p>
      </section>

    </div>
  );
}

export default App;
