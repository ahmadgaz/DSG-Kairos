import React from 'react';
import './styles.css';
import Square from '../Square'
import { Link } from 'react-router-dom'

const Grid = () => {
    return (
        <div class="cont">
            <div>
                <Link to="/building-community">
                    <Square title="building community" />
                </Link>
                <Link to="/nutrition-and-health">
                    <Square title="nutrition and health" />
                </Link>
                <Link to="/giving-back">
                    <Square title="giving back" />
                </Link>
                <Link to="/parenting-effectiveness">
                    <Square title="parenting effectiveness" />
                </Link>
            </div>
            <div>
                <Link to="/financial-literacy">
                    <Square title="financial literacy" />
                </Link>
                <Link to="/violence-prevention">
                    <Square title="violence prevention" />
                </Link>
                <Link to="/promoting-academics">
                    <Square title="promoting academics" />
                </Link>
                <Link to="/life-skills-classes">
                    <Square title="life skills classes" />
                </Link>
            </div>
            <div>
                <Link to="/english-fluency">
                    <Square title="english fluency" />
                </Link>
                <Link to="/one-on-one-consultations">
                    <Square title="one-on-one consultations" />
                </Link>
                <Link to="/writing">
                    <Square title="writing" />
                </Link>
                <Link to="/continuing-in-the-homes">
                    <Square title="continuing in the homes" />
                </Link>
            </div>
            <div>
                <Link to="stem-education">
                    <Square title="stem education" />
                </Link>
                <Link to="path-to-college">
                    <Square title="path to college" />
                </Link>
                <Link to="computer-education">
                    <Square title="computer education" />
                </Link>
                <Link to="community-collaborations">
                    <Square title="community collaborations" />
                </Link>
            </div>
        </div>
    )
}

export default Grid;