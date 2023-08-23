import React from 'react';


export default function App() {
    const handler = async ()=> {
        const response = await fetch('http://localhost:5000/api/data');
        const data = await response.json();
        console.log(data);
    };
    return (
        <>
            <button onClick={handler}>click on me!</button>
        </> 
    );
};


