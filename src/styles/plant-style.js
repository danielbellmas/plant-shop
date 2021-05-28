import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    width: "85%",
    margin: "auto",
    boxShadow: "0.1rem 0.2rem 0.5rem",
  },
  media: {
    height: "40vh",
    paddingTop: "56.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));
