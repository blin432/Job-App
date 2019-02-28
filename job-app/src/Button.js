import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';



class Button extends Component {
    constructor(props){
        super(props)
        
    }
    clickHandler(){
        this.props.history.push('/jobsearch');
        console.log(this.props);
    }
    render(){
        return(
        <div>
         <button className="App-subtitle" onClick={()=>this.clickHandler()}>Click to explore jobs</button>
        </div>        
        )
    }
}

export default withRouter(Button);