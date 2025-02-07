import React from 'react';
import './style.css';

const Accordion = () => {
    const [toggle, setToggle] = React.useState(false);

    const toggleAccordion = () => {
        setToggle(!toggle);
    }

    return (
        <div className="container">
            <div className="accordion">
                <h1>Accordion Component</h1>
            </div>
            {/* Title Section */}
            <div className="title-section">
                <div className="title">
                    <h2>Accordion Title</h2>
                </div>
                <div className="toggle-section">
                    <button
                        className='toggle-btn'
                        onClick={toggleAccordion}
                    >
                        {/* toggle icon */}
                        <span 
                            className={`toggle-icon ${toggle ? 'rotate' : ''}`}
                        >
                            <i className="fas fa-chevron-down"></i>
                        </span>
                    </button>
                </div>
            </div>

            {/* Content Section */}
            {
                <div 
                    className={`content-section ${toggle ? 'open' : ''}`}
                >
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Accordion;