import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { invert } from 'polished';
// import  { theme } from './Container';

const kf = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// tag functions (ES6)
const StyledHeader = styled.header`
  border: 4px solid ${pr => pr.primary};
  border-radius: ${props => props.radius}px;
  padding: 10px;

  @media (max-width: 400px) {
    &{
      border: 4px solid ${pr => pr.primary};
    }
  }

  nav {
    display: flex;
    justify-content: center;

    a {
      margin-left: 10px;
      margin-right: 10px;

      &:hover {
        color: ${invert('#000')};
      }

      &.rotate {
        animation: ${kf} 2s infinite linear;
      }
    }
  }
`;

export default function Playground({ primary }) {
  const [radius, setRadius] = useState(1);

  const increaseRadius = () => setRadius(radius * 2);
  const decreaseRadius = () => setRadius(radius / 2);

  return (
    <StyledHeader
      id='theHeader'
      primary={primary}
      radius={radius}
    >
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a className='rotate' href="#">Blog</a>
      </nav>

      <button onClick={increaseRadius}>Increase radius!</button>
      <button onClick={decreaseRadius}>Decrease radius!</button>
    </StyledHeader>
  );
}

// const getStyles = ({ primary }) => ({
//   header: {
//     padding: '10px',
//     marginTop: '10px',
//     border: `4px solid ${primary}`,
//   },
//   nav: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   link: {
//     marginLeft: '10px',
//     marginRight: '10px',
//   },
// });
