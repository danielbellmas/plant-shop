import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    marginTop: "3%",
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    "&::after": {
      content: "''",
      background: "rgba(33, 107, 101, 0.7)",
      width: "13rem",
      height: "0.5rem",
      borderRadius: "0.5rem",
      placeItems: "center",
    },
  },
  container: {
    display: "grid",
    placeItems: "center",
    marginBottom: "2rem",
    height: "fit-content",
  },
  emptyButton: {
    minWidth: "150px",
    margin: "1rem",
    marginTop: 0,
  },
  checkoutButton: {
    minWidth: "150px",
    margin: "1rem",
    marginTop: 0,
  },
  continueButton: {
    minWidth: "150px",
    margin: "1rem",
    marginTop: 0,
  },
  buttons: {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "3%",
    width: "100%",
    justifyContent: "space-evenly",
  },
}));
