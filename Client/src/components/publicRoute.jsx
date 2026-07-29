import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

const PublicRoute = ({children}) => {

    const {token} = useAuthStore()
    
    if(token){
        return <Navigate to='/home'/>
    }
  return children;
}

export default PublicRoute