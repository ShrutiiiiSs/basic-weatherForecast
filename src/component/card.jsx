import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (props) => {
    console.log("props isss", props)
    return(
  <Box sx={{ minWidth: 275, m: 2 }}>
 <Card variant="outlined">
  <React.Fragment >
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        {props.response.location.name}
        {/* delhi */}
      </Typography>
      <Typography variant="h5" component="div">
        temp is {props.response.current.temp_c}
      </Typography>
      
    </CardContent>
    <CardActions>
      <Button size="small">See More</Button>
    </CardActions>
  </React.Fragment>
  </Card>
  </Box>
)
};
export default card


