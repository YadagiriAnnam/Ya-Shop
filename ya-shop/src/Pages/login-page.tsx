import { Password } from "@mui/icons-material";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import { use, useState, type ChangeEvent, type FC } from "react";
import { validateUserCreds, type UserCreds } from "../Models/userCreds";
import { useNavigate } from "react-router-dom";



const LoginPage: FC = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnstyle = { margin: '8px 0' };
    const [loginState , setloginState] = useState<UserCreds>({username: null , password: null});
const navigter = useNavigate();
    const  handleLoginOnChange =(e:ChangeEvent<HTMLInputElement>) =>{
        const {name , value} = e.target;
        setloginState((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }
    const handleLogin  =(e:React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        if(validateUserCreds(loginState)){
            alert("Login successful");
            navigter('/home');

        }else{
            alert("Invalid username or password");
        }

    }
    

    return (
        <div>
            <Grid
                container
                justifyContent="center"  // Center horizontally
                alignItems="center"       // Center vertically
               
            >
                <Paper elevation={10} style={paperStyle}>
                    <Grid container direction="column" alignItems="center">
                        <Avatar style={avatarStyle}></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                      <form onSubmit={handleLogin}>
                    <Grid container direction="column"  alignItems="center" spacing={2}>
                      
                    <TextField label='Username' name="username"  onChange={handleLoginOnChange} value={loginState.username} placeholder="Enter username" fullWidth required />
                    <TextField label='Password' name="password" onChange={handleLoginOnChange} value={loginState.password} placeholder="Enter password" type='password' fullWidth required />
                    <Button type='submit' color='primary'   variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                   
                    </Grid>
                     </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default LoginPage;
