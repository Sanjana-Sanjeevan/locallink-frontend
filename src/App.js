import React from 'react';
import { useAuthContext } from '@asgardeo/auth-react';

function App() {
  const { state, signIn, signOut } = useAuthContext();

  // Helper function to check if user has a specific role
  const hasRole = (roleName) => {
    // The roles from Asgardeo come in an array called 'groups'
    return state.groups && state.groups.includes(roleName);
  };

  // NEW: Add a loading check. This is the fix.
  // While the SDK is processing the login, show a simple loading message.
  if (state.isLoading) {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
            <h1>Loading...</h1>
        </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>LocalLink</h1>
      {state.isAuthenticated ? (
        <div>
          {/* This section now displays user's email and unique ID */}
          <p>Welcome back, <strong>{state.email || state.sub}</strong>!</p>
          <p>Your unique ID: {state.sub}</p>
          {/* This displays the roles assigned to the user */}
          <p>Your roles (groups): {state.groups ? state.groups.join(', ') : 'No roles assigned'}</p>

          {/* This is the new section that shows content based on the 'customer' role */}
          {hasRole('customer') && (
            <div style={{ backgroundColor: '#e7f3ff', padding: '15px', borderRadius: '8px', margin: '20px auto', maxWidth: '400px', border: '1px solid #b3d7ff' }}>
              <h3>You are a Customer!</h3>
              <p>You can browse available services.</p>
              <button style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Browse Services</button>
            </div>
          )}

          {/* This section shows content for the 'service_provider' role */}
          {hasRole('service_provider') && (
            <div style={{ backgroundColor: '#d4edda', padding: '15px', borderRadius: '8px', margin: '20px auto', maxWidth: '400px', border: '1px solid #c3e6cb' }}>
              <h3>You are a Service Provider!</h3>
              <p>You can add and manage your service offerings.</p>
              <button style={{ padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Manage My Services</button>
            </div>
          )}

          {/* This section shows content for the 'admin' role */}
          {hasRole('admin') && (
            <div style={{ backgroundColor: '#f8d7da', padding: '15px', borderRadius: '8px', margin: '20px auto', maxWidth: '400px', border: '1px solid #f5c6cb' }}>
              <h3>You are an Administrator!</h3>
              <p>You have special access to view all users and services.</p>
              <button style={{ padding: '10px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Admin Dashboard</button>
            </div>
          )}

          <button onClick={() => signOut()} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#6c757d', color: 'white', cursor: 'pointer', margin: '10px' }}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => signIn()} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>
          Login
        </button>
      )}
    </div>
  );
}

export default App;