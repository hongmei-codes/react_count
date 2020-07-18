/*
The component in this file is not for use.
It is to demostrate concept so I can understand how react works
*/

// React is exported using 'export default React' so no need braces when importing
// Component is exported without 'default' so need braces when importing
import React, { Component } from 'react';

// This is a Component
// Component are different parts of a web page, each part usually performs one function
// e.g. nav-bar is a component, search bar is a component...
// Component is declared in the following way
/* 
class ComponentName extends Component {
   state = {}
   render() {
    return ()
   }
 } 

 export default ComponentName;
 */
// it inherits from the Component Class in React
// it has a property 'state'(an object) which usually contains data
// it has a render() method that returns one rendered element
// the component is then exported for index.js to import and render the index.html
// the rendered element has jsx sytax...
// which is change to javascript by Babel in the background 

class Note extends Component {
    state = {
      // state is an object
      // Data are stored in state
      // since state is an object, data within it can be accessed by dot notation
      name: 'ada lovelace'
    }
  
    render() {
      // where the jsx scripts lies here
      // Babel converts jsx syntax and convert it to javascript for browser to execute
      // e.g. jsx: const element = <h1>Hello World</h1>;
      // e.g. javascript: var element = React.createElement("h1", null, "Hello World");
      // Babel is installed in the node modules
      return(
        <React.Fragment>
          <h1>hello, { this.state.name }!</h1>
          <p>other contents</p>
        </React.Fragment>
      )
      // <React.Fragment> is an alternative to <div>
      // since render can only return one element
      // multiple elements have to be wrapped in a parent element
      // <React.Fragment> will not appear in template after rendered
      // if you don't want too many <div>s in your template, use <React.Fragment>
    }
  }
  
  export default Note; // exported so that other files can import this
  // To insert a component to any other file...
  // simply import it at the top before using it

  // !!!TIP!!!
  // keep each component in a different .js file -> easier to maintain
  // each component includes...
  // 1. import statement
  // 2. Component Class (with state property(if required) and render() method)
  // 3. export statement for other files to use
