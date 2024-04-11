import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.jsx';
import List from './List.jsx';
import Card from './Card.jsx';
import Chart from './Chart.jsx';
import HomeTable from './HomeTable.jsx';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

function App() {
  return (
    <div style={{}}>
    <Navbar/>
    <div style={{display:'flex'}}>
    <List />
    <div style={{marginTop:'30px',marginLeft:'auto',marginRight:'auto'}}>
    <Stack direction="column" spacing={2} >
      <DemoPaper square={false} elevation={3} style={{width:'73vw',maxHeight:20,color:'lightgrey',fontSize:'20px',fontWeight:'bold'}}>Add New User</DemoPaper>
      <DemoPaper square={false} elevation={3} style={{width:'73vw',height:'auto',color:'lightgrey',fontSize:'20px',fontWeight:'bold',display:'flex',flexDirection:'column',paddingTop:'50px',paddingBottom:'50px'}}><TextField id="standard-basic" label="Name" variant="standard" />
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Phone" variant="standard" />
      <TextField id="standard-basic" label="Address" variant="standard" />
      <Button variant="" sx={{color:'white',backgroundColor:'teal',padding:1,maxWidth:'10rem',mt:3}}>Submit</Button>
      </DemoPaper>
    </Stack>
    </div>
    </div>
    </div>
  );
}

export default App;
