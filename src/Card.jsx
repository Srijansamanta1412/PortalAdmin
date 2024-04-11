import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard() {
    return (
        <>
            <Card sx={{ minWidth: 207, maxHeight: 160, marginTop: 1, marginLeft: 5 ,borderRadius:3,boxShadow:8}}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 ,fontWeight:'bold' }} color="rgb(160, 160, 160)" gutterBottom>
                        <div style={{display:'flex',justifyContent: 'space-between'}}>
                        USERS
                        <div style={{align:"right",color:'green'}}>^ 20%</div>
                        </div>
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ mt: 1 ,fontSize:30,fontWeight:300,paddingBottom:0}}>
                        100
                    </Typography>
                    
                </CardContent>
                <CardActions sx={{paddingTop:0,display:'flex',justifyContent: 'space-between'}}>
                    
                    <div size="small" style={{color:'blue'}}>Learn More</div>
                    
                    <AccountBalanceRoundedIcon  style={{align:'right',color:'red'}}/>
                    
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 207, maxHeight: 160, marginTop: 1, marginLeft: 5 ,borderRadius:3,boxShadow:8}}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 ,fontWeight:'bold' }} color="rgb(160, 160, 160)" gutterBottom>
                        <div style={{display:'flex',justifyContent: 'space-between'}}>
                        ORDERS
                        <div style={{align:"right",color:'green'}}>^ 20%</div>
                        </div>
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ mt: 1 ,fontSize:30,fontWeight:300,paddingBottom:0}}>
                        100
                    </Typography>
                    
                </CardContent>
                <CardActions sx={{paddingTop:0,display:'flex',justifyContent: 'space-between'}}>
                    
                    <div size="small" style={{color:'blue'}}>Learn More</div>
                    
                    <AccountBalanceRoundedIcon  style={{align:'right',color:'goldenrod'}}/>
                    
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 207, maxHeight: 160, marginTop: 1, marginLeft: 5 ,borderRadius:3,boxShadow:8}}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 ,fontWeight:'bold' }} color="rgb(160, 160, 160)" gutterBottom>
                        <div style={{display:'flex',justifyContent: 'space-between'}}>
                        EARNINGS
                        <div style={{align:"right",color:'green'}}>^ 20%</div>
                        </div>
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ mt: 1 ,fontSize:30,fontWeight:300,paddingBottom:0}}>
                        100
                    </Typography>
                    
                </CardContent>
                <CardActions sx={{paddingTop:0,display:'flex',justifyContent: 'space-between'}}>
                    
                    <div size="small" style={{color:'blue'}}>Learn More</div>
                    
                    <AccountBalanceRoundedIcon  style={{align:'right',color:'green'}}/>
                    
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 207, maxHeight: 160, marginTop: 1, marginLeft: 5 ,borderRadius:3,boxShadow:8}}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 ,fontWeight:'bold' }} color="rgb(160, 160, 160)" gutterBottom>
                        <div style={{display:'flex',justifyContent: 'space-between'}}>
                        BALANCE
                        <div style={{align:"right",color:'green'}}>^ 20%</div>
                        </div>
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ mt: 1 ,fontSize:30,fontWeight:300,paddingBottom:0}}>
                        100
                    </Typography>
                    
                </CardContent>
                <CardActions sx={{paddingTop:0,display:'flex',justifyContent: 'space-between'}}>
                    
                    <div size="small" style={{color:'blue'}}>Learn More</div>
                    
                    <AccountBalanceRoundedIcon  style={{align:'right',color:'violet'}}/>
                    
                </CardActions>
            </Card>
        </>
    );
}