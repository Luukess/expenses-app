import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import DonutChart from "./components/donut-chart/DonutChart";
import { Box, Paper, Typography } from "@mui/material";
import { sxStylesSummaryLayout } from "./summaryLayout.style";

const SummaryLayout = () => {

    return (
        <>
            <Box mt={1}>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={6} lg={4} >
                        <Paper sx={sxStylesSummaryLayout.gridPaper} elevation={4}>
                            <Typography variant="h6">
                                Wydatki według kategorii
                            </Typography>
                            <Box sx={sxStylesSummaryLayout.donutBox}>
                                <DonutChart />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={4} sx={{ backgroundColor: 'pink' }}>
                        <Paper>
                            walets
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={4} sx={{ backgroundColor: 'yellow' }}>
                        <Paper>
                            budgets
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};

export default SummaryLayout;