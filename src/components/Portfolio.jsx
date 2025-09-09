import React from 'react'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import projects from '../source.json';

//класс передает в Toolbar (filters, selected, onSelectFilter(filter)
//класс хранит список проектов projects

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <><Toolbar />
        <ProjectList projects={projects} />
        <div>Portfolio component</div></>
        )
    }
}
export default Portfolio;