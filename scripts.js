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

// Project ideas:

// PHP Projects

// https://www.youtube.com/playlist?list=PLS46nnSnLF7ob6bgt2Xtn1iqj8wBKpq-N
// Online Shopping System in PHP and MySQL
// E commerce website in PHP and MySQL
// Online Car Rental System Using PHP and MySQL
// Student portal website using php and MySQL
// Online Food Order System In PHP and MySQL
// Farm Management System In PHP and MySQL
// Simple Food Order System In PHP and MySQL 
// ONLINE QUIZ SYSTEM IN PHP and MySQL 
// Hospital Management System using PHP and MySQL
// Pharmacy Website in PHP and MySQL 
// Simple Online Hotel Reservation System In PHP
// Library Management System In PHP and MySQL
// Online Restaurant Management System In PHP
// Mobile Shop Management System In PHP and MySQL 
// How to create a Blog/Website using PHP
// Simple Attendance Record System using PHP
// Online Examination System In PHP
// Simple Shopping Cart In PHP
// Simple Blood Donor Management System using PHP
// Student Result Management System project in php
// -> Chat System Using PHP
// Point of Sale System in PHP
// Attendance Management System using PHP
// Computer Science Time Table System In PHP and MySQL
// Simple Inventory System In PHP
// Simple Flight Ticket Booking System In PHP
// Bus Booking System In PHP
// Online Bus Reservation Site Using PHP
// Equipment Inventory Management System in PHP
// Hostel Management System using PHP
// ONLINE VOTING SYSTEM IN PHP
// HOTEL MANAGEMENT SYSTEM IN PHP
// Doctor Appointment System In PHP 
// -> Invoicing System In PHP 
// House Rental Management System In PHP 
// Employee Leave Management System Using PHP
// Food Ordering System in PHP 
// Student Timetable Management System In PHP
// ONLINE HOSPITAL MANAGEMENT SYSTEM IN PHP 
// Simple Student Alumni System In PHP 
// Simple Gym Management System In PHP 
// E-Banking System In PHP 
// Water Billing System In PHP 
// Task Management System In PHP 
// School Fees Payment System In PHP 
// PROJECT MANAGEMENT SYSTEM IN PHP 
// ONLINE EXAM SYSTEM IN PHP
// ATTENDANCE SYSTEM IN PHP 
// Laboratory Management System in PHP
// EMPLOYEE MANAGEMENT SYSTEM IN PHP
// REAL ESTATE PROPERTY MANAGEMENT SYSTEM IN PHP 
// ONLINE QUIZ SITE IN PHP 
// Jewellery Store Site Using PHP 
// Online Student Management System In PHP
// STUDENT DETAILS MANAGEMENT SYSTEM IN PHP 
// VEHICLE MANAGEMENT SYSTEM IN PHP 
// Student Admission System in PHP 
// ENROLLMENT SYSTEM IN PHP 
// Human Resource Management In PHP 
// CAR PARK MANAGEMENT SYSTEM IN PHP 
// Hospital Information System In PHP 
// -> Social Networking Site In PHP
// ONLINE DISCUSSION FORUM SITE USING PHP 
// -> SIMPLE CHAT SYSTEM IN PHP 
// Stock Manager In PHP 
// Blood Donor Management System in PHP
// -> Movie Ticketing System In PHP 
// FEEDBACK SYSTEM IN PHP 
// Crime Reporting System in PHP 
// Class and Exam Timetable Management System in PHP 
// -> Job Portal Site Using PHP
// Online Clothing Store Using PHP 
// Login Registration System in PHP 
// VISITOR MANAGEMENT SYSTEM IN PHP 
// Online Bike Rental System Using PHP 
// LIBRARY MANAGEMENT SYSTEM IN PHP
// STUDENT FILE MANAGEMENT SYSTEM IN PHP 
// Easy Blog Site In PHP 
// CINEMA SEAT RESERVATION SYSTEM IN PHP
// Simple Laundry System in PHP 
// ONLINE JOB PORTAL SYSTEM IN PHP 
// Accounting System In PHP
// BLOOD BANK MANAGEMENT SYSTEM IN PHP 
// Address Book in PHP
// -> SIMPLE CHAT SYSTEM IN PHP 
// Barcode Generator In PHP 
// -> Messenger Chat System in PHP and MySQL 
// eBlog site in PHP and MYSQL
// Social Networking Site in PHP and MySQL
// -> Social Media Site in PHP
// Online Blog Site in PHP and MySQL Free 
// HUMAN RESOURCE INTEGRATED SYSTEM IN PHP 

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
