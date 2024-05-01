// import logo from './logo.svg'; // Remove unnecessary import
import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/usersSlice';
import summaryApi from './common';
import ComponentWrapper from './components/ComponentWrapper';
function App() {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    try {
      const dataResponse = await fetch(summaryApi.current_user.url, {
        method: summaryApi.current_user.method,
        credentials: 'include'
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data));
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      // Handle error if needed
    }
  };

  useEffect(() => {
    // Fetch user details on component mount
    fetchUserDetails();
  }, []); // Added an empty dependency array to ensure useEffect runs only once

  return (
    <ComponentWrapper>
      <Context.Provider value={{
        fetchUserDetails // User detail fetch function
      }}>
        <ToastContainer />
    
        <main className='min-h-[calc(100vh-120vh)] pt-16'>
          <Outlet />
        </main>

      </Context.Provider>
    </ComponentWrapper>
  );
}

export default App;
