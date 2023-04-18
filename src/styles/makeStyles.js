import { makeStyles } from "tss-react/mui";

const globalStyles = makeStyles()({
  center: {
    display: "flex",
    justifyContent: "center",
    alighItems: "center",
  },
  border: {
    border: "0.1em solid black",
  },
});

export default globalStyles;
