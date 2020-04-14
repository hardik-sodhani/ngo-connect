import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontWeight: 500
  },
  pos: {
    marginBottom: 12
  }
});

export default function VolunteerOpportunityCard(props) {
  const { ngoSummary } = props;
  console.log('ngoSummary here: ', ngoSummary);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          variant='h4'
          component='h1'
          gutterBottom
        >
          {ngoSummary[0].name}
        </Typography>
        <Typography variant='h6' component='h2'>
          Description: {ngoSummary[0].ngoDescription}
        </Typography>
        <Typography variant='h6' component='h2'>
          Support Needed: {ngoSummary[0].supportDescription}
        </Typography>
        <Typography variant='h6' component='h2'>
          Beneficiaries: {ngoSummary[0].beneficiaries}
        </Typography>
        <Typography variant='h6' component='h2'>
          Location: {ngoSummary[0].location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
