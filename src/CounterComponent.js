import React from 'react';
import classes from './CounterComponent.module.css';

class CounterComponent extends React.Component {

    constructor(props){
        super(props);

        this.state={
            count: this.props.minCount
         }

    }
    IncrementCount=()=>{
        const updatedCount = (this.state.count + 1) <= this.props.maxCount ?
         (this.state.count + 1) : this.state.count   
         
         this.setState({
            count: updatedCount
        })
    }
    DecrementCount=()=>{
        const updatedCount = (this.state.count - 1) >= this.props.minCount ?
        (this.state.count - 1)  : this.state.count 
        

            this.setState({
                count: updatedCount
            }) 
    }

    render(){

        return(
            <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.IncrementCount}>Increment</button>
            <button onClick={this.DecrementCount}>Decrement</button>
            </div>
        )

    }

    
}

export default CounterComponent;