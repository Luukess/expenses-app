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
                    `${theme.palette.mode === 'dark' ? 'rgb(226, 0, 48, 0.8)' : 'rgb(255, 28, 76, 0.5)'}`,
                    `${theme.palette.mode === 'dark' ? 'rgb(17, 107, 168, 0.8)' : 'rgb(21, 134, 210, 0.5)'}`,
                    `${theme.palette.mode === 'dark' ? 'rgb(218, 155, 0, 0.8)' : 'rgb(255, 186, 18, 0.5)'}`,
                    `${theme.palette.mode === 'dark' ? 'rgb(44, 126, 126, 0.8)' : 'rgb(55, 158, 158, 0.5)'}`,
                    `${theme.palette.mode === 'dark' ? 'rgb(76, 0, 229, 0.8)' : 'rgb(105, 31, 255, 0.5)'}`,
                    `${theme.palette.mode === 'dark' ? 'rgb(204, 102, 0, 0.8)' : 'rgb(255, 127, 0, 0.5)'}`,
                ],
                borderColor: [
                    `${theme.palette.mode === 'dark' ? 'rgb(226, 0, 48, 0.8)' : 'rgb(255, 28, 76, 0.5)'}`,
                    `${theme.palette.mode === 'dark' ? 'rgb(17, 107, 168, 0.8)' : 'rgb(21, 134, 210, 0.5)'}`,
                    `${theme.palette.mode === 'dark' ? 'rgb(218, 155, 0, 0.8)' : 'rgb(255, 186, 18, 0.5)'}`,
                    `${theme.palette.mode === 'dark' ? 'rgb(44, 126, 126, 0.8)' : 'rgb(55, 158, 158, 0.5)'}`,
                    `${theme.palette.mode === 'dark' ? 'rgb(76, 0, 229, 0.8)' : 'rgb(105, 31, 255, 0.5)'}`,
                    `${theme.palette.mode === 'dark' ? 'rgb(204, 102, 0, 0.8)' : 'rgb(255, 127, 0, 0.5)'}`,
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