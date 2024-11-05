import React from 'react'
import { Box, Typography } from '@mui/material'

const Header = ({ title, subtitle }) => {
    return (
        <>
            <Box >
                <Typography variant="h2" fontWeight={"bold"} >{title}</Typography>
                <Typography variant="body1" color='gray'>{subtitle}</Typography>
            </Box>
        </>
    )
}

export default Header