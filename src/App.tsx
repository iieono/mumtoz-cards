import './App.css'
import { useSelector } from 'react-redux';

import { RootState } from './store/store.ts';
import Signin from './pages/Signin.tsx';
import Layout from './pages/Layout.tsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard.tsx';

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    // <div className='main-container'>
    //   {isAuthenticated ? (
    //     <Layout />
    //   ) : (
    //     <Signin />
    //   )}
    // </div>
    <div className='main-container'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Dashboard/>} /> 
        </Route>
        {/* to delete later */}
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
