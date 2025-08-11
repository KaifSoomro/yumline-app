import React from 'react'
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const IngredientsComp = ({ singleRecipe }) => {
  return (
    <div className='w-full md:px-40'>
        <div className='flex flex-col md:flex-row justify-center md:gap-35 gap-4 items-center text-xl py-8 md:py-15'>
            <h1 className='capitalize'><span className='font-semibold'>Prep Time:</span> { singleRecipe?.prepTime } minutes</h1>
            <h1 className='capitalize'><span className='font-semibold'>Cook Time:</span> { singleRecipe?.cookTime } minutes</h1>
            <h1 className='capitalize'><span className='font-semibold'>Difficulty:</span> { singleRecipe?.level }</h1>
        </div>
        <div className='mt-10 px-5 md:px-0'>
            <h1 className='text-2xl mb-4 font-semibold'>Ingredients:</h1>
            <p className='text-lg leading-7 tracking-wider'>{ singleRecipe?.ingredients }</p>
        </div>
        <div className='mt-10 px-5 md:px-0'>
            <h1 className='text-2xl font-semibold mb-4'>How to Cook?</h1>
            <p className='text-lg md:text-xl leading-7 tracking-wider'>{ singleRecipe?.fullDesc }</p>
        </div>
        
        <div className='w-full h-full mt-20 flex md:flex-row flex-col items-center justify-center bg-neutral-300 rounded-2xl px-3 md:p-10'>
            <div className='w-full md:w-[50%] h-full md:pe-10 p-2'>
              <h1 className='text-3xl md:text-4xl mt-3 md:mt-0 text-center md:text-start font-semibold'>Contact Me</h1>
              <p className='text-lg mt-5'>I’m <b className='capitalize'>{singleRecipe?.authorName}</b>, a passionate chef dedicated to creating unforgettable culinary experiences — whether it’s through private dining, custom recipes, or food events.
                If you’re interested in collaborating, booking a service, or just want to chat about food, I’d love to hear from you.
                Use the form below or reach out directly — let’s bring great flavors and ideas to the table.
              </p>
            </div>
            <div className='w-full md:w-[50%] md:h-[500px]'>
                <Formik>

                  <Form className='w-full h-full py-4 md:py-0 rounded-2xl text-white bg-neutral-800 flex items-center justify-center flex-col'>
                    <div className='md:w-[70%] my-2 px-3'>
                        <label htmlFor="name">Enter Your Name:</label>
                        <Field className="w-full h-10 border outline-none rounded ps-3 text-black bg-white" type="text" name="name"/>
                        <p className='text-red-600'><ErrorMessage name='name'/></p>
                    </div>
                     <div className='md:w-[70%] my-2 px-3'>
                        <label htmlFor="fromEmail">Send Message From: (Email)</label>
                        <Field className="w-full h-10 border outline-none rounded ps-3 text-black bg-white" type="email" name="fromEmail"/>
                        <p className='text-red-600'><ErrorMessage name='fromEmail'/></p>
                    </div>
                    <div className='md:w-[70%] my-2 px-3'>
                        <label htmlFor="sendEmail">Send Message To:</label>
                        <Field value={singleRecipe?.authorEmail} className="w-full h-10 border outline-none bg-white rounded ps-3 text-black" type="text" name="sendEmail"/>
                        <p className='text-red-600'><ErrorMessage name='sendEmail'/></p>
                    </div>
                    <div className='md:w-[70%] my-2 px-3'>
                        <label htmlFor="sendEmail">Write Your Message:</label>
                        <textarea className="w-full h-30 border outline-none rounded p-3 text-black bg-white" />
                        <p className='text-red-600'><ErrorMessage name='sendEmail'/></p>
                    </div>
                    <button className='mt-2 bg-blue-600 cursor-pointer text-white px-5 py-2 rounded'>Send Message</button>
                  </Form>
                </Formik>
            </div>
        </div>
    </div>
  )
}

export default IngredientsComp