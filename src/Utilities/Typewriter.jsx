import React from 'react'
import Typewriter from 'typewriter-effect';

<Typewriter
onInit={(typewriter) => {
    typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .start();
}}
/>
