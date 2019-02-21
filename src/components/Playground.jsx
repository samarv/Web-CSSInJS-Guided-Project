import React from 'react';
import styled from 'styled-components';

// tag functions (ES6)
const StyledHeader = styled.header`
  border: 4px solid ${pr => pr.primary};
  padding: 10px;
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
