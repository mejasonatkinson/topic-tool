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

//     "lodash",
//     "axios",

//     "Processing",
//     "Arduino",
//     "p5JS",

//     "AWS",

//     "Adobe",
//     "Photoshop",

//     "Unity",
//     "Unreal Engine",

//     "Autodesk",
//     "Maya",
//     "3ds Max",

//     "OBS",

// Project ideas:

// PHP Projects

// https://www.youtube.com/playlist?list=PLS46nnSnLF7ob6bgt2Xtn1iqj8wBKpq-N
// https://www.youtube.com/playlist?list=PLpwngcHZlPaf1aw42OGyitm4jh2Dlmi9c

// Processing Projects

// https://happycoding.io/examples/processing/
// https://openprocessing.org/
// https://processing.org/examples/

// Arduino Projects

// p5JS Projects

// https://happycoding.io/examples/p5js/
// https://p5js.org/examples/

// - Quiz
// - Course
// - Instrument Tuner
// - CMS (Content Management Systems)
// - To do List
// - Invoice Generator
// - Chess Game
// - LMS (Learning Management System)
// - Job Search Tool
// - CV/Resume Generator
// - Cover Letter Generator
// - presentation tool
// - portfolio website

let projects = {
    PHP: [
        "",
    ],
    Docker: [
        "",
    ],
    NodeJS: [
        "",
    ],
}

document.getElementById('topic').innerHTML = topics[topic];
