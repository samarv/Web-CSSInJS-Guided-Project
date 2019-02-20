import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from 'reactstrap';


const StyledLink = styled.a`
  margin-left: 5px;
  margin-right: 5px;
  font-weight: ${pr => (pr.bold ? '700' : '200')};

  &:hover {
    color: ${pr => pr.hoverColor};
  }
`;

const kf = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const ExtraordinaryLink = styled(StyledLink)`
  font-size: 20px;
  animation: ${kf} 2s linear infinite;

  ::before {
    content: '🚀';
  }
`;

const StyledHeader = styled.header`
  border: 3px solid ${pr => pr.primaryColor};
  border-radius: ${pr => pr.radius}px;
  padding: 10px;
  margin-top: 20px;

  nav {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 400px) {
    & {
      border: 13px solid ${pr => pr.primaryColor};
    }
  }
`;

export default function Playground({ primaryColor }) {
  const [radius, setRadius] = useState(1);
  const makeBiggerRadius = () => setRadius(radius * 2);
  const makeSmallerRadius = () => setRadius(radius / 2);

  return (
    <StyledHeader
      primaryColor={primaryColor}
      radius={radius}
    >
      <nav>
        <StyledLink id='specialLink' hoverColor='orange' href="#">Home</StyledLink>
        <ExtraordinaryLink hoverColor='green' href="#">Blog</ExtraordinaryLink>
        <StyledLink bold hoverColor='yellow' href="#">About us</StyledLink>
      </nav>
      <button onClick={makeBiggerRadius}>More Radius!</button>
      <Button color="danger" onClick={makeSmallerRadius}>Less Radius!</Button>
    </StyledHeader>
  );
}

// const getStyles = ({ primaryColor }) => ({
//   header: {
//     border: `3px solid ${primaryColor}`,
//     padding: '10px',
//     marginTop: '20px',
//   },
//   nav: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   link: {
//     marginLeft: '5px',
//     marginRight: '5px',
//   },
// });
