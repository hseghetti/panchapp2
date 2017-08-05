import React, { Component } from 'react';

class Hello extends Component {
    constructor () {
        super();
        this.state = {name: 'HAS'};
    };

    render () {
        console.info('1111111      asdasdasdasd ', this)
        return (
            <div className="hello">
                {this.state.name} 11111
            </div>
        );
    };
}

export default Hello;