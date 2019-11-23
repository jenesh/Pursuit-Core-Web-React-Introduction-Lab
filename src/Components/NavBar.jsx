import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className='NavBar'>
                <button>What is Pursuit?</button>
                <button>Create an account</button>
                <button>Sign in</button>
            </div>
        );
    }
}

export default NavBar;
