import "./styles.css"

const Navbar = () => {
    return (
        <div>
            <nav id="globalnav" role="navigation" lang="en-US">
                <div class="ac-gn-content">
                    <ul class="ac-gn-list">
                        <li class="ac-gn-item">
                            <a class="ac-gn-link" href="www.google.com">
                                <span class="ac-gn-link-text">Sunday Friends</span>
                            </a>
                        </li>
                        <li class="ac-gn-item">
                            <a class="ac-gn-link" href="www.google.com">
                                <span class="ac-gn-link-text">General</span>
                            </a>
                        </li>
                        <li class="ac-gn-item">
                            <a class="ac-gn-link" href="www.google.com">
                                <span class="ac-gn-link-text">Programs</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar