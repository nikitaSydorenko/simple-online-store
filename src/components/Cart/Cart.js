import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { removeFromCart } from '../../actions/actionCart';


const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    width: '30em',
    margin: '20px'
  },
  media: {
    height: 300,
    backgroundSize: 'contain'
  },
  icon: {
    cursor: 'pointer',
    fontSize: '1.5em'
  },
  removeCart: {
    fontSize: '20px',
    cursor: 'pointer',
    color: 'red'
  }
});

const Cart = () => {
  const classes = useStyles();
  const { addedItems = [] } = useSelector(state => state.cart);
  const dispatch = useDispatch()

  const handleDeleteFromCart = useCallback((id) => () => {

    let removedItemId = addedItems.find(item => item.id === id)
    dispatch(removeFromCart(removedItemId))
  }, [])

  return addedItems.length ?
    (
      addedItems.map(item => {
        return (
          <Card className={classes.root} key={item.id}>
            <CardActionArea>
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
            <Typography color="textPrimary" variant="h5">
              Quantity: {item.quantity}
            </Typography>
            <CardActions>
              <RemoveShoppingCartOutlinedIcon className={classes.removeCart} onClick={handleDeleteFromCart(item.id)}/>
            </CardActions>
          </Card>
        )
      })
    )
    :

    <div>
      <NavLink to='/'>Back to store</NavLink>
      <p>Nothing</p>
    </div>

  return (
    <div className='container'>
      {addedItems.length}
    </div>
  )
}

export default Cart
