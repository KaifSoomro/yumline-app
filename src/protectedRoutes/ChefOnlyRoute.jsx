import { Navigate } from 'react-router-dom';

const ChefOnlyRoute = ({ children }) => {
  const userRole = localStorage.getItem('user-role');

  if (userRole !== 'chef') {
    return <Navigate to="/not-found" />;
  }

  return children;
};

export default ChefOnlyRoute;
