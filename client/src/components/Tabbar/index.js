import "./styles.css"
import React, { useState } from 'react';

function Tabbar(props) {

    const onClick = (e) => {
    }

    return (
        <div class="tab-bar">
            <nav id="doc-nav" class="doc-nav" role="navigation">
                <ul class="side">
                    <li class="nav-overview" id="client-frequency">
                        <button onClick={onClick}>Client frequency at events</button>
                    </li>
                    <li class="nav-overview" id="active-users">
                        <button onClick={onClick}>Most active users</button>
                    </li>
                    <li class="nav-overview" id="age-groups">
                        <button onClick={onClick}>Age groups</button>
                    </li>
                    <li class="nav-overview" id="another-metric">
                        <button onClick={onClick}>Another metric</button>
                    </li>
                    <li class="nav-overview" id="another-metric">
                        <button onClick={onClick}>One more metric for fun</button>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Tabbar