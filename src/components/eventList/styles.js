import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  list: {
    height: "50vh",
    padding: "16px",
    overflow: "auto",
    position: "relative",
  },
  emptyList: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
});

export default useStyles;
