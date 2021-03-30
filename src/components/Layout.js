import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Searchbox from './Searchbox';
import Header from './Header';
const useStyles = makeStyles((theme) => ({

  icon: {
    marginRight: theme.spacing(2),
  },
  cntr: {
    marginTop: '5%'
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(9),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  h5: {
    fontSize: "16px",
    color: "rgb(0 0 0 / 65%)"
  },
  h2: {
    fontSize: "2.75rem",
    fontWeight: "300",
    lineHeight: "1.2",
    letterSpacing: "-0.00833em",
    color: "rgb(0 0 0 / 65%)"
  }
}));
export default function Layout() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      {/**IMPORTED Searchbox FROM COMPONENTS FOLDER */}
      <main className={classes.cntr}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm" >
            <Typography className={classes.h2} color="textPrimary" gutterBottom>
              ABC Company
                </Typography>
            <Typography className={classes.h5}>
              ABC is a search-driven BI company. Search easily and quickly is essential to ABC’s success.
                <Searchbox />
            </Typography>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}