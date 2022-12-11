import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const [username, setUsername]=useState();
	const [email, setEmail]=useState();
	const [password, setPassword]= useState();

	const [usernameError, setUsernameError] = useState();
	const[emailError, setEmailError]=useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const navigate=useNavigate();

	const loginUser=async(e)=>{
		e.preventDefault();
		if(!email || email==""){
			setEmailError(true);
		}
		if(!password || password==""){
			setPasswordError(true);
		}
		if (!username || username == "") {
			setUsernameError(true);
		}
		if(emailError||passwordError || usernameError){
			return false;
		}
		const user={
			user_name: username,
			email:email,
			password:password
		};

		let value = await fetch("http://localhost:8888/login",{
			method: "POST",
			body: JSON.stringify(user),
			headers:{
				"Content-Type":"application/json"
			},
		})

		value= await value.json();
		alert("Successfully logged in!");
		localStorage.setItem(
			"userData",
			JSON.stringify({
				name: username,
				email: email,
				id: value.data._id,
				token: value.token
		})
		);	
		if(value.statusCode==401){
			console.log("Unexpected error occurred, try again.");
			return false;
		}
		else{
			if(value.token){
				localStorage.setItem(
					"userData",
					JSON.stringify({
						name: value.user_name,
						email: value.email,
						id: value._id,
						token: value.token
					})
				);
				setUsername("");
				setEmail("");
				setPassword("");
				alert("Successfully logged in!");
				navigate("/");
			}
			else if(!value.data){
				console.log("Credentials don't match. Try again");
			}
			else{
				console.log("User does not exist. Please signup or use another account.");
			}
		}
	}



	return (

		<div className="text-center col-md-4 offset-md-4 col-sm-8 offset-sm-2 col-10 offset-1">
			<form className="form-signin" onSubmit={loginUser}>
				<h1 className="h3 mb-3 font-weight-normal">Welcome back! Please login</h1>

				<label htmlFor="inputUsername" className="sr-only">Username</label>
				<input type="text" id="inputUsername" className="form-control" placeholder="Username" required autofocus value={username} onChange={(value) => {
					setUsername(value.target.value);
				}} />

				<label htmlFor="inputEmail" className="sr-only">Email address</label>
				<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus value={email}
					onChange={(value) => {
						setEmail(value.target.value);
					}} />

				
				<label htmlFor="inputPassword" className="sr-only">Password</label>
				<input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={password}
					onChange={(value) => {
						setPassword(value.target.value);
					}} />

				<div className="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me" /> Remember me
					</label>
				</div>
				<button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>

			</form>
		</div>

	)
}