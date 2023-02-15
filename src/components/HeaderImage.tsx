import React from 'react'
import {useMediaQuery} from '@mui/material'

export const HeaderImage = () => {
    const isTabletOrMobile = useMediaQuery('(max-width:1000px)');

    return (
        <div style={{paddingLeft: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
            <img src="https://res.cloudinary.com/dgpuwpmjk/image/upload/v1675832253/abi/abi-logo_ipvde7.png" alt="Australian Beef Initiative logo" style={{width: isTabletOrMobile ? 150 : 300}}/>
        </div>
    )
}