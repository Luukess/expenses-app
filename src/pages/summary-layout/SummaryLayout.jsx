import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import DonutChart from "./components/donut-chart/DonutChart";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { sxStylesSummaryLayout } from "./summaryLayout.style";
import BudgetBar from "./components/budget-bar/BudgetBar";
import WalletBar from "./components/wallet-bar/WalletBar";
import GridCaption from "./components/grid-caption/GridCaption";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SummaryLayout = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <>
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={6} lg={4} >
                        <Paper sx={sxStylesSummaryLayout.gridPaper} elevation={6}>
                            <GridCaption caption={`${t('expenses-by-category-caption')}`} onClickEvent={() => navigate('/app/finances')} >
                                <MoreHorizIcon />
                            </GridCaption>
                            <Box sx={sxStylesSummaryLayout.donutBox}>
                                <DonutChart />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={4} >
                        <Paper sx={sxStylesSummaryLayout.gridPaper} elevation={6}>
                            <GridCaption caption={`${t('wallets-caption')}`} onClickEvent={() => navigate('/app/wallets')} >
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
                            <GridCaption caption={`${t('budgets-caption')}`} onClickEvent={() => navigate('/app/planner')}>
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