import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import DonutChart from "./components/donut-chart/DonutChart";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { sxStylesSummaryLayout } from "./summaryLayout.style";
import BudgetBar from "./components/budget-bar/BudgetBar";
import WalletBar from "./components/wallet-bar/WalletBar";

const SummaryLayout = () => {

    return (
        <>
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={6} lg={4} >
                        <Paper sx={sxStylesSummaryLayout.gridPaper} elevation={6}>
                            <Box sx={sxStylesSummaryLayout.headerContainerGridItem}>
                                <Typography variant="h6" sx={sxStylesSummaryLayout.inscriptionInHeaderContainer}>
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
                            <Box sx={sxStylesSummaryLayout.headerContainerGridItem}>
                                <Typography variant="h6" >
                                    Portfele
                                </Typography>
                                <IconButton color="primary">
                                    <MoreHorizIcon />
                                </IconButton>
                            </Box>
                            <WalletBar />
                            <WalletBar />
                            <WalletBar />
                            <WalletBar />
                            <WalletBar />
                            <WalletBar />
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={4} >
                        <Paper sx={sxStylesSummaryLayout.gridPaper} elevation={6}>
                            <Box sx={sxStylesSummaryLayout.headerContainerGridItem}>
                                <Typography variant="h6" >
                                    Budżety
                                </Typography>
                                <IconButton color="primary">
                                    <MoreHorizIcon />
                                </IconButton>
                            </Box>
                            <BudgetBar />
                            <BudgetBar />
                            <BudgetBar />
                            <BudgetBar />
                            <BudgetBar />
                            <BudgetBar />
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};

export default SummaryLayout;