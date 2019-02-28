import React from 'react';

const getStyle = () => ({
  header: {
    padding: '10px',
    marginTop: '10px',
    border: '4px solid black',
  },
  nav: {
    border: '5px solid red',
  },
});

export default function Playground() {
  let styles = getStyle();
  return (
    <div style={styles.header}>
      parent'splayground component

      <div style={styles.nav}>
        child's playground component
      </div>
    </div>
  );
}
