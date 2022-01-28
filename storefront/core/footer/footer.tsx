import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Copyright } from '@avetti/storefront.utils.copyright';
import '@emotion/react';
import '@emotion/styled';

type FooterIcon = {
  key: number;
  type: string;
  url: string;
};

type FooterLinks = {
  key: number;
  title: string;
  url?: string;
  children?: Array<FooterLinks>;
};

export type FooterProps = {
  logoUrl?: string;
  footerLinks?: Array<FooterLinks>;
  socialIcons?: Array<FooterIcon>;
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: '#ebebeb',
  color: theme.palette.text.secondary,
}));

const imgStyle = {
  width: '60%',
};

const fLinks = [
  {
    key: 1,
    title: 'Quick Links',
    children: [
      {
        key: 1.1,
        title: 'Palm Oil Products',
        url: 'https://google.com',
      },
      {
        key: 1.2,
        title: 'Oleo And Derivatives',
        url: 'https://google.com',
      },
      {
        key: 1.3,
        title: 'Biodiesel Products',
        url: 'https://google.com',
      },
    ],
  },
  {
    key: 2,
    title: 'Help',
    children: [
      {
        key: 2.1,
        title: 'About Us',
        url: 'https://google.com',
      },
      {
        key: 2.2,
        title: 'Cookie Policy',
        url: 'https://google.com',
      },
    ],
  },
  {
    key: 3,
    title: 'Contact Us',
    children: [
      {
        key: 3.1,
        title: 'E-mail : info@dibizglobal.com',
        url: 'https://google.com',
        targetBlank: true,
      },
      {
        key: 3.2,
        title: 'Contact Us',
        url: 'https://google.com',
        targetBlank: true,
      },
    ],
  },
];

const icons = [
  {
    key: 1,
    type: 'facebook',
    url: 'https://facebook.com',
  },
  {
    key: 2,
    type: 'linkedin',
    url: 'https://facebook.com',
  },
  {
    key: 3,
    type: 'twitter',
    url: 'https://facebook.com',
  },
];

const lUrl = 'https://db-preview.avetti.io/static/logo-f578192c5848492e40d4b7e3a352a54b.jpg';

export function Footer({ logoUrl = lUrl, footerLinks = fLinks, socialIcons = icons }: FooterProps) {
  const renderQuickLinks = (arrayOfLinks) => {
    return arrayOfLinks.map((section) => (
      <Grid key={section.key} item xs>
        <Stack spacing={2}>
          <Typography variant="subtitle1" gutterBottom component="div">
            {section.title}
          </Typography>
          {section.children.map((child) => (
            <Link key={child.key} href={child.url} target="_blank">
              {child.title}
            </Link>
          ))}
        </Stack>
      </Grid>
    ));
  };

  const renderSocialIcon = (arrayOfIcons) => {
    if (arrayOfIcons.length === 0) {
      return null;
    }
    return (
      <Stack direction="row" spacing="2">
        {arrayOfIcons.map((icon) => {
          switch (icon.type) {
            case 'facebook':
              return (
                <IconButton key={icon.key} aria-label="facebook" href={icon.url} target="_blank">
                  <FacebookIcon fontSize="large" />
                </IconButton>
              );
            case 'twitter':
              return (
                <IconButton key={icon.key} aria-label="twitter" href={icon.url} target="_blank">
                  <TwitterIcon fontSize="large" />
                </IconButton>
              );
            case 'linkedin':
              return (
                <IconButton key={icon.key} aria-label="linkedin" href={icon.url} target="_blank">
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              );
          }
        })}
      </Stack>
    );
  };

  return (
    <footer>
      <Container component="footer" className={null} maxWidth="xl">
        <Grid container direction="row" justifyContent="space-evenly">
          <Grid item xs={3}>
            <img
              style={imgStyle}
              src={`${logoUrl}?w=10&h=13&fit=crop&auto=format`}
              srcSet={`${logoUrl}?w=13&h=13&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
              alt="as"
            />
            {renderSocialIcon(socialIcons)}
          </Grid>
          {fLinks.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.children.map((item) => (
                  <li key={item}>
                    <Link
                      href={item.url}
                      variant="subtitle1"
                      color="textSecondary"
                      underline="hover"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Item elevation={0}>
        <Container component="footer" className={null} maxWidth="xl">
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item xs={3}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <div>Privacy Policy</div>
                </Grid>
                <Grid item xs={4}>
                  <div>Terms Of Use</div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Copyright companyName="DIBIZ Corporation" />
            </Grid>
          </Grid>
        </Container>
      </Item>
    </footer>
  );
}
