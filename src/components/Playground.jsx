import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
  width: 50%;
  height: 50%;
  border: 2px solid black;
`;

const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
    ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
    ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;


const Button2 = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button2)`
  color: tomato;
  border-color: tomato;
`;

// const getStyle = () => ({
//   header: {
//     padding: '10px',
//     marginTop: '10px',
//     border: '4px solid black',
//   },
//   nav: {
//     border: '5px solid red',
//   },
// });

export default function Playground() {
  return (
    <StyleDiv>
      parent'splayground component

      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="warning">Warning</Button>
      <TomatoButton>Tomato Button</TomatoButton>  
      <Button2>Tomato Button</Button2>  
    </StyleDiv>
  );
}
