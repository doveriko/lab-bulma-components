import React from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

function Signup() {
    return (
        <div>

        <Navbar />

        <FormField label="Name" type="text" placeholder="Enter your name" />
        <FormField label="Email" type="email" placeholder="Enter your e-mail" />
        <FormField label="Password" type="password" placeholder="Enter your password" />

        <CoolButton className="button is-warning is-normal">Submit</CoolButton>

        </div>
    )
}

export default Signup;