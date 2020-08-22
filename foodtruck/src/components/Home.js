import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';

function Home() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#eee', height: '100vh' }}>
        <Typography>Home</Typography>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Home;