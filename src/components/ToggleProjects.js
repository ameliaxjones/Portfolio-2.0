import React from "react";
import Draggable from "react-draggable";
import "../Projects.css";

const ToggleProjects = () => {
  return (
    <div>
        <div>
          <Draggable cancel=".cancel">
            <div id="contentbox-projects">
              <div id="content-projects">
                <div className="scrollable-div">
                  <div id="project-img">
                    <img id="Ehome" src="assets/EHome.png" />
                  </div>
                  <p id="cancel txt-project">
                    <a
                      href="https://github.com/ameliaxjones/Eorzea-Homes"
                      target="_blank"
                    >
                      Eorzea Homes:{" "}
                    </a>
                    Two sided marketplace app built using Ruby, Rails,
                    Bootstrap, CSS, Devise, PostgreSQL, AWS and deployed on
                    Herkou. The purpose of Eorzea Homes is to easily connect FF
                    XIV players who want to decorate their homes with designers
                    who offer their services. Since this is a two sided
                    marketplace it allows for anyone who plays FF to be a
                    designer.
                  </p>
                  <div id="bottom-border">---</div>
                  <div id="project-img-r">
                    <img id="Ehome-r" src="assets/horoscope.png" />
                  </div>
                  <p id="cancel txt-project-r">
                    <a
                      href="https://github.com/ameliaxjones/horoscope"
                      target="_blank"
                    >
                      Daily horoscope app:{" "}
                    </a>{" "}
                    An app that will tell you your daily horoscope with an added
                    bonus of random galaxy images on each horoscope page.
                    Created using React, CSS, Pexel API, Aztro Api deployed on
                    Heroku.
                    <div id="bottom-border">---</div>
                  </p>
                  <div id="project-img">
                    <img id="Ehome" src="assets/leeroyvsworld.png" />
                  </div>
                  <p id="cancel txt-project">
                    <a
                      href="https://github.com/ameliaxjones/Leeroy_vs_The_World"
                      target="_blank"
                    >
                      Leeroy vs The World:{" "}
                    </a>{" "}
                    This is a quick turn-based fighting game based on the
                    adventures my dog, Leeroy goes on. The app emulates the
                    combat elements of Tabletop Roleplaying Games with the fight
                    menu similar to that of the game Pokemon. This was created
                    in Ruby to help understand the syntax and to play around
                    with gems.
                    <div id="bottom-border">---</div>
                  </p>
                  <div id="project-img-r">
                    <img id="Ehome-r" src="assets/portfolio.png" />
                  </div>
                  <p id="cancel txt-project-r">
                    <a
                      href="https://github.com/ameliaxjones/portfoilo"
                      target="_blank"
                    >
                      Portfolio 1.0:{" "}
                    </a>{" "}
                    This was my first website I built using only pure HTML and
                    CSS. It still has a slight retro feel to it.
                    <div id="bottom-border">---</div>
                  </p>
                </div>
              </div>
            </div>
            </Draggable>
        </div>
    </div>
  );
};

export default ToggleProjects;
