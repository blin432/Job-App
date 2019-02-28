import React, {Component} from 'react';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';
import Job from './Job.js';
import JobsListItem from './JobsListItem.js';
import './App.css';
import {withRouter} from 'react-router-dom';
import Button from './Button.js';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            jobs: []
        }
    }
    async componentDidMount(){
      
          axios.get('/api/jobs').then((response)=>{
            this.setState({jobs:response.data})
            console.log(response);
          })
    }
    render(){
    let jobsJSX = this.state.jobs.map((job,i)=> <JobsListItem key={i} {...job} />);
        return(
            <div>
                <div className="App">
                <header className="App-header" >
                    <h1 className="App-title">Jobs In Atlanta</h1>
                    <Button/>
                </header>
                </div>
                <div className="Jobs">
                    <Switch>
                        <Route path="/jobsearch" render={() => jobsJSX}/>
                        <Route path="/jobs/:id" component={Job}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(App);