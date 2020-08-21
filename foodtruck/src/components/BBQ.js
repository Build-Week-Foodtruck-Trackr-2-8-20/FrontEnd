import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';

function BBQ() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
          BBQ
        <Typography component="div" style={{ backgroundColor: '#8B4513', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

export default BBQ;