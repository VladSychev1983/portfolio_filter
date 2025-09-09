import React from 'react'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import projects from '../source.json';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.selected = "All";
        this.filters = ["All", "Websites", "Flayers", "Business Cards"];
        this.state = {
           selected: this.selected
        };
    }
    filterProjects = (filter) => {
        let filteredProjects;
        if(this.state.selected == "All") {
            return projects;
        } else
        {
            filteredProjects = projects.filter(project => project.category == filter)
        }
        return filteredProjects;
    }

    clickFilter = (filter) => {
        console.log(`Clicked ${filter}`)
        this.setState({  selected: filter });
        this.filterProjects(filter);
        console.log(this.state.selected)
    }
    render() {
        return (
        <>
        <Toolbar filters={this.filters} selected={this.state.selected} onSelectFilter={this.clickFilter} />
        <ProjectList projects={this.filterProjects(this.state.selected)}/>
        {/* <div>Portfolio component</div> */}
        </>
        )
    }
}
export default Portfolio;