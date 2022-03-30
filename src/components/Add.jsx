import {
  makeStyles,
  Tooltip,
  Fab,
  Container,
  Modal,
  TextField,
  MenuItem,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Button,
  Snackbar
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 10,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absoulte",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "atuo",
    [theme.breakpoints.up("sm")]: {
      width: "100vh",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
    items: {
      marginBottom: theme.spacing(3),
    },
  },
}));

function Alert(props){
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert,setOpenAlert]=useState(false);
  const handleClose=(event,reason)=>{
      if(reason==="clickaway"){
          return;
      }
      setOpenAlert(false);
  }
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="secondary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoCompltet="off">
            <div className={classes.items}>
              <TextField
                id="standar-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.items}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultvalue="Tell you story.."
                label="Description"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.items}>
              <TextField select label="visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.items}>
              <FormLabel components="legend">Who can Comment ?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premuim)"
                />
              </RadioGroup>
            </div>
            <div className={classes.items}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
             onClick={()=>setOpenAlert(true)} >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} anchorOrigin={{vertical:"bottom",horizontal:"left"}}  autoHideDuration={4000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    This is a success message!
  </Alert>
</Snackbar>
    </>
  );
};
export default Add;
