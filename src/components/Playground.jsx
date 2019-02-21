import React from 'react';
import styled from 'styled-components';
// import { theme } from './Container';

const theme = {
  colors: {
    primary: 'yellow',
    secondary: 'red',
  },
  margins: {
    sm: '10em',
    l: '12em',
  },
  padding: {

  },
};

// tag functions (ES6)
const StyledHeader = styled.header`
  border: 4px solid ${theme.colors.primary};
  padding: 10px;

  @media (max-width: 400px) {
    &{
      border: 4px solid ${theme.colors.secondary};
    }
  }

  nav {
    display: flex;
    justify-content: center;

    a {
      margin-left: 10px;
      margin-right: 10px;

      &:hover {
        color: yellow;
      }
    }
  }
`;

export default function Playground({ primary }) {
  return (
    <StyledHeader primary={primary}>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
      </nav>
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
