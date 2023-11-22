import React from 'react';

const MyComponent = () => {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>You clicked {count} timezzzzzzz</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default MyComponent;
