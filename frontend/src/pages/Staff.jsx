import React from 'react';
import StaffSidebar from '../components/StaffSidebar.jsx';

function Staff({ children }) {  // Accept 'children' as a prop
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <StaffSidebar/>                
            <main style={{ flex: 1, overflowY: 'auto', padding: '20px'}}>
                {children}  {/* Render the passed child component */}
            </main>
        </div>
    );
}

export default Staff;

