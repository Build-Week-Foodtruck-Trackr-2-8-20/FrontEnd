import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';

function Korean() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
          Korean
        <Typography component="div" style={{ backgroundColor: '#ffdb58', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

export default Korean;