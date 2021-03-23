import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { addToCart } from '../../actions/actionCart';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    width: '30em'
  },
  media: {
    height: 300,
    backgroundSize: 'contain'
  },
  cards: {
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    gap: '15px',
  },
  icon: {
    cursor: 'pointer',
    fontSize: '1.5em'
  },
  actionArea: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      textDecoration: 'none',
    }
  },

});

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    items = [],
    addedItems = [],
    total
  } = useSelector(state => state.cart);

  const handleAddToCart = useCallback((id) => () => {
    let addedItem = items.find(item => item.id === id)
    let existed_item = addedItems.find(item => id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
    } else {
      addedItem.quantity = 1;
      let newTotal = total + addedItem.price;
      dispatch(addToCart(addedItem));
    }

  }, [addedItems, items, total]);

  return (
    <div className={classes.cards}>
      {items.map((item) => {

        return (
          <Card className={classes.root} key={item.id}>
            <NavLink to={`/product/${item.id}`}>
              <CardActionArea className={classes.actionArea}>
                <CardMedia
                  className={classes.media}
                  image={item.img}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.desc}
                  </Typography>
                  <Typography>
                    Price: {item.price}$
                  </Typography>
                </CardContent>
              </CardActionArea>
            </NavLink>
            <CardActions>
              <Button size="small" color="primary">
                <NavLink to={`/product/${item.id}`}>More</NavLink>
              </Button>
              <AddShoppingCartIcon className={classes.icon}
                                   onClick={handleAddToCart(item.id)}/>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};
export default Home;
