import React from 'react';
import './recetas.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import pasta from './pasta.jpg';
import camaron from './camarones.jpg';
import arepa from './descarga.jpg';
import filet from './filet.jpg';


const styles = {
    card: {
      maxWidth: 345,
      height: 360,
    },
    media: {
        objectFit: 'cover',
        height: 130,
    },

  };

  function MediaCard(props) {
    const { classes } = props;
    return (
        <div className="supercontainer">
        <div class="grid-container">
          <div class="item1" id="cartica">
            <div className="container">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={arepa}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
            </div>
          </div>

        <div class="item2" id="cartica">
          <div className="container">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                component="img"
                className={classes.media}
                image={camaron}
                title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
            </div>
          </div>

        <div class="item3" id="cartica">
        <div className="container">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              image={filet}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        </div>
        </div>

        <div class="item4" id="cartica">
        <div className="container">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
            component="img"
              className={classes.media}
              image={pasta}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        </div>
        </div>
        </div>
        </div>
       
      );
    }
    
    MediaCard.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    
    export default withStyles(styles)(MediaCard);