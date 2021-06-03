import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    marginTop: "5%",
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
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
}));
