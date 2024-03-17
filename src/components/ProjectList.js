import toDoList_ from "../assets/img/to-do-list_.png"
import notes from "../assets/img/notes.png"
import secrets from "../assets/img/secrets.png"
import toDoList from "../assets/img/to-do-list.png"
import alanAI from "../assets/img/alan-ai.png";
import drumKit from "../assets/img/drumkit.png"
import simson from "../assets/img/simson.png"
import TinDog from "../assets/img/tin-dog.png"
import usabilityHub from "../assets/img/usability-hub.png"
import foodApp from '../assets/img/food-app.png'
import eventApp from '../assets/img/Event-app.png'
import blog from '../assets/img/blog.png'

const projects1 = [
    {
        title:'Food-Community Next App',
        description:'A Food Community App that allows to post and share meals',
        imgURL: foodApp,
        link: 'https://food-next-app-kohl.vercel.app/'
    },
    {
        title:'Event Browser Next App',
        description:'An Event Browser Next App to give updates about the latest events with filter functionalities',
        imgURL: eventApp,
        link: 'https://event-browser-next-app.vercel.app/'
    },
    {
        title:'Blog',
        description:'A Personal Blog built using Next JS and other react libararies',
        imgURL: blog,
        link: 'https://blog-next-js-azure.vercel.app/'
    },
    {
        title:'Alan AI News App',
        description:'A news app that uses Alan AI to fetch and read news. It can also do small talk and is able to open particular articles',
        imgURL: alanAI,
        link: 'https://alan-ai-news-app-by-jai.netlify.app/'
    },
    {
        title: "Take Note App",
        description: "A Take Note app with database and also delete and edit functionalites. Made using React and is deployed Live",
        imgURL: notes,
        link : 'https://notes-by-jai.netlify.app/'
    },
]

const projects2 = [
    
    {
        title: "To Do List",
        description: "A simple To Do list made using HTML CSS and NodeJS. I have also implemented live data base using mongodb atlas",
        imgURL: toDoList_,
        link : 'https://to-do-list-s80k.onrender.com/'
    },
    {
        title: "Secrets App",
        description: "A Web app that allows users to post the secrets online anonymously. This app also supports Google and Facebook OAuth",
        imgURL: secrets,
        link:'https://secrets-l418.onrender.com/'
    },
    {
        title: "Usability Hub Clone",
        description: "A clone of Usability Hub Website using HTML and CSS",
        imgURL: usabilityHub,
        link:'https://jaisonii.github.io/usability-hub-clone/'
    },
    {
        title: "To Do List",
        description: "A simple To Do list made using React",
        imgURL: toDoList,
        link : 'https://to-do-list-byjai.netlify.app/'
    }


]

const projects3 = [
    {
        title: "Drum Kit",
        description: "A mini project based on using jQuery and DOM",
        imgURL: drumKit,
        link:'https://jaisonii.github.io/drum-kit/'
    },
    {
        title: "The Simson Game",
        description: "Simson Game using HTML CSS and JavaScript",
        imgURL: simson,
        link:'https://jaisonii.github.io/simson-game/'
    },
    {
        title: "TinDog",
        description: "A Tinder for Dogs",
        imgURL: TinDog,
        link:'https://jaisonii.github.io/Tin-dog-project/'
    }
]

export {projects1, projects2, projects3}