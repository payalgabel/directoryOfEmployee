import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid } from '@mui/x-data-grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export function CustomFooterStatusComponent(props) {
  return (
    <Box sx={{ p: 1, display: 'flex' , justifyContent: "end" }}>
      <FiberManualRecordIcon
        fontSize="small"
        sx={{
          mr: 1,
          color: props.status === 'connected' ? '#4caf50' : '#d9182e',
        }}
      />
      Status {props.status}
    </Box>
  );
}

export default function HeroDataGrid() {
  const [status, setStatus] = React.useState('connected');
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 4,
    maxColumns: 6,
  });
  return (
    <React.Fragment>
      <Box sx={{ width: '100%', display: "flex", justifyContent: "end"}}>
        <Box sx={{ height: 350, display: "flex", justifyContent: "end", mb: 1 }}>
          <DataGrid
            {...data}
            slots={{
              footer: CustomFooterStatusComponent,
            }}
            slotProps={{
              footer: { status },
            }}
          />
        </Box>
      </Box>
      <Box>
        <Button
          variant="contained"
          onClick={() =>
            setStatus((current) =>
              current === 'connected' ? 'disconnected' : 'connected',
            )
          }
        >
          {status === 'connected' ? 'Disconnect' : 'Connect'}
        </Button>
      </Box>
    </React.Fragment>  
  );
}