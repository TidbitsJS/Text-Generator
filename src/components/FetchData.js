import React, { Component } from 'react'
import Output from 'components/Output'
import Text from 'components/controls/Text'
import Select from 'components/controls/Select'

class FetchData extends Component {
    constructor(props) {
        super(props)
        this.state = {
          paras: 4,
          html: 'p',
          text: 'Text will go Here'
        }
      }
    
      componentDidMount() {
        this.getSampleText()
      }
    
      getSampleText() {
        const url = `https://litipsum.com/api/${this.state.paras}/${this.state.html}`;
        fetch(url)
          .then(response => response.text())
          .then(contents => {
            this.setState(
                {text:contents}, function() {
                  console.log(this.state)
                }
              )
            console.log(contents)
          })
          .catch(() => console.log("Can’t access " + url))
      }
    
      showHtml(x) {
        this.setState({html: x}, this.getSampleText)
      }
    
      changeParas(number) {
        this.setState({paras: number}, this.getSampleText)
      }

    render() {
        return (
            <div className="App">
                <form className="form-inline">
                    <div className="form-group">
                      <Text value={this.state.paras} 
                            onChange={this.changeParas.bind(this)} />
                    </div>
                    <div className="form-group">
                      <Select value={this.state.html} 
                              onChange={this.showHtml.bind(this)} />
                    </div>
                </form>
                <Output value={this.state.text}/>
            </div>
        )
    }
}

export default FetchData
