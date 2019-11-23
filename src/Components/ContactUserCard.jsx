import React from 'react';
import './ContactUserCard.css';

class ContactUserCard extends React.Component {
    render() {
        return (
            <div className='ContactUserCard'>
                <img
                    src='https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg'
                    width='200'
                    height='200'
                    alt='user contact card'
                >
                </img>
                <div className='Description'>
                    <h2>Jordan Walke</h2>
                    <h3>React Creator</h3>
                    <p>Lorem Ipsem</p>
                </div>
            </div>
        );
    }
}

export default ContactUserCard;
