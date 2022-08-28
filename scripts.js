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
    "Stencil.js",
    "Storybook.js",

    "Git",

    "GitHub",

    "Grunt",
    "NPM",
    "Yarn",

    "Node.js",

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
let projects = {
    HTML: [
        "",
    ],
}
document.getElementById('topic').innerHTML = topics[topic];