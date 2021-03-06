import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core/";
import RegisterBTN from './components/btn/index'
const useStyles = makeStyles((theme) => ({
  root: {
   display:'flex',
  },
  headings: {
    fontSize: "48px",
    fontWeight: "100",
  },
  subheadings: {
    fontSize: "18px",
    fontWeight: "100",
    marginTop: "5px",
  },
  left: {
    flex: 1,
    paddingBottom:'2vw',
    backgroundColor: "#0D0C3C",
    color: "white",
    fontFamily: "Segoe UI",
    paddingTop: "15px",
    textAlign: "center",
  },
  right: {
    padding:'20px',
    backgroundColor: "#363730",
    color: "white",
    
    fontFamily: "Segoe UI",
    textAlign: "right",
   
    paddingTop: "25px",
    paddingLeft: "2vw",
    paddingRight:'25px'
  },
  description: {
    fontSize: "18px",
    fontWeight: "100",
    marginTop: "5px",
  },
}));

const Top = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid className={classes.left} item xs={12} sm={12} md={4} lg={4}>
        <Box>
          <span className={classes.headings}>
            #apiHacks
            <br />
            
          </span>
          <span className={classes.subheadings}>
            Leverage API First Skills with this
            <br /> impactful mini hackathon.
            <br />25th Nov to 30th Nov 
            <br />   <br />
            <b>You are late :( Hack has started.<br/></b>
          <br/>
          You can still attend our exclusive expert sessions<br/> from Microsoft, Postman, etc<br/> by registering below<br/>
      <br/>  <RegisterBTN/>
          </span>
        </Box>
      </Grid>
      <Grid className={classes.right} item xs={12} sm={12} md={8} lg={8}>
        <Box >
          <span className={classes.description}>
            API first skills help to build scalable software systems or
            serverless architecture. This <b>Mini hackathon</b> will be a step to make
            students industry ready by helping them to build impactful products
            using APIs.
            <br />
            <br />
          
         
              Eligibility:<br/>
              High School, 1st, 2nd and 3rd Year Undergraduate Students based
              in <b>India</b>
          
            <br />
            <br />
            <br />
            Presented By:
            <br />
            <b>
            <span className={classes.headings}>  Tech Phantoms X Innovators' Hub </span>
              <br />
              <span style={{ color: "red" }}>Chandigarh</span> University

            </b>
          </span>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Top;
