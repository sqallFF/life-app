import React from 'react'
import styled from 'styled-components';
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
      const TimeDateContentStyle = {
        clipPath: "polygon(0 0, 96% 0, 100% 15%, 100% 65%, 96% 79%, 96% 100%, 0 100%)", 
        background: "black", 
        width: "99%", 
        height: "97%", 
        marginTop: ".2em",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
      }
      const TimeDateContentWrapper = {
        clipPath: "polygon(0 0, 96% 0, 100% 15%, 100% 65%, 96% 79%, 96% 100%, 0 100%)", 
        background:"blue", 
        width: "50%", 
        height: "100%",
      }
      const TimeTitle = styled.h2`
         color: #3FB7FF;
        margin-left: 10;
        padding: 0;
        width: 100%;
        border-bottom-width: 2px;
        border-top-width: 0px;
        border-left-width: 0px;
  border-style: solid;
  border-image:  linear-gradient(90deg, rgba(63,183,255,1) 0%, rgba(0,0,0,0) 74%) 1 stretch;
      `
      return (
        <div style={TimeDateContentWrapper}>
          <div style={TimeDateContentStyle}>
              <TimeTitle>Time</TimeTitle>
        <h3 style={{fontWeight: "bolder" ,color: "#00FFFC", textShadow: '8px 4px 4px rgba(0, 0, 0, 0.69)', marginBlockStart:0,
      marginBlockEnd:0, marginLeft: 20}}>
     {this.state.time}
        </h3>
        </div>
        </div>
      );
    }
  }

  export default TimeDate
