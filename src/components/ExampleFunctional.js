import React, { useState, useEffect } from 'react';

export default function ExampleFunctional() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState('');

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log('Gọi hàm useEffect');

    const interval = setInterval(() => {
      console.log(`Interval: Count is ${count}, Action is ${action}`);
    }, 1000);

    return () => {
      console.log('Clear interval');
      clearInterval(interval);
    };
  }, [count, action]);

  return (
    <div className="example-functional">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <button onClick={() => setAction('users')}>Get Users</button>
      <button onClick={() => setAction('comments')}>Get Comments</button>
    </div>
  );
}
