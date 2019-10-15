import React from 'react';
import './App.scss';

import Jumbotron from "./components/Jumbotron/jumbotron"
import Social from "./components/Social/social"
import arrow from "./media/arrow.png"

function App() {
  return (
    <div className="App">
      <Social />

      <section className="topNav">
        <p>This is topnav</p>
      </section>

      <section className="landingSection">

        <Jumbotron />

        <div className="arrow bounce">
          <img src={arrow} />
        </div>

      </section>

      <section className="aboutSection">

        <div className="aboutSection__container-left">
            <p>This is left!</p>
          </div>

        <div className="aboutSection__container-right">
            <p>This is right!</p>
        </div>

      </section>

      <section className="techStackSection">
        <p>These are my awesome tech stacks!</p>
      </section>

      <section className="projectSection">
        <p>These are the ultra projects!</p>
      </section>

      <section className="footer">
        <p>This is my awesoem footer!</p>
      </section>

    </div>
  );
}

export default App;
