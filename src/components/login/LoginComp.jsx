import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/authSlice";
import LoadingComp from "../LoadingComp";
import backgroundImage from "../../assets/background-image.webp";
import burgerImage from "../../assets/burger-image.webp";

const LoginComp = () => {

    const navigate = useNavigate();
    const { token } = useSelector(state => state.auth);

    const { isLoading } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const initialValues = {
        email:"",
        password:""
    }

    const validationSchema = Yup.object({
        email: Yup.string().required("Email is required."),
        password: Yup.string().required("Password is required.").min(6, "Minimum 6 characters are allowed."),
    })

    if(isLoading){
        return <LoadingComp />
    }

  return (
    <>
     <div className='relative w-full h-screen flex items-center justify-center px-3 md:px-0'>
        <img className='w-full h-full absolute top-0 left-0 -z-10 object-cover' src={backgroundImage} alt="" />
        <div className='md:w-[55%] md:h-[350px] bg-neutral-100 flex rounded-xl'>

            <div className='md:w-[60%] h-full rounded-l-xl p-10'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                   onSubmit={async (values, { resetForm }) => {
                     try {
                         const result = await dispatch(userLogin(values)).unwrap();
                         navigate("/profile");
                     } catch (error) {
                         console.error("Login failed:", error);
                    }
                    }}
                >
                    <Form>
                        <h1 className='text-center text-xl md:text-3xl font-semibold mb-2'>Login to your account</h1>
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

                        <div className='w-full flex items-center justify-center gap-10 mt-10'>
                            <button type='submit' className='px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-800 cursor-pointer'>Login</button>
                            <p>Don't have an account? <Link to={"/register"} className='text-sm md:text-lg text-blue-700'>Register</Link></p>
                        </div>
                    </Form>
                </Formik>
            </div>

            <div className='hidden md:block md:w-[40%] w-[40%] h-full rounded-r-xl'>
                <img src={burgerImage} className='w-full h-full object-cover rounded-r-xl'  />
            </div>
        </div>
    </div>
    </>
  )
}

export default LoginComp