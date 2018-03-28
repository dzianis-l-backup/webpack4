import React from 'react'

export default class Count extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    climb() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div onClick={this.climb.bind(this)}>
                <h1>
                    Counter: {this.state.count}
                </h1>
            </div>
        )
    }

}

Count.displayName = 'Count'


