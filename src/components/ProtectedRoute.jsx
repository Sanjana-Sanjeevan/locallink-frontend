import React from 'react';
import { useAuthContext } from "@asgardeo/auth-react";

const ProtectedRoute = ({ children }) => {
  const { state } = useAuthContext();
  if (state.isLoading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  if (!state.isAuthenticated) {
    return (
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold">Access Denied</h1>
            <p>Please log in to view this page.</p>
        </div>
    );
  }

  return children;
};

export default ProtectedRoute;