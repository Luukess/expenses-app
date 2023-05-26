import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import DonutChart from "./components/donut-chart/DonutChart";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { sxStylesSummaryLayout } from "./summaryLayout.style";

const SummaryLayout = () => {

    return (
        <>
            <Box mt={1}>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={6} lg={4} >
                        <Paper sx={sxStylesSummaryLayout.gridPaper} elevation={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="h6" sx={{ fontSize: { xs: '18px', sm: '20px', md: '20px', lg: '20px' } }}>
                                    Wydatki według kategorii
                                </Typography>
                                <IconButton color="primary">
                                    <MoreHorizIcon />
                                </IconButton>
                            </Box>
                            <Box sx={sxStylesSummaryLayout.donutBox}>
                                <DonutChart />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={4} >
                        <Paper sx={sxStylesSummaryLayout.gridPaper} elevation={6}>
                            walets
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={4} >
                        <Paper sx={sxStylesSummaryLayout.gridPaper} elevation={6}>
                            budgets
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};

export default SummaryLayout;