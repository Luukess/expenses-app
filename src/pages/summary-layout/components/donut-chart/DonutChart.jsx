import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTheme } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {

    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down('sm'));

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    `${theme.palette.mode === 'dark' ? '#e20030' : '#ff1c4c'}`,
                    `${theme.palette.mode === 'dark' ? '#116ba8' : '#1586d2'}`,
                    `${theme.palette.mode === 'dark' ? '#da9b00' : '#ffba12'}`,
                    `${theme.palette.mode === 'dark' ? '#2c7e7e' : '#379e9e'}`,
                    `${theme.palette.mode === 'dark' ? '#4c00e5' : '#691fff'}`,
                    `${theme.palette.mode === 'dark' ? '#cc6600' : '#ff7f00'}`,
                ],
                borderColor: [
                    `${theme.palette.mode === 'dark' ? '#e20030' : '#ff1c4c'}`,
                    `${theme.palette.mode === 'dark' ? '#116ba8' : '#1586d2'}`,
                    `${theme.palette.mode === 'dark' ? '#da9b00' : '#ffba12'}`,
                    `${theme.palette.mode === 'dark' ? '#2c7e7e' : '#379e9e'}`,
                    `${theme.palette.mode === 'dark' ? '#4c00e5' : '#691fff'}`,
                    `${theme.palette.mode === 'dark' ? '#cc6600' : '#ff7f00'}`,
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                position: media ? 'bottom' : 'right',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                }
            },
            border: {
                display: false
            },
        },
        maintainAspectRatio: false
    }

    return (
        <>
            <Doughnut data={data} options={options} />
        </>
    );
};

export default DonutChart;