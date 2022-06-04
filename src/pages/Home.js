import React from "react";
import Draggable from 'react-draggable';

import "../Home.css";

function Home(){
    return (

        <div>
            <div id="icons"> 
            </div>
                 <Draggable>
                    <div id="border-me">
                        <div id="hello"></div>
                        <p id="hi">Hi! <br></br>
                            I'm Amelia, <br></br>
                        A Jr Web Developer.</p>
                    </div>
                </Draggable>
                    <Draggable>
                        <div id="link-border">
                            <div id="links">
                                <a href="https://www.linkedin.com/in/amelia-jones-84589846/" target="_blank">LinkedIn</a>

                                <a href="https://github.com/ameliaxjones" target="_blank">Github</a>
                            </div>
                        </div>
                    </Draggable>
        </div>
        
    )

}

export default Home