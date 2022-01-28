import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Link from '@mui/material/Link';
import '@emotion/styled';
import '@emotion/react';

export interface CopyrightProps extends TypographyProps {
  websiteUrl?: string;
  companyName: string;
}

export function Copyright({
  websiteUrl = `${location.protocol}//${location.hostname}`,
  companyName = 'Starter Company',
  ...props
}: CopyrightProps) {
  const fullYear = new Date().getFullYear();

  return (
    <Typography variant="body2" color="text.secondary" {...props}>
      {'Copyright © '}
      {fullYear}
      <Link color="inherit" href={websiteUrl}>
        {companyName}
      </Link>
      {`.  All Rights Reserved`}
    </Typography>
  );
}
