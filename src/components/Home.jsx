import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'


const Home = () => {
    return (
        <div className='Home'>
            <Link className="entrer" to='./achat'>Welcome</Link>
            <img 
            className='imageHome'
            src='http://florence-gendre-illustration.com/wp-content/uploads/2018/08/illustration-architecture-Paris-Place-Vendome-Vitrine-Cartier-Florence-Gendre-Illustratrice.jpg'
            alt='store'/>
        </div>
    );
}

export default Home;