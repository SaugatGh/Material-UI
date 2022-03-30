import { makeStyles } from "@material-ui/core";
import {

  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  CardActions,Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: { height: "250px",
[theme.breakpoints.down("sm")]:{
  height:150,
} },
  card:{
      marginBottom:theme.spacing(5),
  }
}));
const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Typography variant="h4" color="secondary">The Land Of Wano</Typography>
        <CardMedia
          className={classes.media}
          image="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/11/Wano-country-one-piece.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">My First Post</Typography>
        </CardContent>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          dignissimos velit quod magni sint a eius, obcaecati molestias
          doloremque voluptates?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          dignissimos velit quod magni sint a eius, obcaecati molestias
          doloremque voluptates?
        </Typography>
      </CardActionArea>
      <CardActions>
          <Button size="small" color="primary">Share </Button>
          <Button size="small" color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export default Post;
