import './App.css'
import { useSelector } from 'react-redux';

import { RootState } from './store/store.ts';
import Signin from './pages/Signin.tsx';
import Layout from './pages/Layout.tsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard.tsx';
import Products from './pages/products/Products.tsx';
import Checkout from './pages/checkout/Checkut.tsx';
import AdminLayout from './pages/AdminLayout.tsx';
import Analytics from './pages/analytics/Analytics.tsx';
import Intake from './pages/intake/Intake.tsx';
import Staff from './pages/staff/Staff.tsx';
import Transfer from './pages/transfer/Transfer.tsx';
import Page404 from './pages/Page404.tsx';
import Storage from './pages/storage/Storage.tsx';

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <div className='main-container'>
      {isAuthenticated ? (
        <div className='main-container'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={ <Dashboard />} /> 
            <Route path='storage' element={ <Storage />} />
            <Route path='products' element={ <Products />} />
            <Route path='checkout' element={ <Checkout />} />
            <Route path='report' element={ <Analytics />} />
  
          </Route>
          {/* to delete later */}
          {/* <Route path="/signin" element={<Signin />} /> */}
  
          {/* admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path='intake' element={<Intake />} />
            <Route path='staff' element={<Staff />} />
            <Route path='transfer' element={<Transfer />} />
  
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
      ) : (
        <Signin />
      )}
    </div>
    
  )
}

export default App
