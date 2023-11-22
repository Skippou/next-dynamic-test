import React from 'react';

const MyComponent = () => {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className='bg-gray-600'>
            <p>You clicked {count} timez</p>
            <button 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={handleClick}>Click me</button>
        </div>
    );
};

export default MyComponent;
