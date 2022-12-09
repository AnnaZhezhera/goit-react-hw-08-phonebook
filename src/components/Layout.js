import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar.js';
import { Suspense } from 'react';
import { Box } from '@chakra-ui/react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <Box w="100%" bg="yellow.50">
      <Box m="0 auto" p="0 16px" maxW="960">
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          closeOnClick
          theme="colored"
        />
      </Box>
    </Box>
  );
};
