import React from 'react'
class TimeDate extends React.Component {
    constructor(props) {
      super(props);
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',  hour: 'numeric', minute: 'numeric' };
      this.state = {
        time: new Date().toLocaleString('en-us', options)
      };
    }
    
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        5000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    
    tick() {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',  hour: 'numeric', minute: 'numeric'  }
      this.setState({
        time: new Date().toLocaleString('en-us', options)
      });
    }
    render() {
      return (
        <h3 style={{fontWeight: "bolder" ,color: "whitesmoke", textShadow: '8px 4px 4px rgba(0, 0, 0, 0.69)'}}>
     {this.state.time}.
        </h3>
      );
    }
  }

  export default TimeDate
