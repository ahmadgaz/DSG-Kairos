import React from 'react';
import './styles.css';
import Square from '../Square'
import { Link } from 'react-router-dom'

const Grid = () => {
    return (
        <div class="cont">
            <div>
                <Link to="/general">
                    <Square title="general" />
                </Link>
                <Link to="/drive-thru">
                    <Square title="drive thru" />
                </Link>
            </div>
            <div>
                <Link to="/workshop">
                    <Square title="workshop" />
                </Link>
                <Link to="/rental-assistance">
                    <Square title="rental assistance" />
                </Link>
            </div>
            <div>
                <Link to="/scholarship">
                    <Square title="scholarship" />
                </Link>
                <Link to="/educational-activity">
                    <Square title="educational activity" />
                </Link>
            </div>
            <div>
                <Link to="/home-delivery">
                    <Square title="home delivery" />
                </Link>
                <Link to="/onboarding">
                    <Square title="onboarding" />
                </Link>
            </div>
        </div>
    )
}

export default Grid;