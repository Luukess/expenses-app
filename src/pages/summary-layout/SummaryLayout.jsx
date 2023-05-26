import React from "react";
import Grid from '@mui/material/Unstable_Grid2';

const SummaryLayout = () => {

    return (
        <>
            <Grid container spacing={3}>
                <Grid xs={4} sx={{ backgroundColor: 'red' }}>
                    chart
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