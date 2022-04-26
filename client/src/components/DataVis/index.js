import React from "react"
import "./styles.css"
import Navbar from "../Navbar"
import Tabbar from "../Tabbar"
import Graph from "../Graph"
import Table from "../Table"

const DataVis = (props) => {
    const { program } = props

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div class="section-content">
                <div class="row">
                    {/* Side navigation */}
                    <div class="column large-3 doc-nav-container">
                        <Tabbar />
                    </div>
                    {/* Main content */}
                    <div class="large-9 hig-content">
                        <h2 id="program">{program}</h2>
                        <div class="graph">
                            <Graph />
                        </div>
                        <div class="table">
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
<div class="tabby">
                    <Tabbar program={program} />
                </div>
                <div class="line">
                    <hr />
                </div>
                <div class="graph">
                    <Graph />
                </div>
                <div class="table">
                    <Table />
                </div>
*/

export default DataVis;
