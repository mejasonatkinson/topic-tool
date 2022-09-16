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


// Project ideas:

// https://www.youtube.com/watch?v=n2B-FClr5rA

// 5 Coding Projects (from beginner to advanced)

// beginner

// 2:44 Beginner Project #1 - Hello, World (seriously)
// 3:25 Beginner Project #2 - Cooking (data types & functions)
// 7:03 Beginner Project #3 - Tournament Simulation (OOP, data sctructures, etc.)

// intermediate

// 9:16 Intermediate Project - Web App w/ APILayer

// advanced

// 15:25 Advanced Project - Content Management System

// Hobby based
// Tatical based




// PHP Projects

// https://www.youtube.com/playlist?list=PLS46nnSnLF7ob6bgt2Xtn1iqj8wBKpq-N
// -> Chat System Using PHP
// -> Invoicing System In PHP 
// -> Social Networking Site In PHP
// -> SIMPLE CHAT SYSTEM IN PHP 
// -> Movie Ticketing System In PHP 
// -> Job Portal Site Using PHP
// -> SIMPLE CHAT SYSTEM IN PHP 
// -> Messenger Chat System in PHP and MySQL 
// -> Social Media Site in PHP

// https://www.youtube.com/playlist?list=PLpwngcHZlPaf1aw42OGyitm4jh2Dlmi9c
// ->

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

// Clones
// - Slack, clone
// - Twitch, clone
// - Facebook, clone
// - Reddit, clone
// - Youtube, clone
// - TikTok, clone
// - Discord, clone
// - Instagram, clone
// - Trello, clone
// - LinkedIn, clone
// - Twitter, clone


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
