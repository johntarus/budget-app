import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";

import useStyles from "./styles";

const Details = ({ title, subheader }) => {
	const classes = useStyles();
	const { total, chartData } = useTransactions(title);
	return (
		<Card className={title === "Income" ? classes.income : classes.expense}>
			<CardHeader title={title} />
			<CardContent>
				<Typography variant="h5">Ksh. {total}</Typography>
				<Doughnut data={chartData} />
			</CardContent>
		</Card>
	);
};

export default Details;