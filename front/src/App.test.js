import React from 'react';
import React from 'SignUp';
import ReactDOM from 'react-dom';
import App from './App';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
