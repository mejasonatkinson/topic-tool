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

    "Processing",
    "Arduino",

    "AWS",
];

let topic = Math.floor((Math.random() * topics.length) + 0);

// PHP Projects
// https://www.youtube.com/playlist?list=PLS46nnSnLF7ob6bgt2Xtn1iqj8wBKpq-N
// https://www.youtube.com/playlist?list=PLpwngcHZlPaf1aw42OGyitm4jh2Dlmi9c

// Quiz
// Course

// CMS (Content Management Systems)

// To do List

// Chess Game

// LMS (Learning Management System)

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
