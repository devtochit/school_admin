import React from "react";
import { withStyles, MenuItem } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import { teal, grey } from "@material-ui/core/colors";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  primaryColor: {
    color: teal[500]
  },
  secondaryColor: {
    color: grey[700]
  },

  padding: {
    padding: 0
  },
  mainHeader: {
    backgroundColor: grey[100],
    padding: 20,
    alignItems: "center"
  },
  mainContent: {
    padding: 40
  },
  secondaryContainer: {
    padding: "20px 25px",
    backgroundColor: grey[200]
  }
});
const countries = [
  {
    value: "USA",
    label: "USA"
  },
  {
    value: "EUR",
    label: "EUR"
  },
  {
    value: "BTC",
    label: "BTC"
  },
  {
    value: "JPY",
    label: "JPY"
  }
];

function WireInfo(props) {
  const { classes, open, onClose } = props;
  const [values, setValues] = React.useState({
    shipping: "Cat in the Hat",
    country: "",
    city: "",
    state: "",
    postalCode: "",
    address: ""
  });

  return (
    <Dialog
      className={classes.root}
      fullWidth
      maxWidth="md"
      open={true}
      onClose={() => onClose("wireModal")}
    >
      <DialogContent className={classes.padding}>
        <Grid container>
          <Grid item xs={8}>
            <Grid container direction="row" className={classes.mainHeader}>
              <Grid item xs={8}>
                <Typography className={classes.primaryColor} variant="h5">
                  Ship To My Address
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  className={classes.secondaryColor}
                  variant="subtitle1"
                  align="right"
                >
                  Buyer Shipping Info
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              className={classes.mainContent}
              spacing={1}
            >
              <Grid item xs={10}>
                <TextField
                  style={{ marginBottom: 20 }}
                  fullWidth
                  select
                  margin="dense"
                  variant="outlined"
                  label="Shipping Presets"
                  defaultValue="None"
                  id="shipping-presets"
                >
                  <MenuItem>None Present</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  style={{ marginTop: 20 }}
                  label="Country"
                  fullWidth
                  select
                  variant="outlined"
                  value={values.country}
                  id="country"
                  margin="dense"
                  helperText="Please select your country"
                >
                  {countries.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="City"
                  id="city"
                />
              </Grid>
              <Grid item xs={7}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="State/Province"
                  id="state-province"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  //fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Postal Code"
                  id="postal-code"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Street Address"
                  id="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  multiline
                  rows="5"
                  variant="outlined"
                  label="Additional Info"
                  id="additional-info"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} className={classes.secondaryContainer}>
            <Grid container>
              <Grid item xs={12} align="right" className={classes.padding}>
                <IconButton
                  edge="start"
                  align="right"
                  color="inherit"
                  aria-label="Close"
                  style={{ padding: 8 }}
                  //className={classes.padding}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} align="center">
                <Typography className={classes.primaryColor} variant="h5">
                  Seller Shipping From
                </Typography>
              </Grid>
              <Grid container style={{ paddingTop: 20 }}>
                <Grid item xs={2}>
                  <Icon className={classes.primaryColor}>location_on</Icon>
                </Grid>
                <Grid item xs={10}>
                  <Typography className={classes.secondaryColor}>
                    36 BAOSHAN JIUCUN BAOSHAN DISTRICT{" "}
                    <strong>201900 Shanghai China</strong>
                  </Typography>
                </Grid>
              </Grid>
              <Grid container style={{ paddingTop: 10, alignItems: "center" }}>
                <Grid item xs={2}>
                  <Icon className={classes.primaryColor}>person</Icon>
                </Grid>
                <Grid item align="left" xs={3}>
                  <Typography
                    variant="caption"
                    className={classes.secondaryColor}
                  >
                    Seller
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography align="right" className={classes.secondaryColor}>
                    <strong>Seller Company</strong>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className="mt-auto">
              <Grid item container ju>
                <Grid item xs={12}>
                  <Button>Cancel</Button>
                </Grid>
                <Grid item xs={12}>
                  <Button>SAVE</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(styles)(WireInfo);
