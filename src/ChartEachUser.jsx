import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { LineChart } from '@mui/x-charts/LineChart';
import Progrss from './Progrss';
import Avatar from '@mui/material/Avatar';
import logo from './Picture_MCT.jpg';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
    'JAN',
    'FEB',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
];

export default function SimpleAreaChart() {
    return (
        <div style={{display:'flex', marginTop:'2rem'}}>
            <Card sx={{ minWidth: 200, width:'35rem', marginTop: 1, marginLeft: 5,boxShadow: 5 }}>
                <LineChart
                    width={550}
                    height={350}
                    series={[{ data: uData, label: 'User Spending Last 6 Months', area: true, showMark: false,color:'violet'}]}
                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                    sx={{
                        '.MuiLineElement-root': {
                            display: 'none',
                            fill:"black"
                        },
                        '.recharts-line': {  // Select the SVG path element representing the line
                            stroke: 'black',   // Set the stroke color of the line
                          },
                       
                    }}
                   
                />
            </Card>
            <Card sx={{ minWidth: 200, width:'22rem', marginTop: 1, marginLeft: 5,boxShadow: 5 ,textAlign:'center',display: 'flex', flexDirection: 'column', alignItems: 'center',pt:2 }}>
                    <div style={{color:'lightgrey',fontSize:'16px',fontWeight:'bold'}}>Information</div>
                    <br></br>
                    <Avatar alt="Remy Sharp" src={logo} sx={{ width: 90, height: 90 }}/>
                    <br></br>
                    <div> <b style={{color:'grey'}}>Email :</b> test@1234.com</div>
                    <br></br>
                    <div><b style={{color:'grey'}}>Phone :</b> 6666666666</div>
                    <br></br>
                    <div><b style={{color:'grey'}}>Address :</b> 45 XYZ PALLY ACADEMY</div>
                    <br></br>
                    <div><b style={{color:'grey'}}>Country : </b> USA</div>
            </Card>

            
        </div>
    );
}