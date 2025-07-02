import React, { useState, useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import DashboardPage from './pages/DashboardPage';
import Header from './components/Header';


function App() {
  // Use state to track the current route from the hash
  const [route, setRoute] = useState(window.location.hash);

  // Set up an effect to listen for changes to the URL hash
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    // Add the event listener when the component mounts
    window.addEventListener('hashchange', handleHashChange);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // The empty dependency array ensures this effect runs only once

  // The router logic now depends on the 'route' state variable
  let component;
  switch (route) {
    case '#/profile':
      component = <ProtectedRoute><ProfilePage /></ProtectedRoute>;
      break;
    case '#/dashboard':
      component = <ProtectedRoute><DashboardPage /></ProtectedRoute>;
      break;
    default:
      component = <HomePage />;
  }

  return (
    <div>
    <Header/>
      <main className="container mx-auto p-4">
        {component}
      </main>
    </div>
  );
}

export default App;