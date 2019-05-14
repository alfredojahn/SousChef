import React from 'react'
import './user.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const User = () =>{
    const bull = <span >•</span>;
    return(
        <Card id="carta">
            <CardContent>
                <Typography  color="textSecondary" gutterBottom>
                    Pagina de Usuario
                </Typography>
                <Typography variant="h5" component="h2">
                User{bull}Name </Typography>
                <Typography component="p">
                "No hay amor mas sincero <br/>que el amor a la comida"
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit Username</Button>
            </CardActions>
        </Card>
    )
}

export default User