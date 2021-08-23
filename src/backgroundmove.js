import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const BackgroundDIV = styled(motion.div)`
height:80vh;
width: 30vw;
border-right: 4px solid blue;
background: linear-gradient(268.5deg, #001792 1.11%, transparent 37.6%);

`
const styles = {
    width: "100vw",
    marginTop: "10vh",
    position: "absolute",
     display:'flex', 
     flexDirection:'row',
     borderTop: "4px solid blue",
     borderBottom: "4px solid blue"
}

function BackgroundMove() {
    return (
        <div style={styles}>
            <BackgroundDIV 
            animate={{x: -300}}
            transition={{ duration: 5, yoyo: Infinity }}/>
               <BackgroundDIV 
            animate={{x: -500}}
            transition={{ duration: 5.5, yoyo: Infinity }}/>
               <BackgroundDIV 
            animate={{x: -700}}
            transition={{ duration: 5.8, yoyo: Infinity }}/>
        </div>
    )
}

export default BackgroundMove
