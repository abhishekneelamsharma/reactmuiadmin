import React from 'react'
import Header from "../components/Header";
import { Box } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';



const Barcharts = () => {

    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
    ];
    return (
        <>
            <Box my={2} mt={5}>
                <Header title="Bar Chart" subtitle="welcome,this is my bar chart" />
                <Box display="flex" justifyContent={"center"} alignItems={"center"}>
                    <BarChart
                        width={900}
                        height={400}
                        series={[
                            { data: pData, label: 'pv', id: 'pvId' },
                            { data: uData, label: 'uv', id: 'uvId' },
                        ]}
                        xAxis={[{ data: xLabels, scaleType: 'band' }]}

                    />
                </Box>
            </Box>
        </>
    )
}

export default Barcharts