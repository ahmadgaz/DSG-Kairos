import "./styles.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav id="globalnav" role="navigation" lang="en-US">
                <div class="ac-gn-content">
                    <ul class="ac-gn-list">
                        <li class="ac-gn-item">
                            <Link class="ac-gn-link" to="/">
                                <span class="ac-gn-link-text">Sunday Friends</span>
                            </Link>
                        </li>
                        <li class="ac-gn-item">
                            <Link class="ac-gn-link" to="/">
                                <span class="ac-gn-link-text">Overview</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar