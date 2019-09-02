import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Container=styled.div`
position: relative;
display: inline-block;

`

const Outermost=styled.div`
  position: absolute;
  top: 110%;
  width: 85%;
  border: 1px solid black;
  border-style: solid;
  font-size: 18px;
  padding-left: 1vw;
  animation: 10s fadeIn;
  animation-fill-mode: forwards;
  border-radius: 2vw;
`

const Step=(props) => {
    return (
        <Outermost>
        <p>{props.text}</p>
        {props.children}
        </Outermost>
    )
}

const Stepper = () => {
    return (
        <div>
        <Step text={"Hi"}>
          <Step text={"How's it going"}>
            <Step text={"You come here often?"}>
              <Step text={"Yeah me too"}>
                <Step text={"How you like them apples?"}>
                  <Step text={"Pretty good!"}>
                    <Step text={"But I'm not really an apple person."}>
                      <Step text={"That does it, then."}>
                        <Step text={"See you round."}>
                      <Step text={"Bye now!"}>
                      </Step>
                      </Step>
                      </Step>
                    </Step>
                  </Step>
                </Step>
              </Step>                    
            </Step>
          </Step>
        </Step>
        </div>
    )
}

const Stack = (props) => {
    return (
        <div className="dove">
          {props.text}
        </div>

    )
}

const Stacker = (props) => {
    const listItems=props.row.map((item) => (
        <Stack text={item}/>
    ))
    return (
        <div>
        <Container>        
          <div>{listItems}</div>
        </Container><br/>
        </div>
    )
}
    
function App() {
    return (
    <div>

      <Stacker row={["I"]}/>
      <Stacker row={["just", "took"]}/>
      <Stacker row={["a", "DNA","test."]}/>
  </div>
  );
}

export default App;
