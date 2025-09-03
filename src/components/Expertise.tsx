import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsGames = [
    "Unity",
    "C#",
    "Multiplayer",
    "Optimization",
    "Player engagement and retention systems",
    "Photoshop",
    "Blender",
    "3D Modeling",
    "Editors Tools",
    "Git",
    
];
const labelsMarketing = [

    "Google Ads",
    "Meta Ads",
    "Applovin Max",
    "Unity Ads",
    "Firebase Analytics",
    "Appsflyer",
    "Adjust",
    "Google Analytics",
    "Game Analytics"
];
const LabelsMonetization = [
    "Admob",
    "Apploving Max",
    "Unity Ads",
    "Meta",
    "IronSourse",
    "Firebase Remote Config",
    "GA4",
    "Appsflyer",
    "Firebase A/B",
    "Funnels",
    "Google Data Studio"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Game Development</h3>
                        <p>Lead Unity Game Developer with 14 years of experience designing, developing, and publishing games. Specialized in hyper-casual, simulation, and multiplayer prototypes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                            {labelsGames.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                        <h3>User Acquisition & ASO</h3>
                        <p>I design and manage full-scale marketing strategies for mobile games, including:<br />
                            <ul className="list-disc pl-5" style={{ fontSize: "14px", padding: "0px 0px 0px 20px" }}>
                                <li>Google and Meta Ads with CPI optimization for better ROAS</li>
                                <li>High-performing playable ads, video ads and creative assets</li>
                                <li>Optimized ASO campaigns for higher organic visibility</li>
                                <li>Market research and competitor analysis for data-driven decision-making</li>
                            </ul>
                        </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                            {labelsMarketing.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                        <h3>Monetization & Live Ops</h3>
                        <p>I design and optimize monetization strategies and live operations for mobile games, including:<br />
                            <ul className="list-disc pl-5" style={{ fontSize: "14px", padding: "0px 0px 0px 20px" }}>
                                <li>Ad mediation bidding and waterfall optimization to maximize eCPM</li>
                                <li>In-App Purchases (IAP) design for higher ARPPU</li>
                                <li>Live events, offers, and seasonal updates to boost retention</li>
                                <li>Funnels, A/B testing and remote configuration for data-driven decisions</li>
                            </ul>
                        </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                            {LabelsMonetization.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;