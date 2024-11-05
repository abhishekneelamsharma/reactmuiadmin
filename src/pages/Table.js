import React from 'react'
import Header from "../components/Header"
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../data/mockdata';

const Table = () => {


  
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'age', headerName: 'Age', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 150 },
  ];

  return (
    <>
      <Header title="Table" subtitle="Welcome,this is my table" />
      <div style={{ height: '100%', width: '1000px' }}>
      <DataGrid rows={mockDataTeam} columns={columns} />
    </div>

    </>
  )
}

export default Table