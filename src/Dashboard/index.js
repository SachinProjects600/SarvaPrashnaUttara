import React from 'react'
import Questions from '../questions'
import background from '../assets/Yallamma_devi1.jpg'
const Dashboard = () => {
    return(
         // , backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat"
        <div style={{background:"blueviolet",backgroundSize: 'auto' }}>
            <h1 style={{color:"gold"}}>ಪ್ರಶ್ನೆಗಳ ಸಂಗ್ರಹ ಪತ್ರಿಕೆ</h1>
            <Questions />
        </div>
    )
}

export default Dashboard;