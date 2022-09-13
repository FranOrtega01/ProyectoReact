import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Spinner.scss'

export default function CircularIndeterminate() {
  return (
    <Box className='spinner'>
      <CircularProgress />
      <p>Cargando</p>
    </Box>
  );
}
