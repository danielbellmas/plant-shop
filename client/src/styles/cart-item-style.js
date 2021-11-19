import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    width: 320,
    borderRadius: "1.5rem",
  },
  media: {
    height: 270,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
