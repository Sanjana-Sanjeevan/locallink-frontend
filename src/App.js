import React from 'react';
import { useAuthContext } from '@asgardeo/auth-react';

function App() {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>LocalLink</h1>
      {state.isAuthenticated ? (
        <div>
          <p>Welcome, {state.sub}!</p> {/* state.sub is the username/email */}
          <button onClick={() => signOut()} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#f44336', color: 'white', cursor: 'pointer' }}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => signIn()} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>
          Login
        </button>
      )}
    </div>
  );
}

export default App;