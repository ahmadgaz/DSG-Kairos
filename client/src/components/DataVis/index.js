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
        </div>
    )
}

export default DataVis;
