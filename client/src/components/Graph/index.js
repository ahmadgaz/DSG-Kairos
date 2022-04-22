import "./styles.css";
import React, {useState, useRef, useEffect} from 'react'
import * as d3 from "d3";

function Graph () {
    const [data] = useState([200, 250, 60, 150, 100, 175])
    const svgRef = useRef();

    useEffect(() => {
        // setting up svg container
        const w = 400;
        const h = 300;
        const svg = d3.select(svgRef.current)
        .attr('width', w)
        .attr('height', h)
        .style('overflow', 'visible')
        .style('margin-top', '0px')
        .style("fill", "rgb(0,122,255)" )

        // setting the scaling
        const xScale = d3.scaleBand()
            .domain(data.map((val, i) => i))
            .range([0, w])
            .padding(0.5)
        const yScale = d3.scaleLinear()
            .domain([0, h])
            .range([h, 0 ])

        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length)
        const yAxis = d3.axisLeft(yScale)
            .ticks(5);
        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${h})`)
        svg.append('g')
            .call(yAxis)

        svg.selectAll('.bar')
            .data(data)
            .join('rect')
                .attr('x', (v, i) => xScale(i))
                .attr('y', yScale)
                .attr('width', xScale.bandwidth())
                .attr('height', val =>  h - yScale(val))
    }, [data])

    return (
        <div>
            <div id="bar-graph">
                <svg ref={svgRef}></svg>
            </div>
        </div>
    )
}

export default Graph