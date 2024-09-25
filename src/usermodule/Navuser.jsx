import { AppBar, Box, Button, Divider, List, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Navuser = () => {
  return (
    <div>
      <AppBar position='static' sx={{backgroundColor:'#00000000'}}>
              <Toolbar >
              <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{color:"black"}}></MenuIcon>
          </IconButton>
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
              <Typography align='left' variant='h6' component="div" sx={{ flexGrow: 1, color:"black"}}>USER DASHBOARD</Typography>
              {/* <Link to='/userdash'>
                      <Button variant='contained'>HOME</Button></Link>&nbsp;
             <Link to='/browser'>
                      <Button variant='contained'>BROWSER JOBS</Button></Link>&nbsp;
             <Link to='/viewappjob'>
                      <Button variant='contained'>VIEW APPLIED JOBS</Button></Link>&nbsp; 
            <Link to='/updateprof'>
                      <Button variant='contained'>UPDATE PROFILE</Button></Link>&nbsp;               */}
                    
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navuser
