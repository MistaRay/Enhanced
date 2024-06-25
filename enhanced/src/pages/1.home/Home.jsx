import React from 'react'
import NotebookGif from './notebook.gif';
import EquationsGif from './math.gif';
import Bg from './bg.png';
import { Link } from 'react-router-dom';

const navigation = [
    {name: 'Home', href: '/', current: true},
    {name: 'Login', href: '/login', current: false},
    {name: 'Notes', href: '/notes', current: false},
    {name: 'Math', href: '/math', current: false}
]

const Home = () => {
    return (
        <div 
        className="h-screen bg"
        style={{
            backgroundImage: `url(${Bg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            }}>
            <h1 className="text-text text-5xl flex text-center justify-center pt-10 font-bold">
                Enhance Your Study Experience
            </h1>
            <h2 className="text-text text-xl text-center my-6">
                Allow AI to elevate your learning journey with a suite of powerful tools designed to streamline the study process
            </h2>   
            <div className="flex justify-center items-center">
                <Link to="/login" className="flex justify-center text-center text-2xl text-bold p-4 my-4 bg-b2 w-80 rounded-xl font-bold hover:bg-yellow-300 transition duration-300">
                    Sign up Today!
                </Link>
            </div>
            <div className="flex justify-center items-center space-x-32">
                <div className="">
                    <Link to="/notes" className="bg-notwhitebro bg-opacity-85 flex flex-col rounded-3xl border-8 border-text items-center p-10 mt-10 mb-6 transition-transform transform hover:scale-105" style={{ width: '450px', height: '450px' }}>
                        <span className="text-3xl font-bold text-db">AI Notes</span>
                        <img src={NotebookGif} alt="AI-to-Notes GIF" className="object-cover w-full h-80"/> 
                    </Link>
                    <h2 className="text-text text-center text-xl" style={{ width: '450px'}}>
                        Transforms lengthy texts into concise, readable notes and study-friendly cue cards, optimizing your learning and revision process.
                    </h2>
                </div>
                <div>
                    <Link to="/math" className="bg-notwhitebro bg-opacity-80 flex flex-col rounded-3xl border-8 border-text items-center p-10 mt-10 mb-6 transition-transform transform hover:scale-105" style={{ width: '450px', height: '450px' }}>
                        <span className="text-3xl font-bold mb-10 text-db">Equation Solver</span>
                        <img src={EquationsGif} alt="Equation Solver GIF" className="object-cover w-full h-64"/>
                    </Link>
                    <h2 className="text-text text-center text-xl" style={{ width: '450px'}}>
                        Tackles intricate mathematical problems, providing detailed step-by-step solutions to enhance your understanding and problem-solving skills.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Home;