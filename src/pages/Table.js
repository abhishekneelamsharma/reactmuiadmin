import React from 'react'
import Header from "../components/Header"
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';

const Table = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, headerAlign: 'center', headerClassName: 'super-app-theme--header' },
    { field: 'firstName', headerName: 'First name', headerAlign: 'center', headerClassName: 'super-app-theme--header', headerClassName: 'super-app-theme--header', width: 150 },
    { field: 'lastName', headerName: 'Last name', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 150 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 150,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
      headerClassName: 'super-app-theme--header',
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 12, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 13, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 14, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 15, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 16, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 17, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 18, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 19, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 20, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 21, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 22, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 23, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 24, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 25, lastName: 'Snow', firstName: 'Jon', age: 35 },

  ];



  return (
    <>
      <Header title="Table" subtitle="Welcome,this is my table" />
      <Box p={2} width={"100%"} sx={{
        //header cell
        '& .super-app-theme--header': {
          backgroundColor: '#6870fa',
        },

        '& .MuiDataGrid-row--borderBottom': {
          backgroundColor: '#6870fa !important',
        },

        //for footer
        '& .MuiDataGrid-footerContainer': {
          backgroundColor: '#6870fa'
        },

        //for toolbar color
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `#6870fa !important`,
        },

        //for row cells
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },

        //for quick search
        "& .MuiInput-underline": {
          backgroundColor: colors.primary[400],
          padding: "2px",
          borderRadius: "3px"
        }

      }}>
        <DataGrid rows={rows} columns={columns}

          //initial row are 5
          initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}

          //page options
          pageSizeOptions={[5, 10, 20, 50, 100]}

          // toolbar 
          slots={{
            toolbar: GridToolbar,
          }}

          //border none
          sx={{ border: "none" }}

          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 }
            },
          }}
        />
      </Box>


    </>
  )
}

export default Table