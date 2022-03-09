import React from 'react';
import { useFormik } from 'formik';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignupForm(){
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const validate = values => {
        const errors = {};
        if(!values.firstName){
            errors.firstName = 'Required';
        }else if(values.firstName.length > 5){
            errors.firstName = 'Must be 5 characters or less';
        }

        if(!values.lastName){
            errors.lastName = 'Required';
        }else if(values.firstName.length > 5){
            errors.lastName = 'Must be 5 characters or less';
        }

        if(!values.phone){
            errors.phone = 'Required';
        }else if(values.phone.length > 10){
            errors.phone = 'Must be 10 characters or less';
        }

        if(!values.email){
            errors.email = 'Required';
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = 'Invalid email address';
        }

        return errors;
    }
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            country: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className="contentForm">
            <Navbar />
            <form onSubmit={formik.handleSubmit}>
                <h1>FORM TEST</h1>
                <div className="field">
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    {formik.errors.firstName ? <div className="errorMessage">{formik.errors.firstName}</div> : null}
                </div>
                <div className="field">
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    {formik.errors.lastName ? <div className="errorMessage">{formik.errors.lastName}</div> : null}
                </div>
                <div className="field">
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                    {formik.errors.phone ? <div className="errorMessage">{formik.errors.phone}</div> : null}
                </div>
                <div className="field">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <div className="errorMessage">{formik.errors.email}</div> : null}
                </div>
                <div className="field">
                    <input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Address"
                        onChange={formik.handleChange}
                        //value={formik.values.email}
                    />
                </div>
                <div className="field">
                    <input
                        id="country"
                        name="country"
                        type="text"
                        placeholder="Country"
                        onChange={formik.handleChange}
                        //value={formik.values.email}
                    />

                </div>

                <button type="submit">Submit</button>
            </form>
            <Footer />
        </div>
    );
}