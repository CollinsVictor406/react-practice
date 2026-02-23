import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return <div>
         <Person></Person>
          <Message></Message>
          </div>
}

const Person = () => <h1>My name is Collins Victor</h1>
const Message = () =>  <p>i come from edo state</p>
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);