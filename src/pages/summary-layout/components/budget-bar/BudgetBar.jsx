import { LinearProgress, Typography } from "@mui/material";
import React from "react";
import { sxStylesBudgetBar } from "./budgetBar.styles";
import { Box } from "@mui/system";

const BudgetBar = () => {
    return (
        <>
            <Box sx={{ padding: '10px 0px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography>
                        Name sdsdsdsdsd sdsdsdsdsdsdsd
                    </Typography>
                    <Typography>
                        1234 zł
                    </Typography>
                </Box>
                <LinearProgress variant="determinate" value={50} sx={sxStylesBudgetBar.budgetBar} />
            </Box>
        </>
    );
};

export default BudgetBar;