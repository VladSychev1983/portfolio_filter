import React from 'react'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import projects from '../source.json';
import { useState } from 'react';

//класс передает в Toolbar (filters, selected, onSelectFilter(filter)
//класс хранит список проектов projects

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.selected = "All";
        this.filters = ["All", "Websites", "Flayers", "Business Cards"];
        this.state = {
           selected: this.selected
        };
    }

    clickFilter = (filter) => {
        console.log(`Clicked ${filter}`)
        this.setState({  selected: filter });
        console.log(this.state.selected)
    }
    render() {
        return (
        <>
        <Toolbar filters={this.filters} selected={this.state.selected} onSelectFilter={this.clickFilter} />
        <ProjectList projects={projects}/>
        <div>Portfolio component</div></>
        )
    }
}
export default Portfolio;