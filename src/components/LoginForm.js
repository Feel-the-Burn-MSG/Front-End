import React from 'react';

const loginForm = () => {
    
    return (
        <div>
            <form >
                <label> 
                    Username
                    <input 
                        type="text"
                        name="username"
                        
                        />
                </label>
                <label> 
                    Password
                    <input 
                        type="password"
                        name="password"
                        
                        />
                </label>
            </form>
        </div>
    )
}

export default loginForm;