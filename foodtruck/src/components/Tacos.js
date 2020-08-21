import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';

function Tacos() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
          Tacos
        <Typography component="div" style={{ backgroundColor: '#ccc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

export default Tacos;