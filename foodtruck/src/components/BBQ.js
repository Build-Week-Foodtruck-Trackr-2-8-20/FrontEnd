import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';

function BBQ() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#ccc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

export default BBQ;