import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 800,
    minHeight: 600
  },
  media: {
    height: 300,
    backgroundSize: 'contain'
  },
  content: {
    textAlign: 'center'
  },
  allDesc: {
    margin: '20px',
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    padding: '10px',
    fontSize: '18px'
  }

});

const OneProduct = ({match}) => {
  const classes = useStyles();
  const { items = [] } = useSelector(state => state.cart);
  const id = match.params.id;
  const post = items.find((post) => String(post.id) === String(id)) || {};
  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={post.img}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.desc}
          </Typography>
        </CardContent>
        <p className={classes.allDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          At beatae dolore illo illum laborum magni nesciunt optio sed.
          Adipisci alias aliquam asperiores cupiditate deleniti dolor harum incidunt modi nihil perferendis!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          At beatae dolore illo illum laborum magni nesciunt optio sed.
          Adipisci alias aliquam asperiores cupiditate deleniti dolor harum incidunt modi nihil perferendis!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          At beatae dolore illo illum laborum magni nesciunt optio sed.
          Adipisci alias aliquam asperiores cupiditate deleniti dolor harum incidunt modi nihil perferendis!
        </p>
      <NavLink to='/' className={classes.link}>Back to shop </NavLink>
    </Card>
  )
}

export default OneProduct;
