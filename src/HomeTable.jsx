import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import logo from './Picture_MCT.jpg';

function createData(name, calories, fat, carbs, protein, status) {
    return { name, calories, fat, carbs, protein, status };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Approved'),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'Pending'),
    createData('Eclair', 262, 16.0, 24, 6.0, 'Pending'),
    createData('Cupcake', 305, 3.7, 67, 4.3, 'Approved'),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 'Approved'),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper} sx={{ boxShadow: 5, margin: 4,textAlign:'center',padding:6,maxWidth:'54rem'}}>
            <h3 sx={{ marginLeft: 200 }}>Latest Transactions</h3>
            <Table sx={{ boxShadow: 8}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >Tracking Id</TableCell>
                        <TableCell align="center">Product</TableCell>
                        <TableCell align="right">Customer</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell  >
                                {row.name}
                            </TableCell>
                            <TableCell align="right">
                                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <Avatar alt="Remy Sharp" src={logo}  sx={{ width: 35, height: 35 }} />{row.calories}</div></TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            <TableCell align="center">{row.status === 'Pending' ? <Button variant="" sx={{color:'goldenrod',backgroundColor:'rgba(189, 189, 3 , 0.183)'}}>Pending</Button> :
                                    row.status === 'Approved' ?  <Button variant="" sx={{color:'green',backgroundColor:'rgba(0, 128, 0, 0.151)'}}>Approved</Button> :
                                    row.status === 'Reject' ? <Button variant="contained">Reject</Button> : 'Unknown'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}