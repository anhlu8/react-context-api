import React, { Component, Fragment } from 'react';
import { Consumer } from '../Context';

class Test extends Component {
    state = {  }
    render() { 
        return ( 
            <Consumer>
                {context  => (
                    <Fragment>
                    <p>Age: {context.state.age}</p>
                    <p>Name: {context.state.name}</p>
                    <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
                  </Fragment>

                )}
            </Consumer>
         );
    }
}
 
export default Test;