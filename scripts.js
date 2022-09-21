const topics = [
    "HTML",
    
    "BEM",
    "Atomic Design",

    "CSS",
    "sass",

    "JavaScript",

    "jQuery",

    "Web Components",

    "TypeScript",

    "PHP",
    "Symfony",
    "Laravel",
    "Wordpress",

    "MySQL",
    "MongoDB",

    "Python",
    "Django",
    "Wagtail",            

    "Phaser",

    "SCORM",
    "Xapi",

    "Vue",  
    "React",
    "Svelte",
    "StencilJS",
    "StorybookJS",
    
    "Express",
    "BunJS",
    "Deno",

    "Git",

    "GitHub",

    "Grunt",
    "NPM",
    "Yarn",

    "YAML",

    "NodeJS",

    "Docker",
    "Kubernetes",

    "Gitpod",

    "Visual Studio",
    "Vim",
    "JetBrain",

    "TDD",

    "OOP",

    "Cloud Development",
    
];

let topic = Math.floor((Math.random() * topics.length) + 0);

// Topics to add:

// lodash
// axios

// Processing
// Arduino
// p5JS

// AWS

// Adobe
// Photoshop

// Unity
// Unreal Engine

// Autodesk
// Maya
// 3ds Max

// OBS

// Marketing

// Science
// Computer, Science
// Learning, Science

// History
// Computer Science, history
// Art, history
// Space, history

// Geography

// Math

// GitLab
// BitBucket

// postman
// sanity.io

document.getElementById('topic').innerHTML = topics[topic];
