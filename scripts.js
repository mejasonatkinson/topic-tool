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
    "ReactJS",
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

// Craft CMS

// Yii Framework
// Twig

// Apache

// Composer

// Strapi CMS

// apollo/client
// react-markdown

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
// Rockest, Science

// History
// Computer Science, history
// Art, history
// Space, history

// Design

// Art

// Geography

// Math

// GitLab
// BitBucket

// postman
// sanity.io

// PostgresQL
// InnoDB
// GraphQL

// JSON

// cURL

// Pip

document.getElementById('topic').innerHTML = topics[topic];
