import React from 'react';
import './styles.css';

const tabs = [
    {
        id: 1,
        name: 'Home',
        content: 'Home Content'
    },
    {
        id: 2,
        name: 'About',
        content: 'About Content'
    },
    {
        id: 3,
        name: 'Contact',
        content: 'Contact Content'
    }
]

const Tabs: React.FC<{}> = ({ }) => {
    const [activeTabId, setActiveTabId] = React.useState(1);

    return (
        <div className="container">
            <div className="tabs-row">
                {
                    tabs.map(({ id, name }) => (
                        <div
                            key={id}
                            id={`tab-${id}`}
                            className={`tab-link ${activeTabId === id ? 'active' : ''}`}
                        >
                            <button
                                onClick={() => setActiveTabId(id)}
                            >
                                {name}
                            </button>
                        </div>
                    ))
                }
            </div>

            <div className="tab-content">
                {
                    tabs.map(({ id, content }) => (
                        <div
                            key={id}
                            id={`tab-content-${id}`}
                            className={`tab-item ${activeTabId === id ? 'active' : ''}`}
                        >
                            {content}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tabs;