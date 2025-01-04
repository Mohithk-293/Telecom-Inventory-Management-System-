import React from 'react';
import StaffSidebar from './StaffSidebar';

const dummyNotifications = [
    { id: 1, message: 'Low stock alert: Laptop', date: '2023-06-05', type: 'warning' },
    { id: 2, message: 'New shipment arrived: Smartphones', date: '2023-06-04', type: 'info' },
    { id: 3, message: 'Price update: Headphones', date: '2023-06-03', type: 'info' },
    { id: 4, message: 'Stock out: Mouse', date: '2023-06-02', type: 'alert' },
    { id: 5, message: 'New supplier added: Keyboard Co.', date: '2023-06-01', type: 'info' },
];

function Notifications() {
    return (
        <div>
            <StaffSidebar/>                
            <div style={{
                width: "60%",
                position: "absolute",
                right: "0",
            }}>
                <h1>Notifications</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {dummyNotifications.map((notification) => (
                        <li
                            key={notification.id}
                            style={{
                                border: '1px solid #ddd',
                                marginBottom: '10px',
                                padding: '10px',
                                backgroundColor: notification.type === 'warning' ? '#fff3cd' :
                                    notification.type === 'alert' ? '#f8d7da' : '#d1ecf1'
                            }}
                        >
                            <strong>{notification.message}</strong>
                            <br />
                            <small>{notification.date}</small>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Notifications;

