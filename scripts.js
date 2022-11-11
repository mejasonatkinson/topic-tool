const topics = [

];

let topic = Math.floor((Math.random() * topics.length) + 0);

document.getElementById('topic').innerHTML = topics[topic];
