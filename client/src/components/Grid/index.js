import React from 'react';
import './styles.css';
import Square from '../Square'
import { Link } from 'react-router-dom'

const Grid = () => {
    return (
        <div class="cont">
            <div>
                <Link to="/workshop">
                    <Square title="workshop" />
                </Link>
                <Link to="/drive-thru">
                    <Square title="drive thru" />
                </Link>
            </div>
            <div>
                <Link to="/rental-assistance">
                    <Square title="rental assistance" />
                </Link>
                <Link to="/onboarding">
                    <Square title="onboarding" />
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
            </div>
        </div>
    )
}

export default Grid;