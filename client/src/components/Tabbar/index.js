import "./styles.css"
import React, { useState } from 'react';

function Tabbar(props) {

    const [style, setStyle] = useState("butt");

    const onClick = (e) => {
        e.target.style.color = "white";
        e.target.style.backgroundColor = "rgb(50, 173, 230)";
    }

    return (
        <div class="tab-bar">
            <nav id="doc-nav" class="doc-nav" role="navigation">
                <ul class="side">
                    <li class="nav-overview" id="client-frequency">
                        <button class={style} onClick={onClick}>Client frequency at events</button>
                    </li>
                    <li class="nav-overview" id="active-users">
                        <button class={style} onClick={onClick}>Most active users</button>
                    </li>
                    <li class="nav-overview" id="age-groups">
                        <button class={style} onClick={onClick}>Age groups</button>
                    </li>
                    <li class="nav-overview" id="another-metric">
                        <button class={style} onClick={onClick}>Another metric</button>
                    </li>
                    <li class="nav-overview" id="another-metric">
                        <button class={style} onClick={onClick}>One more metric for fun</button>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Tabbar