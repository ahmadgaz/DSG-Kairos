import "./styles.css"

const Tabbar = (props) => {
    const { program } = props

    return (
        <div>
            <nav id="tab-bar">
                <div class="tab-bar-content">
                    <ul class="tab-bar-list">
                        <li class="tab-bar-item">
                            <div class="tab-bar-link">
                                <span id="program-title" class="tab-bar-link-text">{program}</span>
                            </div>
                        </li>
                        <li class="tab-bar-item">
                            <a class="tab-bar-link" href="www.google.com">
                                <span class="tab-bar-link-text">Client Frequency</span>
                            </a>
                        </li>
                        <li class="tab-bar-item">
                            <a class="tab-bar-link" href="www.google.com">
                                <span class="tab-bar-link-text">Most Active Users</span>
                            </a>
                        </li>
                        <li class="tab-bar-item">
                            <a class="tab-bar-link" href="www.google.com">
                                <span class="tab-bar-link-text">Age Groups</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Tabbar