import React, { useContext } from "react";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import {
	Card,
	CardHeader,
	CardContent,
	Typography,
	Grid,
	Divider,
} from "@material-ui/core";
import { ExpenseTrackerContext } from "../../context/context";
import InfoCard from "../Snackbar/InfoCard";

const Main = () => {
	const classes = useStyles();
	const { balance } = useContext(ExpenseTrackerContext);
	return (
		<Card className={classes.root}>
			<CardHeader
				style={{ textAlign: "center" }}
				title="Expense Tracker"
				subheader="powered by Speechly"
			/>
			<CardContent>
				<Typography align="center" variant="h5">
					Total Balance: Ksh.{balance}
				</Typography>
				<Typography
					variant="subtitle1"
					style={{ lineHeight: "1.5em", marginTop: "20px" }}
				>
					<InfoCard />
				</Typography>
				<Divider className="classes.divider" />
				<Form />
			</CardContent>
			<CardContent className={classes.cardContent}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<List />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Main;
