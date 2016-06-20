// any js in here is automatically ran for us

// Import React library
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import ImageList from './components/imageList'; 

// create a component
const App = () => {
  return (
    <div> 
      React App #2
      <h1>
        <ImageList /> 
      </h1>
    </div>
  );
}; 

// render this component to the screen

Meteor.startup(() => {
  // code to run on client at startup
  ReactDOM.render( <App /> , document.querySelector('.root'));  
});
