import React from 'react';
import './recetas.css'
import pasta from '../img/pasta.jpg';
import camaron from '../img/camarones.jpg';
import arepa from '../img/descarga.jpg';
import image from '../img/filet.jpg';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 140,
  },
  button1:{
    backgroundColor:'white'
  },
  button2:{
    height:'1vh',
    width: '2vw',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    width:'100%'
  },
  title: {
    color: 'white',
    backgroundColor: '#874d63'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

 
 const tileData = [
    {
      img: image,
      title: 'Filet Mignon',
      author: 'author',
    },
    {
        img: pasta,
        title: 'Pasta Carbonara',
        author: 'author',
      },
      {
        img: camaron,
        title: 'Camarones Rebozados',
        author: 'author',
      },
      {
        img: arepa,
        title: 'Arepa de Chicharron',
        author: 'author',
      },
  ];
 
function SingleLineGridList(props) {
  const { classes } = props;


  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
            className={classes.button1}
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <CardActions>
                 <Button  size="small" variant="contained" color="primary" href="/Info">
                   Learn More
                 </Button>
               </CardActions>
              }
            />
          </GridListTile>
          
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
