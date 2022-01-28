import React, { ReactNode, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { Signin } from '@avetti/storefront.core.signin';
import { Signup } from '@avetti/storefront.core.signup';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Copyright } from '@avetti/storefront.utils.copyright';
export type LoginProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Login({ children }: LoginProps) {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [formMode, setFormMode] = useState('SIGN_IN');

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsSliderOpen(open);
  };

  function handleSetSignInMode() {
    return () => setFormMode('SIGN_IN');
  }

  function handleSetSignUpMode() {
    return () => setFormMode('SIGN_UP');
  }

  const renderTheCorrectForm = (mode) => {
    switch (mode) {
      case 'SIGN_IN':
        return <Signin />;
      case 'SIGN_UP':
        return <Signup />;
      case 'FORGOT_PASSWORD':
        return '3';
      default:
        return '1';
    }
  };
  return (
    <>
      <Button onClick={toggleDrawer(true)}>Open/Close</Button>
      <SwipeableDrawer
        anchor="right"
        open={isSliderOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {renderTheCorrectForm(formMode)}
            <Grid container>
              {formMode === 'SIGN_IN' && (
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              )}
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={formMode === 'SIGN_UP' ? handleSetSignInMode() : handleSetSignUpMode()}
                >
                  {formMode === 'SIGN_UP'
                    ? ' Already have an account? Sign in'
                    : " Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright companyName="DIBIZ Corporation" sx={{ mt: 5 }} align="center" />
        </Container>
      </SwipeableDrawer>
    </>
  );
}
