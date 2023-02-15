import React from 'react';
import {
  useMediaQuery,
} from '@mui/material';
import {MobileHeader} from './MobileHeader'
import { DesktopHeader } from './DesktopHeader';


export const Header = (props: any) => {
  const isTabletOrMobile = useMediaQuery('(max-width:1000px)');

  if (isTabletOrMobile) {
    return (
      <MobileHeader />
    )
  }

  return (
    <DesktopHeader />
  )
};

