import React from 'react'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme';
import Grid from '@mui/material/Grid2';
import DiamondIcon from '@mui/icons-material/Diamond';

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
            <Box my={2} mt={6}>
                <Grid container spacing={2}>
                    <Grid size={{xs:12,sm:6,lg:3}}>
                        <Box display={"flex"} justifyContent={"space-between"} backgroundColor={colors.primary[400]} p={2} borderRadius={1}>
                            <Box>
                                <Typography variant="body1" color="gray">
                                    Category
                                </Typography>
                                <Typography variant='h2' fontWeight={"bold"}>
                                    67
                                </Typography>
                            </Box>

                            <DiamondIcon sx={{
                                fontSize: "40px",
                                margin: "auto 0",
                                color:colors.greenAccent[400],
                            }} />

                        </Box>
                    </Grid>
                    <Grid size={{xs:12,sm:6,lg:3}}>
                        <Box display={"flex"} justifyContent={"space-between"} backgroundColor={colors.primary[400]} p={2} borderRadius={1}>
                            <Box>
                                <Typography variant="body1" color="gray">
                                    Category
                                </Typography>
                                <Typography variant='h2' fontWeight={"bold"}>
                                    67
                                </Typography>
                            </Box>

                            <DiamondIcon sx={{
                                fontSize: "40px",
                                margin: "auto 0",
                                color: colors.greenAccent[400],
                            }} />

                        </Box>
                    </Grid>
                    <Grid size={{xs:12,sm:6,lg:3}}>
                        <Box display={"flex"} justifyContent={"space-between"} backgroundColor={colors.primary[400]} p={2} borderRadius={1}>
                            <Box>
                                <Typography variant="body1" color="gray">
                                    Category
                                </Typography>
                                <Typography variant='h2' fontWeight={"bold"}>
                                    67
                                </Typography>
                            </Box>

                            <DiamondIcon sx={{
                                fontSize: "40px",
                                margin: "auto 0",
                                color: colors.greenAccent[400],
                            }} />

                        </Box>
                    </Grid>
                    <Grid size={{xs:12,sm:6,lg:3}}>
                        <Box display={"flex"} justifyContent={"space-between"} backgroundColor={colors.primary[400]} p={2} borderRadius={1}>
                            <Box>
                                <Typography variant="body1" color="gray">
                                    Category
                                </Typography>
                                <Typography variant='h2' fontWeight={"bold"}>
                                    67
                                </Typography>
                            </Box>

                            <DiamondIcon sx={{
                                fontSize: "40px",
                                margin: "auto 0",
                                color: colors.greenAccent[400],
                            }} />

                        </Box>
                    </Grid>
                    
                </Grid>
            </Box>
        </>
    )
}

export default Dashboard