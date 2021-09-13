import { Box, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSlice';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
      textDecoration: 'none',
      color: '#fff',
  },
  logo:  {
      color: '#fff',
  },
  closeBtn: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    zIndex: 1,
  }
}));
  const MODE = {
    LOGIN: 'login',
    REGISTER: 'register'
  };
export default function Header() {
  const classes = useStyles();

  const loggedInUser = useSelector(state => state.user.current)
  const isLoggedIn =  !!loggedInUser.id;

  const [open, setOpen] = React.useState(false);

  const [mode,setMode] = useState(MODE.LOGIN);

  const [anchorEl, setAnchorEl] = useState(null);

  //dispatch logout
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const hamdleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <FormatAlignCenterIcon className={classes.menuButton}/>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.logo}>EZ SHOP</Link>
          </Typography>
          {/* <NavLink to="/todo">Todo</NavLink>
          <NavLink to="/album">Album</NavLink>
          <NavLink to="/who">Who</NavLink> */}
          <NavLink className={classes.link} to="/todo">
            <Button color="inherit">Todos</Button>
          </NavLink>
          <NavLink className={classes.link} to="/album">
            <Button color="inherit">Albums</Button>
          </NavLink>
          <NavLink className={classes.link} to="/who">
            <Button color="inherit">Who</Button>
          </NavLink>

          {!isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}

          {isLoggedIn && (
             <IconButton color="inherit" onClick={handleUserClick}>
               <AccountCircle/>
             </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* dropdown */}
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={hamdleLogoutClick}>Logout</MenuItem>
      </Menu>


      <Dialog
      disableBackdropClick
      disableEscapeKeyDown  
      open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
        <IconButton className={classes.closeBtn} onClick={handleClose}>
          <Close/>
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose}></Register>
                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                    Already an account. Login here 
                  </Button>
                </Box>
              </>
            )}
            {mode === MODE.LOGIN && (
              <>
                <Login closeDialog={handleClose}></Login>
                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                    Don't have an account. Register here 
                  </Button>
                </Box>
              </>
            )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
