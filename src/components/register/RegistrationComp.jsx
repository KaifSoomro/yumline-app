import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRegistered } from "../../features/authSlice";
import LoadingComp from "../LoadingComp";
import backgroundImage from "../../assets/background-image.webp";
import biryaniImage from "../../assets/biryani-image.webp";

const RegistrationComp = () => {

    const { isLoading } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const initialValues = {
        name:"",
        email:"",
        password:"",
        userRole:""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Username is required."),
        email: Yup.string().required("Email is required."),
        password: Yup.string().required("Password is required.").min(6, "Minimum 6 characters are allowed."),
        userRole: Yup.string().required("User Role is required for registration.")
    })

    if(isLoading){
        return <LoadingComp />
    }

  return (
     <>
     <div className='relative w-full h-screen flex items-center justify-center md:px-0 px-3'>
        <img className='w-full h-full absolute top-0 left-0 -z-10 object-cover' src={backgroundImage} alt="" />
        <div className='md:w-[55%] md:h-[550px] mt-20 md:mt-0 bg-neutral-100 flex rounded-xl shadow md:shadow-none'>

            <div className='md:w-[60%] h-full rounded-l-xl p-10 pt-15'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm })=>{
                        dispatch(getRegistered(values));
                        resetForm();
                    }}
                >
                    <Form>
                         <h1 className='text-center text-xl md:text-3xl font-semibold mb-5'>Create a new account</h1>
                        <Field 
                            type="text" 
                            name="name" 
                            placeholder="Username" 
                            className="w-full h-12 border border-neutral-500 outline-none px-2 rounded"
                        />
                        <p className='text-red-500 mt-1 text-sm'>
                            <ErrorMessage name="name" />
                        </p>

                         <Field 
                            type="email" 
                            name="email" 
                            placeholder="Email Address" 
                            className="w-full h-12 mt-6 border border-neutral-500 outline-none px-2 rounded"
                        />
                        <p className='text-red-500 mt-1 text-sm'>
                            <ErrorMessage name="email" />
                        </p>

                        <Field 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            className="w-full h-12 mt-6 border border-neutral-500 outline-none px-2 rounded"
                        />
                        <p className='text-red-500 mt-1 text-sm'>
                            <ErrorMessage name="password" />
                        </p>

                        <Field 
                            as="select" 
                            name="userRole"
                            className="w-full h-12 mt-6 border border-neutral-500 outline-none px-2 rounded"
                        >
                            <option className='bg-neutral-300 text-neutral-700'>Select Use case</option>
                            <option value="user">Simple User</option>
                            <option value="chef">Be a Chef</option>
                        </Field>
                        <p className='text-red-500 mt-1 text-sm'>
                            <ErrorMessage name="userRole" />
                        </p>

                        <div className='w-full flex items-center justify-center gap-10 mt-10'>
                            <button type='submit' className='px-3 py-1 md:px-4 md:py-2 text-sm md:text-lg bg-neutral-900 text-white rounded hover:bg-neutral-800 cursor-pointer'>Create Account</button>
                            <p>Already have an account? <Link to={"/login"} className='text-sm md:text-lg text-blue-700'>Login</Link></p>
                        </div>
                    </Form>
                </Formik>
            </div>

            <div className='hidden md:block md:w-[40%] h-full rounded-r-xl'>
                <img src={biryaniImage} className='w-full h-full object-cover rounded-r-xl' />
            </div>
        </div>
    </div>
     </>
  )
}

export default RegistrationComp