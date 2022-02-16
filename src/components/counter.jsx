import React, { Component } from 'react';

export default class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    // };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    
    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 });
    // };
    

  componentDidUpdate(prevProps,prevState) {
    // Check if change was done.. and do ajax call
    // console.log('prevProps', prevProps);
    // console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax Call to get new data based on the state of objects
        console.log('there is a change')
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount!');
  }
  

    render() { 
        console.log('Counter - Loaded');
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}