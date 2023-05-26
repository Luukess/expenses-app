import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import DonutChart from "./components/donut-chart/DonutChart";

const SummaryLayout = () => {

    return (
        <>
            <Grid container spacing={3}>
                <Grid xs={4} sx={{ backgroundColor: 'red' }}>
                    <DonutChart />
                </Grid>
                <Grid xs={4} sx={{ backgroundColor: 'pink' }}>
                    walets
                </Grid>
                <Grid xs={4} sx={{ backgroundColor: 'yellow' }}>
                    budgets
                </Grid>

            </Grid>
        </>
    );
};

export default SummaryLayout;