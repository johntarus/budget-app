import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
	return (
		<div style={{ textAlign: "center", padding: "0 10%" }}>
			Try Saying: <br />
			add {isIncome ? "Income " : "Expense "}
			for {isIncome ? "Ksh.10000 " : "Ksh.5000 "}
			in category {isIncome ? "Business " : "House "}
			for {isIncome ? "Monday " : "Tuesday "}
		</div>
	);
};

export default InfoCard;
