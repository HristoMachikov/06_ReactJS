import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: Number(window.localStorage.getItem(`${this.props.dataId}-counter`)) || 0
        }
        this.updateCouter = this.updateCouter.bind(this);
    }

    updateCouter() {
        const oldState = this.state.counter;
        this.setState({
            counter: oldState + 1
        }, () => window.localStorage.setItem(`${this.props.dataId}-counter`, `${this.state.counter}`));
    }

    render() {
        return (<button type="button" data-id={this.props.dataId} onClick={this.updateCouter}>
            Clicked {this.state.counter} times!
        </button>);
    }
}

// class Button extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//         this.updateCount = this.updateCount.bind(this);
//     }
//     updateCount() {
//         this.setState((prevState) => { count: prevState.count + 1 });
//     }
//     render() {
//         return (<button onClick={this.updateCount}>
//             Clicked {this.state.count} times</button>);
//     }
// }

export default Button;