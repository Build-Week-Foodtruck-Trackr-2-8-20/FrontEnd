import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Registration from '../components/Registration'
import '../App.css';

function Home() {
  return (
    <React.Fragment>
      <Container maxWidth="lg" component="div" style={{ backgroundColor: '#eee', height: '100vh' }}>
        <Typography>Home</Typography>
        <Registration />
      </Container>
    </React.Fragment>
  );
}

export default Home;