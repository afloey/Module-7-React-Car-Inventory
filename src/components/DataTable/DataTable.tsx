import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { CarForm } from '../CarForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'name', headerName: 'Contact Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'car_color', headerName: 'Car Color', flex: 1 },
    { field: 'car_make', headerName: 'Car Make', flex: 1 },
    { field: 'car_model', headerName: 'Car Model', flex: 1 },
    { field: 'car_year', headerName: 'Car Year', flex: 2 },
];

interface gridData {
    data: {
        id?:string
    }
}

export const DataTable = () => {

    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<any>([]);
     console.log(carData)

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        console.log(gridData.data.id);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }

 console.log(gridData.data.id!);
 console.log(`testing for data ${carData}`)

 return (
    <div style={{ height: 400, width: '100%'}}>
      <h2>My Inventory</h2>
      <DataGrid rows={ carData } columns={ columns } pageSize={ 5 } checkboxSelection={true}
      onSelectionModelChange={ (item) => {
        setSelectionModel(item)
      }}/>

      <Button onClick={handleOpen}>Update</Button>
      <Button variant='contained' color='secondary' onClick={deleteData}>Delete</Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Update Contact {selectionModel}</DialogTitle>
        <DialogContent>
          <DialogContentText>Update Contact</DialogContentText>
            <CarForm id={selectionModel!}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>Cancel</Button>
          <Button onClick={handleClose} color='primary'>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}