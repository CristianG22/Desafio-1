import React from 'react'
import ItemCount from './ItemCount'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Item({ id, nombre, precio, imagen }) {


    return (
        <>

            <Card key={id} sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={imagen}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {precio}
                    </Typography>
                </CardContent>
                <ItemCount initial={1} stock={20} />
            </Card>

            <br/>
        </>
    )
}
