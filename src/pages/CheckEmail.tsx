import EmailIcon from '@material-ui/icons/Email';
import FilledButton from '../components/Buttons'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import TopSection from '../components/TopSection';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles"
import theme from '../theme';

const useStyles = makeStyles(theme => ({
  root:{
    justifyContent: 'center',
    alignItems:'center',
    position:'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  main: {
    display: 'flex',
    flexDirection: 'row', 
  },
  paper: {
    width: '400px',
    heigth:'100%',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  inputs:{
    display:'flex',
    width: '310px',
    flexDirection: 'column',
    marginLeft: theme.spacing(3.5)
  },
  inputLabel:{
    textAlign:'start'
  },
  submit: {
    marginTop: theme.spacing(3),
    backgroundColor: '#000',
  },
  link: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(3),
    color: '#8687FF',
    textDecoration: 'none'
  },
  linkTwo: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    color: '#8687FF',
    fontSize: '12px',
    textDecoration: 'none'
  },
  footer:{
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    top: '95%',
    left: '33%',
  },
  resetButton:{
    display:'flex',
    flexDirection :'row',
    marginTop: theme.spacing(7),
    justifyContent:'space-between'
  }
}))


 const CheckEmail= ()=>{

    const classes = useStyles()
    
  return(
    <>
    <TopSection/>
    <div className={classes.root}>
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <form className={classes.form}>
        <div className={classes.inputs}>
        <Typography variant= "h6" style={{ textAlign: 'start', marginBottom: theme.spacing(2), color:'white'}}> Check your email</Typography>
              <Typography variant="body1" style={{color:'white', fontSize: '12px', marginTop: theme.spacing(1.5), textAlign: 'start'}}>
              Reset link to hjkim@cochlear.ai. Didn’t receive it? You might have signed up with a different email address.
              </Typography>
        </div>
         
         <div className={classes.resetButton}>
          <Link component={RouterLink} to="register" className={classes.link}> 
            Back to login page
          </Link>
          <FilledButton
            type="submit"
            fullWidth
            variant="contained"
            style={{width:'199px',  height: '41px', borderRadius: '0px'}}
          >
            Resend Email
          </FilledButton>
        </div>
        </form>
      </Paper>
      
      <img  src= { `https://picsum.photos/id/${3}/400/400`} alt='login_image' style={{height: '400px', marginLeft: theme.spacing(5)}}/>
    </main>
    </div>

    
    <div className={classes.footer}>
    <Link component={RouterLink} to="register">
      <Typography variant="body1" style={{color:'white', fontSize: '12px', marginLeft: theme.spacing(10)}}>
            Terms of Service
      </Typography>
    </Link>
    <Link component={RouterLink} to="register">
    <Typography variant="body1" style={{color:'white', fontSize: '12px', marginLeft: theme.spacing(10)}}>
           Privacy
    </Typography>
    </Link>
    <Link component={RouterLink} to="register">
    <Typography variant="body1" style={{color:'white', fontSize: '12px', marginLeft: theme.spacing(10)}}>
           Contact us
    </Typography>
    </Link>
    </div>
    </>
        )
}
export default CheckEmail;