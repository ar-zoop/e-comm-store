import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup=() =>{
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const [street, setStreet]= useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry]= useState();
    const [pincode, setPincode] = useState();

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [mobileNumberError, setMobileNumberError] = useState(false);
    const [streetError, setStreetError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [stateError, setStateError] = useState(false);
    const [countryError, setCountryError] = useState(false);
    const [pincodeError, setPincodeError] = useState(false);

    const navigate = useNavigate();

    const signupUser = async (e) => {
        e.preventDefault();
        if (!name || name == "") {
            setNameError(true);
        }
        if (!email || email == "") {
            setEmailError(true);
        }
        if (!password || password == "") {
            setPasswordError(true);
        }
        if (!mobileNumber || mobileNumber == "") {
            setMobileNumberError(true);
        }
        if (!street || street == "") {
            setStreetError(true);
        }
        if (!city || city == "") {
            setCityError(true);
        }
        if (!state || state == "") {
            setStateError(true);
        }
        if (!country || country == "") {
            setCountryError(true);
        }
        if (!pincode || pincode == "") {
            setPincodeError(true);
        }
        if (nameError || emailError || passwordError || mobileNumberError || streetError ||cityError || stateError || countryError || pincodeError) {
            return false; 
        }
        const user = {
            user_name: name,
            email: email,
            password: password,
            mobile_number: mobileNumber,
            address:{
                street: street,
                city: city,
                state: state,
                country: country,
                pincode: pincode
            }
        };
       
        let value = await fetch("http://localhost:8888/signup", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        })
        
        value = await value.json();
        
        if(value.statusCode == 401){
            alert("status=401");
            console.log("Unexpected error occurred, try again.");
            return false;
        }
        else if(value.statusCode==200 && !value.token){
            alert("User already exists. Please login");
            navigate("/login");
            return false;
        }        
        else{
            localStorage.setItem(
                "userData",
                JSON.stringify({
                    name: value.data.user_name,
                    email: value.data.email,
                    id: value.data._id,
                    token: value.token
                })
            );

            setName("");
            setEmail("");
            setPassword("");
            setMobileNumber("");
            setStreet("");
            setCity("");
            setState("");
            setCountry("");
            setPincode("");

            alert("Account created!");
            navigate("/");
        } 

    };

    return (
        <div className="text-center col-md-4 offset-md-4 col-sm-8 offset-sm-2 col-10 offset-1">
            <form className="form-signin" onSubmit={signupUser}>
                <h1 className="h3 mb-3 font-weight-normal">Welcome! Please sign up</h1>
                
                <label htmlFor="inputEmail" className="sr-only" style={
                    emailError? { 'color': 'red' } : { 'color': 'black' }
                }>Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus value={email}
                    onChange={(value) => {
                        setEmail(value.target.value);
                    }} />

                
                <label htmlFor="inputUsername" className="sr-only" style={
                    nameError ? { 'color': 'red' } : { 'color': 'black' }
                }>Username
                </label>
                <input type="text" id="inputUsername" className="form-control" placeholder="Username" required autofocus value={name} onChange={(value) => {
                        setName(value.target.value);
                    }} />

                <label
                    className="form-label"
                    htmlFor="form3Example4cd"
                    style={
                        mobileNumberError ? { 'color': 'red' } : { 'color': 'black' }
                    }
                >
                    Mobile Number
                </label>
                <input
                    placeholder="Mobile Number"
                    type="number"
                    id="form3Example4cd"
                    className="form-control"
                    value={mobileNumber}
                    onChange={(value) => {
                        setMobileNumber(value.target.value);
                    }}
                />

                <label className="sr-only">Address</label>
                <label htmlFor="inputStreet" className="sr-only" style={
                    streetError ? { 'color': 'red' } : { 'color': 'black' }
                }>Street</label>
                <input type="text" id="inputStreet" className="form-control" placeholder="Street" required autofocus value={street} onChange={(value) => {
                    setStreet(value.target.value);
                }} />

                <label htmlFor="inputCity" className="sr-only" style={
                    cityError ? { 'color': 'red' } : { 'color': 'black' }
                }>City</label>
                <input type="text" id="inputCity" className="form-control" placeholder="City" required autofocus value={city} onChange={(value) => {
                    setCity(value.target.value);
                }} />

                <label htmlFor="inputState" className="sr-only" style={
                    stateError ? { 'color': 'red' } : { 'color': 'black' }
                }>State</label>
                <input type="text" id="inputState" className="form-control" placeholder="State" required autofocus value={state} onChange={(value) => {
                    setState(value.target.value);
                }} />

                <label htmlFor="inputCountry" className="sr-only" style={
                    countryError ? { 'color': 'red' } : { 'color': 'black' }
                }>Country</label>
                <input type="text" id="inputCountry" className="form-control" placeholder="Country" required autofocus value={country} onChange={(value) => {
                    setCountry(value.target.value);
                }} />

                <label htmlFor="inputPincode" className="sr-only" style={
                    pincodeError ? { 'color': 'red' } : { 'color': 'black' }
                }>PinCode</label>
                <input type="text" id="inputStreet" className="form-control" placeholder="Street" required autofocusvalue={pincode} onChange={(value) => {
                    setPincode(value.target.value);
                }} />

                <label htmlFor="inputPassword" className="sr-only" style={
                    passwordError ? { 'color': 'red' } : { 'color': 'black' }
                }>Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={password}
                    onChange={(value) => {
                        setPassword(value.target.value);
                    }} />

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

            </form>
        </div>
    );
};