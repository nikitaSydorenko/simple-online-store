import React from "react";
import Grid from '@material-ui/core/Grid';
import {useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        width: '30em'
    },
    media: {
        height: 300,
    },
    cards: {
        display: "grid",
        gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
        gap: '15px',

    }
});


const Home = () => {
    const classes = useStyles();
    const items = useSelector(state => state.cart.items);

    return (
       <div className={classes.cards}>
            {items.map((item) => {
                return (
                        <Card className={classes.root}>
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
                            <CardActions>

                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                )
            })}
       </div>
    )
}

export default Home;
