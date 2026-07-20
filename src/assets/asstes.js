import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaRProject, FaSchool } from 'react-icons/fa6'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

import css from '../assets/css.webp'
import express from '../assets/expressjs.png'
import html from '../assets/html.jpg'
import js from '../assets/js.png'
import mongodb from '../assets/mongodb.png'
import node from '../assets/nodejs.webp'
import Reacts from '../assets/React.png'
import tailwid from '../assets/tailwid.png'
import project1 from '../assets/project01.png'
import project2 from '../assets/project02.png'

import { FaProjectDiagram } from 'react-icons/fa'



export const assets = {

}


export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


export const skillsData = [
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: [{ name: 'React', img: Reacts }, { name: 'Javascript', img: js }, { name: 'Html', img: html }, { name: 'Css', img: css }, { name: 'Tailwindcss', img: tailwid }],
        icons: ['FaReact', 'IoLogoJavascript', 'FaHtml5', 'FaCss3Alt', 'FaReact',]

    },


    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: [{ name: 'Express.js', img: express }, { name: 'Node.js', img: node }, { name: 'MongoDB', img: mongodb }]
    },


]



export const projectData = [
    {
        title: 'Food Ordering Website',
        description: 'A responsive food ordering web application with menu browsing, category filtering, shopping cart, and a modern user interface.',
        image: project1,
        tech: ['React', 'JavaScript ', 'Tailwindcss'],

    },
    {
        title: 'Food Menu Website',
        description: 'A modern restaurant menu website featuring food categories, responsive layouts, and an elegant user interface.',
        image: project2,
        tech: ["HTML", "CSS", "JavaScript"],

    },
    {
        title: 'Movie Website',
        description: 'A movie browsing application with search, movie details, trending movies, and a responsive user interface powered by an API.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: ['React', 'JavaScript ', 'Tailwindcss'],

    },
    {
        title: '',
        description: 'A mood-based interior design suggestion tool that uses AI',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: ['React', 'JavaScript ', 'Tailwindcss'],

    }
]

export const profileData = [
    {
        icon: FaCode,
        title: 'Language',
        technologies: ['React', 'Javascript', 'Html', 'React', 'Css', 'Tailwindcss']
    },
    {
        icon: FaSchool,
        title: 'Education',
        technologies: ['(BCA) Bachelor of Computer Applications']
    },
    {
        icon: FaProjectDiagram,
        title: 'Projects',
        technologies: ['Built more than 5+']
    },
]