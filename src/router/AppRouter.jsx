import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { getEnvVariables } from '../heroes/helpers';



export const AppRouter = () => {


  const authStatus = 'checking'; //'authenticated'; 'not authenticated';
  
  console.log(getEnvVariables()); 


  return (
    <>

        <Routes>
            
            <Route path="login" element={<LoginPage />} />
            
            
            <Route path="/*" element={ <HeroesRoutes />} />
            
            

        </Routes>
    
    </>
  )
}
