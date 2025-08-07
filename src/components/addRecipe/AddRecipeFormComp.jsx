import React, { useRef, useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";

const AddRecipeFormComp = () => {

  const fileInputRef = useRef(null);

  const [fileSelect,setFileSelect] = useState(null);
  console.log("selected-image", fileSelect)
  const [imageURL,setImageURL] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [uploadDone,setUploadDone] = useState(false);


  const isDisabled = imageURL ? false : true;

  const handleFileUpload = async(setFieldValue) => {
    if(!fileSelect) return alert("Please select image first")
        setIsLoading(true)   

        const reader = new FileReader();
        reader.onloadend = async() => {
        const base64 = reader.result;
        console.log("base64",base64)
            try {
                const { data } = await axios.post("http://localhost:8000/file/uploadImage", {
                    file:base64
                })
                setFieldValue("dishImage", data.Url)
                setIsLoading(false)
                setUploadDone(true)
            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }

        reader.readAsDataURL(fileSelect);
  }


  const username = localStorage.getItem("username");
  const email = localStorage.getItem("user-email");

  const initialValues = {
    dishName: "",
    dishImage: "",
    authorName: username || "",
    authorEmail: email,
    categorie: "",
    cuisine: "",
    level: "",
    prepTime: "",
    cookTime: "",
    ingredients: "",
    smallDesc: "",
    fullDesc:""
  }

  const validationSchema = Yup.object({
    dishName: Yup.string().required("What's the name of this dish."),
    dishImage: Yup.string().required("Please Choose an Dish Image."),
    authorName: Yup.string(),
    categorie: Yup.string().required("Categorie of this dish is required."),
    cuisine: Yup.string().required("Tell us where this dish is from."),
    level: Yup.string().required("User's must know the difficulty of this dish."),
    prepTime: Yup.number().required("What's the preparation time for this dish."),
    cookTime: Yup.number().required("Total time for this dish."),
    ingredients: Yup.string().required("Ingredients of this dish"),
    smallDesc: Yup.string().required("Small description").max(30, "Maximum 30 words are allowed"),
    fullDesc: Yup.string().required("A great full description, how we can cook this.")
  })

  return (
    <div className='w-full h-screen bg-neutral-200 flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-semibold my-5 mt-10'>Add New Recipe</h1>
        <div className='w-[1000px] h-[670px] bg-white rounded-2xl px-10 py-5'>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values)
              }}
            >

              {({ setFieldValue }) => (
                <Form>
                  <div className='w-full'>
                      <div className='w-full flex items-center justify-center gap-5'>
                         <div className='w-full'>
                            <label htmlFor="dishName">Dish Name</label>
                            <div>
                            <Field type="text" name="dishName" className="w-full h-10 px-3 border border-neutral-500 outline-none rounded"/>
                            <p className='text-red-500 text-sm mt-1'> <ErrorMessage name='dishName'/> </p>
                        </div>
                      </div>
                      <div className='w-full'>
                            <label htmlFor="dishImage">Choose Image</label>
                            <div>
                            <div className='w-full h-10 border border-neutral-500 outline-none rounded relative p-1 px-3'>
                               <FaCloudUploadAlt className='text-3xl cursor-pointer'/>
                              <input
                                ref={fileInputRef}
                                type="file"
                                onChange={(e) => setFileSelect(e.target.files[0])}
                                className="opacity-0 absolute top-0 left-0 z-20 w-full h-full cursor-pointer"
                              />

                               {
                                  fileSelect ? <div className={`absolute -top-8 right-3 ${uploadDone ? "hidden" : "flex"} items-center justify-center gap-2`}>
                                        <button
                                          type="button"
                                          onClick={() => {
                                          setFileSelect(null);
                                          if (fileInputRef.current) fileInputRef.current.value = "";
                                        }}
                                        >❌</button>
                                        <button type='button' onClick={()=>handleFileUpload(setFieldValue)} className='text-2xl cursor-pointer active:scale-95'>✅</button>
                                  </div> : ""
                               } 

                               {
                                  isLoading ? <div className='absolute -bottom-7 right-0'>Loading...</div> : ""
                               }
                            </div>
                            <p className={`text-sm mt-1 text-green-500 ${uploadDone ? "block" : "hidden"}`}> Done. </p>
                            <p className={`text-sm mt-1 ${fileSelect ? "text-green-500" : "text-red-500"} ${uploadDone ? "hidden" : "block"}`}> { fileSelect ? "Image is Selected" : "Select an Image" } </p>
                        </div>
                      </div>
                      </div>


                      <div className='w-full flex items-center justify-evenly gap-5 mt-5'>
                          <div className='w-full'>
                            <div>
                            <Field type="text" value={username} name="authorName" className="w-full h-10 px-3 bg-neutral-300 text-neutral-500 border border-neutral-500 outline-none rounded"/>
                        </div>
                      </div>

                      <div className='w-full'>
                        <div>
                            <Field as="select" name="categorie" className='w-full h-10 px-3 border border-neutral-500 outline-none rounded'>
                              <option className='bg-neutral-300 text-neutral-600'>Choose dish categorie</option>
                              <option value={"breakfast"}>Breakfast</option>
                              <option value={"lunch"}>Lunch</option>
                              <option value={"healthy"}>Healthy</option>
                              <option value={"meat"}>Meat</option>
                              <option value={"desert"}>Desert</option>
                              <option value={"chocolate"}>Chocolate</option>
                            </Field>
                            <p className='text-red-500 text-sm mt-1'> <ErrorMessage name='categorie'/> </p>
                        </div>
                      </div>

                      <div className='w-full'>
                            <div>
                            <Field as="select" name="cuisine" className='w-full h-10 px-3 border border-neutral-500 outline-none rounded'>
                              <option className='bg-neutral-300 text-neutral-600'>Choose cuisine</option>
                              <option value={"pakistani"}>Pakistani</option>
                              <option value={"arab"}>Arab</option>
                              <option value={"chineese"}>Chineese</option>
                              <option value={"american"}>American</option>
                              <option value={"italian"}>Italian</option>
                              <option value={"mexican"}>Mexican</option>
                              <option value={"mexican"}>Indian</option>
                              <option value={"mexican"}>Brazilian</option>
                              <option value={"mexican"}>French</option>
                              <option value={"mexican"}>Spanish</option>
                            </Field>
                            <p className='text-red-500 text-sm mt-1'> <ErrorMessage name='cuisine'/> </p>
                        </div>
                      </div>
                      </div>


                      <div className='w-full flex items-center justify-evenly gap-5 mt-5'>
                          <div className='w-full'>
                            <div>
                           <Field as="select" name="level" className='w-full h-10 px-3 border border-neutral-500 outline-none rounded'>
                              <option className='bg-neutral-300 text-neutral-600'>Choose difficulty</option>
                              <option value={"easy"}>Easy</option>
                              <option value={"medium"}>Medium</option>
                              <option value={"hard"}>Hard</option>
                            </Field>
                            <p className='text-red-500 text-sm mt-1'> <ErrorMessage name='level'/> </p>
                        </div>
                      </div>

                      <div className='w-full'>
                        <div>
                            <Field type="number" name="prepTime" placeholder="Preparation time in mins" className="w-full h-10 px-3 border border-neutral-500 outline-none rounded"/>
                            <p className='text-red-500 text-sm mt-1'> <ErrorMessage name='prepTime'/> </p>
                        </div>
                      </div>

                      <div className='w-full'>
                            <div>
                           <Field type="number" name="cookTime" placeholder="Cooking time in mins" className="w-full h-10 px-3 border border-neutral-500 outline-none rounded"/>
                            <p className='text-red-500 text-sm mt-1'> <ErrorMessage name='cookTime'/> </p>
                        </div>
                      </div>
                      </div>

                       <div className='w-full flex h-30 gap-5 mt-5'>

                          <div className='w-full'>
                            <div>
                            <Field as="textarea" className='w-full outline-none p-2 border border-neutral-500 rounded' name="ingredients" placeholder='Ingredients' rows={5}></Field>
                            <p className='text-red-500 text-sm mt-1'> <ErrorMessage name='ingredients'/> </p>
                        </div>
                      </div>

                      <div className='w-full'>
                            <div>
                            <Field as="textarea" className='w-full outline-none p-2 border border-neutral-500 rounded' name="smallDesc" placeholder='Small description' rows={5}></Field>
                            <p className='text-red-500 text-sm mt-1'> <ErrorMessage name='smallDesc'/> </p>
                        </div>
                      </div>

                       </div>

                        <div className='w-full mt-10'>
                            <div>
                            <Field as="textarea" className='w-full h-45 outline-none p-2 border border-neutral-500 rounded' name="fullDesc" placeholder='Full description, How can we make this?' rows={5}></Field>
                            <p className='text-red-500 text-sm mt-1'> <ErrorMessage name='fullDesc'/> </p>
                        </div>
                      </div>
                  </div>

                  <div className='mt-5'>
                    <button type='submit' className='hidden md:block px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-800 cursor-pointer'>Add Recipe</button>
                  </div>
              </Form>
              )}
            </Formik>
        </div>
    </div>
  )
}

export default AddRecipeFormComp