import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import DonutChart from "./components/donut-chart/DonutChart";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { sxStylesSummaryLayout } from "./summaryLayout.style";
import BudgetBar from "./components/budget-bar/BudgetBar";
import WalletBar from "./components/wallet-bar/WalletBar";
import GridCaption from "./components/grid-caption/GridCaption";

const SummaryLayout = () => {

    return (
        <>
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={6} lg={4} >
                        <Paper sx={sxStylesSummaryLayout.gridPaper} elevation={6}>
                            <GridCaption caption={'Wydatki według kategorii'}>
                                <MoreHorizIcon />
                            </GridCaption>
                            <Box sx={sxStylesSummaryLayout.donutBox}>
                                <DonutChart />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={4} >
                        <Paper sx={sxStylesSummaryLayout.gridPaper} elevation={6}>
                            <GridCaption caption={'Portfele'}>
                                <MoreHorizIcon />
                            </GridCaption>
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
                            <GridCaption caption={'Budżety'}>
                                <MoreHorizIcon />
                            </GridCaption>
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