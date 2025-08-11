import React from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import RecipesPage from "./pages/RecipesPage";
import AboutPage from "./pages/AboutPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from './protectedRoutes/protectedRoutes';
import ProfilePage from "./pages/ProfilePage";
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import MobileNavBarComp from './components/MobileNavBarComp';
import RecipeDetailPage from './pages/RecipeDetailPage';
import AddRecipePage from './pages/AddRecipePage';
import NotFound from './pages/NotFound';
import ChefOnlyRoute from './protectedRoutes/ChefOnlyRoute';
import UserRecipesPage from './pages/UserRecipesPage';

const App = () => {

  const location = useLocation();
  const userRole = localStorage.getItem("user-role");

  const hideFooter = location.pathname === "/login" || 
  location.pathname === "/register" || location.pathname === "/add-recipe" || location.pathname === "/profile";

  const userLimitation = userRole === "chef" ;
  
  return (
    <>
        <MobileNavBarComp />
        <Navbar />
        <Routes>
            <Route element={<ProtectedRoutes />}>
               <Route path='/profile' element={<ProfilePage />}/>
               <Route path='/recipes' element={<RecipesPage />}/>
               <Route path='/add-recipe' element={ <ChefOnlyRoute> <AddRecipePage /> </ChefOnlyRoute> } />
               <Route path='/not-found' element={<NotFound />}/>
               <Route path='/my-recipes' element={<UserRecipesPage />}/>
            </Route>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/recipes/:recipeId' element={<RecipeDetailPage />}/>
            <Route path='/register' element={<RegistrationPage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
        { !hideFooter && <Footer /> }
        <ToastContainer />
    </>
  )
}

export default App