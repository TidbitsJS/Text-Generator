import React, { Component } from 'react'

class Text extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: props.value
        }
    }

    onChange(e) {
        this.setState({value: e.target.value}, function() {
            this.props.onChange(this.state.value)
        })
    }

    render() {
        return(
            <div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">Paragraphs</span>
                    </div>
                    <input className="form-control"
                           type="number"
                           placeholder="Enter Number of Paras"
                           aria-label="Enter Number of Paras"
                           aria-describedby="basic-addon1"
                           value={this.state.value}
                           onChange={this.onChange.bind(this)} 
                    />
                </div>
            </div>
        )
    }
}

export default Text