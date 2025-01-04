import React, { useState } from 'react';

function Transaction({ closeForm }) {
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [roleId, setRoleId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const transactionData = {
            productName,
            quantity,
            roleId
        };

        try {
            const response = await fetch('/transaction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transactionData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Transaction successful:', data);
                setProductName('');
                setQuantity('');
                setRoleId('');
                closeForm();
            } else {
                throw new Error(data.message || 'Failed to submit transaction');
            }
        } catch (error) {
            setError(error.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="popup-form">
            <div className="popup-form-content">
                <h2>Create a Transaction</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="roleId">Role ID</label>
                        <input
                            type="text"
                            id="roleId"
                            value={roleId}
                            onChange={(e) => setRoleId(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <div className="form-buttons">
                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                        <button type="button" className="close-btn" onClick={closeForm}>Close</button>
                    </div>
                </form>
            </div>
            <div className="overlay" onClick={closeForm}></div>

            <style>
                {`
                    .popup-form {
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: #fff;
                        border-radius: 10px;
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                        padding: 30px;
                        width: 400px;
                        z-index: 2;
                    }
 
                    .popup-form-content {
                        text-align: center;
                    }
 
                    .popup-form h2 {
                        color: #333;
                        margin-bottom: 20px;
                    }
 
                    .form-group {
                        margin-bottom: 15px;
                    }
 
                    .form-group label {
                        display: block;
                        font-weight: bold;
                        color: #555;
                    }
 
                    .form-group input {
                        width: 100%;
                        padding: 10px;
                        margin-top: 5px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        font-size: 1rem;
                    }
 
                    .form-buttons {
                        display: flex;
                        justify-content: space-between;
                    }
 
                    .submit-btn, .close-btn {
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 1rem;
                    }
 
                    .submit-btn {
                        background-color: #4CAF50;
                        color: white;
                        border: none;
                    }
 
                    .submit-btn:hover {
                        background-color: #45a049;
                    }
 
                    .close-btn {
                        background-color: #f44336;
                        color: white;
                        border: none;
                    }
 
                    .close-btn:hover {
                        background-color: #d32f2f;
                    }
 
                    .overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.5);
                        z-index: 1;
                    }
 
                    .error-message {
                        color: red;
                        font-size: 1rem;
                        margin: 10px 0;
                    }
                `}
            </style>
        </div>
    );
}

export default Transaction;
