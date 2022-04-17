import "./styles.css"
import Image from '../Square/images.js'

const Tabbar = (props) => {
    const { program } = props

    return (
        <div>
            <nav id="tab-bar">
                <div class="tab-bar-content">
                    <ul class="tab-bar-list">
                        <li class="tab-bar-item">
                            <a class="tab-bar-link" href="www.google.com">
                                <span id="program-title" class="tab-bar-link-text">{program}</span>
                            </a>
                        </li>
                        <li class="tab-bar-item">
                            <a class="tab-bar-link" href="www.google.com">
                                <span class="tab-bar-link-text">Metric 1</span>
                            </a>
                        </li>
                        <li class="tab-bar-item">
                            <a class="tab-bar-link" href="www.google.com">
                                <span class="tab-bar-link-text">Metric 2</span>
                            </a>
                        </li>
                        <li class="tab-bar-item">
                            <a class="tab-bar-link" href="www.google.com">
                                <span class="tab-bar-link-text">Metric 3</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Tabbar