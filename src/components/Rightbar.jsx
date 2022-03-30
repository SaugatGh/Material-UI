import { makeStyles } from "@material-ui/core";
import {
  Container,
  Typography,
  Avatar,
  ImageListItem,
  ImageList,
  Link,
  Divider,
} from "@material-ui/core";
import AvatarGroup from "@mui/material/AvatarGroup";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageList from "@mui/material/ImageList";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    position:"sticky",
    top:0 ,
  },
    title: {
      fontSize: 16,
      fontWeight: 500,
      color: "black",
    
    },
  
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));
const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: "20px" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/8.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList
        sx={{ width: 500, height: 450 }}
        cols={2}
        rowHeight={100}
        style={{ marginBOttom: 20 }}
      >
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=248&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom variant="body2">
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>

      <Link href="#" className={classes.link} variant="body2">
        Movie
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Games
      </Link>
      <Divider flexItem style={{marginBottom:10}}/>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
    </Container>
  );
};
export default Rightbar;
