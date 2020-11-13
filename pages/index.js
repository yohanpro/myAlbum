import { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import classnames from 'classnames';
import _ from 'lodash';
import Router from 'next/router';
import { validateEmail } from 'helpers/utils';
import { signIn, autologin } from 'actions';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    '& input': {
      fontSize: '2rem'
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: '5vh',
    fontSize: '2rem',
    pointerEvents: 'unset',

    '&.disabled': {
      backgroundColor: 'gray',
      pointerEvents: 'none'
    }
  },
  errorText: {
    fontSize: '1.5rem',
    color: 'red'
  }

}));



const SignIn = () => {

  const classes = useStyles();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isBtnActive, setBtnState] = useState(false);
  const [onSubmitError, setError] = useState(false);


  //autologin process
  useEffect(() => {
    const myToken = localStorage.getItem('myToken') || '';
    if (!myToken) return;

    autologin('123')
      .then(result => {
        if (result.code === 200) {
          Router.push('/album');
        }
      });


  }, []);

  const inputHandler = (e) => {
    setError(false);
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };


  // after set Email or password, check submit button is now on active
  useEffect(() => {
    const isValidEmail = validateEmail(email);
    const isPasswordEmpty = _.isEmpty(password);

    if (isValidEmail && !isPasswordEmpty) {
      setBtnState(true);
    } else {
      setBtnState(false);
    }

  });



  const signInHandler = async (e) => {
    e.preventDefault();

    const signInData = {
      email, password
    };
    let signInResult = '';
    try {
      signInResult = await signIn(signInData);
      if (signInResult.code == 200) {
        localStorage.setItem('myToken', signInResult.token);
        Router.push('/album');
      } else {
        console.log(signInResult.message);
        setError(true);
      }
    } catch (e) {
      console.log('signin error', e);
    }
  };


  return (
    <div className="layout">
      <Container className="container-login" component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h3">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={inputHandler}
              error={onSubmitError}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={inputHandler}
              error={onSubmitError}
            />
            {onSubmitError && <h3 className={classes.errorText}>Please Check your information</h3>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classnames(classes.submit, { 'disabled': !isBtnActive })}
              onClick={signInHandler}
            >
              Sign In
            </Button>
          </form>
        </div>

      </Container>
    </div>
  );
};

export default SignIn;