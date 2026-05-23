import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [

// ====================================================================================================================================================

// EDIT THIS PART:
// 
          
          "Role Title 1",
          "Role Title 2",
          "Role Title 3",
          "Role Title 4",
          "Role Title 5",

// ====================================================================================================================================================

          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
