import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';

function Tacos() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
          Tacos
        <Typography component="div" style={{ backgroundColor: '#006200', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

export default Tacos;