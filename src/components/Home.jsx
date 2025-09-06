import React from 'react';
import ProfilePhoto from '../images/Profile-photo.jpg';

function Home() {
    return (
        <div>
            <h1>Thiruselvam P</h1>
            <img className="Profile-Photo" src={ProfilePhoto} alt="Profile photo" />
            <p>
                Third-year B.Tech student in Artificial Intelligence and Data Science at Shiv Nadar University, Chennai.
                Strong foundation in Java and backend development with Spring Boot, with additional experience in Python,
                C++, and SQL/NoSQL databases. Passionate about Data Structures and Algorithms (100+ problems solved on
                LeetCode) and building scalable applications. Exploring full-stack development with React, with the goal
                of contributing to high-impact software engineering projects.
            </p>
        </div>
    );
}

export default Home;
