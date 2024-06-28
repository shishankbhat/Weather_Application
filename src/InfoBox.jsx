/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./InfoBox.css"
// eslint-disable-next-line react/prop-types
export default function InfoBox({Info}){
    const INIT_URL = "https://media.istockphoto.com/id/2148138585/photo/rising-or-setting-sun-with-a-milky-cloudy-sky-colored-orange-to-reddish-by-sahara-dust-with.webp?b=1&s=170667a&w=0&k=20&c=C-kw8HDMmVplmNeMI0GfTGvZHvK0WjaoszAZSbC4zTY="
    
    const HOT_URL = "https://images.unsplash.com/photo-1572339152622-ce5e57956129?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHRlbXBlcmF0dXJlfGVufDB8fDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1687904364304-3fa792cdb55a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB0ZW1wZXJhdHVyZXN8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHRlbXBlcmF0dXJlfGVufDB8fDB8fHww";
    return(
        <div className="InfoBox">

            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {
                        Info.humidity > 70 ? RAIN_URL :
                        Info.temp <= 15 ? COLD_URL :
                        Info.temp > 40 ? HOT_URL :
                        INIT_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {Info.city} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temperature = {Info.temp}&deg;C</p>
                    <p>Humidity = {Info.humidity}</p>
                    <p>MInTemp = {Info.tempMin}&deg;C</p>
                    <p>MaxTemp = {Info.tempMax}&deg;C</p>
                    <p>
                        The weather can be describes as <i> {Info.weather} </i> 
                        and feels like {Info.feelsLike}&deg;C
                    </p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}