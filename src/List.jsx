import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import InventoryIcon from '@mui/icons-material/Inventory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
import LoginIcon from '@mui/icons-material/Login';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from "react-router-dom";

export default function NestedList() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const UserPage=()=>{

    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 180, bgcolor: '', marginTop: 1, border: '2px solid rgb(230, 227, 227);',borderTop:'none',borderBottom:'none', minHeight: '100vh' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >

            <ListItemButton>
                <ListItemText primary="Main"  sx={{ fontSize: '4rem !important', color: '#999' }} />
            </ListItemButton>
            <Collapse in='true' timeout="auto" unmountOnExit>
                <ListItemButton sx={{ pl: 2 }}>
                    <DashboardIcon style={{ minWidth: 30 ,fontSize:'1.2rem',color:'violet'}}>
                        <StarBorder style={{ minWidh: 30 }} />
                    </DashboardIcon>
                    <ListItemText primary="DashBoard" style={{color:'#888',fontWeight:'bold'}} />
                </ListItemButton>
            </Collapse>
            <ListItemButton>
                <ListItemText primary="Test" style={{color:'#888',fontWeight:'bold'}} />
            </ListItemButton>
            <Collapse in='true' timeout="auto" unmountOnExit>
                <NavLink component="div" to="/user" disablePadding style={{textDecoration: 'none'}}>
                    <ListItemButton sx={{ pl: 2 ,color:'black'}}>
                        <PersonIcon style={{ minWidth: 30,fontSize:'1.2rem',color:'violet'}}>
                            <StarBorder style={{ minWidh: 30 }} />
                        </PersonIcon>
                        <ListItemText primary="User" sx={{fontSize:'0.8rem' ,border:'none !important',color:'#888',fontWeight:'bold'}}/>
                    </ListItemButton>
                </NavLink>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 2 }}>
                        <ProductionQuantityLimitsIcon style={{ minWidth: 30 ,fontSize:'1.2rem',color:'violet'}}>
                            <StarBorder style={{ minWidh: 30 }} />
                        </ProductionQuantityLimitsIcon>
                        <ListItemText primary="Products" style={{color:'#888',fontWeight:'bold'}}/>
                    </ListItemButton>
                </List>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 2 }}>
                        <CategoryIcon style={{ minWidth: 30 ,fontSize:'1.2rem',color:'violet'}}>
                            <StarBorder style={{ minWidh: 30 }} />
                        </CategoryIcon>
                        <ListItemText primary="Orders" style={{color:'#888',fontWeight:'bold'}}/>
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton>
                <ListItemText primary="Service" style={{color:'#888',fontWeight:'bold'}}/>
            </ListItemButton>
            <Collapse in='true' timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 2 }}>
                        <SettingsSystemDaydreamIcon style={{ minWidth: 30 ,fontSize:'1.2rem',color:'violet'}}>
                            <StarBorder style={{ minWidh: 30 }} />
                        </SettingsSystemDaydreamIcon>
                        <ListItemText primary="System Health" style={{color:'#888',fontWeight:'bold'}}/>
                    </ListItemButton>
                </List>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 2 }}>
                        <LoginIcon style={{ minWidth: 30,fontSize:'1.2rem' ,color:'violet'}}>
                            <StarBorder style={{ minWidh: 30 }} />
                        </LoginIcon>
                        <ListItemText primary="Logs" style={{color:'#888',fontWeight:'bold'}} />
                    </ListItemButton>
                </List>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 2 }}>
                        <SettingsIcon style={{ minWidth: 30 ,fontSize:'1.2rem',color:'violet'}}>
                            <StarBorder style={{ minWidh: 30 }} />
                        </SettingsIcon>
                        <ListItemText primary="Settings" style={{color:'#888',fontWeight:'bold'}}/>
                    </ListItemButton>
                </List>

            </Collapse>
            <ListItemButton>
                <ListItemText primary="User"style={{color:'#888',fontWeight:'bold'}} />
            </ListItemButton>
            <Collapse in='true' timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 2 }}>
                        <AccountCircleIcon style={{ minWidth: 30 ,fontSize:'1.2rem',color:'violet'}}>
                            <StarBorder style={{ minWidh: 30 }} />
                        </AccountCircleIcon>
                        <ListItemText primary="Profile" style={{color:'#888',fontWeight:'bold'}}/>
                    </ListItemButton>
                </List>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 2 }}>
                        <LogoutIcon style={{ minWidth: 30 ,fontSize:'1.2rem',color:'violet'}}>
                            <StarBorder style={{ minWidh: 30 }} />
                        </LogoutIcon>
                        <ListItemText primary="Logout" style={{color:'#888',fontWeight:'bold'}}/>
                    </ListItemButton>
                </List>
            </Collapse>
        </List>

    );
}