import { Navigate, useRoutes } from 'react-router-dom';
import Division3 from './components-2/Division3';
import Food1 from './components-2/Food1';
import Services1 from './components-2/Services1';
import Others1 from './components-2/Others1';
import Dashboard1 from './components1/Dashboard1';
import Todayprofit from './components1/Todayprofit';
import Navlog_sign_in from './components3/Navlog_sign_in';
import Login1 from './components3/Login1';
import Personal_Register from './components3/Personal_Register';
import Top_carousal from './components-2/Top_carousal';
import Leaderboard from './components/Leaderboard';
import Register from './components/register';



function useAuth() {
    return localStorage.getItem('token')?true:false;
  }
  
  function PrivateRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
  }

  
export default function Router() {
    return useRoutes([
      {path:'/',
      element:<Top_carousal/>
    },
    {
      path:'/food1',
      element:<Food1/>
    },
    {
      path:'/services1',
      element:<Services1/>
    },
    {
      path:'/others1',
      element:<Others1/>
    },
    {
      path:'/dashboard',
      element:<Dashboard1/>
    },
    {
      path:'/dashboard/today',
      element:<Todayprofit/>
    },
    {
      path:'/login',
      element:<Login1/>
    },
    {
      path:'/personal_register',
      element:<Personal_Register/>
    },
    {
      path:'/Navlogin_register',
      element:<Navlog_sign_in/>
    },
    {
      path:'/teamregister',
      element:<Register/>
    },
    {
      path:'/leaderboard',
      element:<Leaderboard/>
    }


    ]);
    
  }
  