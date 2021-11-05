import React from 'react';
import './Categories.css';

function Categories() {
    return (
        <>
            <section className="categories">
                <ul>
                    <li>
                        Sneakers
                    </li>
                    <li>
                        Streetwear
                    </li>
                    <li>
                        Electronics
                    </li>
                    <li>
                        Trading Cards
                    </li>
                    <li className="active">
                        Collectibles
                    </li>
                    <li>
                        Handbags
                    </li>
                    <li>
                        Watches
                    </li>
                </ul>
            </section>
            <section className="banner">
            </section>
       </> 
    )
}

export default Categories
