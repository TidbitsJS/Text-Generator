import React, {Component} from 'react'

class Output extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value
        }
    }

    render() {
        return (
            <div className="card text-center">
                <div className="card-header text-white bg-primary">
                    Generated Text
                </div>
                <div className="card-body">
                    {(this.props.value).split(",")}
                </div>
            </div>
        )
    }

}

export default Output