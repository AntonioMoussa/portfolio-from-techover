import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import bg1 from '../assets/background-dark.png';
import bg2 from '../assets/Swatch.png';

const bgStyle = (top, heightAdjusted) => ({
  position: 'fixed',
  top,
  left: 0,
  width: { sm: 'unset', xs: 'unset', md: '100%' },
  height: heightAdjusted ? { sm: '100%', xs: '100%', md: 'unset' } : '100%',
  zIndex: '-1',
});
const RootLayout = () => {
  return (
    <Box sx={{ paddingBottom: 20 }}>
      <Container>
        <Navbar />
      </Container>
      <Box component="img" src={bg1} alt="" sx={bgStyle(64, true)} />
      <Box component="img" src={bg2} alt="" sx={bgStyle(0, false)} />
      <main>
        <Outlet />
      </main>
    </Box>
  );
};

export default RootLayout;
