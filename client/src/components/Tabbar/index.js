import "./styles.css"

const Tabbar = (props) => {
    const { program } = props

    return (
        <div class="tab-bar">
            <nav id="doc-nav" class="doc-nav" role="navigation">
                <ul class="side">
                    <li class="nav-overview">
                        <a href="/">Client frequency at events</a>
                    </li>
                    <li class="nav-overview">
                        <a href="/">Most active users</a>
                    </li>
                    <li class="nav-overview">
                        <a href="/">Age groups</a>
                    </li>
                    <li class="nav-overview">
                        <a href="/">Another metric</a>
                    </li>
                    <li class="nav-overview">
                        <a href="/">One more metric for fun</a>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Tabbar