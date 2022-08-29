const topics = [
    "HTML",
    
    "BEM",
    "Atomic Design",

    "CSS",
    "sass",
    "JavaScript",

    "Web Components",

    "TypeScript",

    "PHP",
    "Symfony",
    "Laravel",
    "Wordpress",

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

    "Git",

    "GitHub",

    "Grunt",
    "NPM",
    "Yarn",

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

// Quiz
// Course

// CMS

// To do List

// Chess Game

// LMS

// CV/Resume Generator
// Cover Letter Generator

// presentation tool

// portfolio website

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