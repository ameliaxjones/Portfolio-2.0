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
                        <p>Hi! <br></br>
                            I'm Amelia, <br></br>
                        A Jr Web Developer.</p>
                    </div>
                </Draggable>
        </div>
        
    )

}

export default Home