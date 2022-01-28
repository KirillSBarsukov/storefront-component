import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Grid from '@mui/material/Grid';

export type CookieDialogProps = {
  mainText?: string;
  classes: any;
};

const text =
  ' We use cookies for a number of reasons, such as keeping our site reliable and secure,\n' +
  '        remembering your settings, personalising content and ads, providing social media features so\n' +
  '        you can login and share content, and to analyse how our site is used.';

export function CookieDialog({ mainText = text }: CookieDialogProps) {
  const [cookie, setCookie] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let cookieRule = JSON.parse(localStorage.getItem('cookieAcceptance'));
      if (cookieRule && cookieRule.isAccept) {
        setCookie(false);
      } else {
        setCookie(true);
      }
    }
  }, []);

  const cookieAccept = () => {
    return () => {
      if (typeof window !== 'undefined') {
        let consent = {
          date: new Date(),
          consent: 'Manage-Cookie: ON',
          isAccept: true,
        };
        localStorage.setItem('cookieAcceptance', JSON.stringify(consent));
        setCookie(false);
      }
    };
  };

  const action = (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Grid item>
        <Button color="primary">Manage Cookies</Button>
      </Grid>
      <Grid item>
        <Button color="inherit" onClick={cookieAccept()}>
          Accept
        </Button>
      </Grid>
    </Grid>
  );
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={cookie}
      sx={{ maxWidth: 600 }}
    >
      <SnackbarContent message={mainText} action={action} />
    </Snackbar>
  );
}
