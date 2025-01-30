import { Component } from "react";
import Card from "./components/card";
import Header from './components/header';



class App extends Component {
state = {
    questions: [
        {
          "question": "What is React?",
          "answer": "React is a popular JavaScript library for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components.",
          "progress": 0
        },
        {
          "question": "What are components in React?",
          "answer": "Components are the building blocks of a React application. They encapsulate a part of the user interface and can be reused and nested to build complex UIs.",
          "progress": 0
        },
        {
          "question": "What is JSX in React?",
          "answer": "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML and is used in React to describe what the UI should look like.",
          "progress": 0
        },
        {
          "question": "What is a state in React?",
          "answer": "State is a built-in object in React that holds dynamic data that can change over time. It allows components to create and manage internal data.",
          "progress": 0
        },
        {
          "question": "What is a prop in React?",
          "answer": "Props, short for properties, are read-only attributes used to pass data from one component to another in React. They allow components to be dynamic and reusable.",
          "progress": 0
        },
        {
          "question": "What is the virtual DOM in React?",
          "answer": "The virtual DOM is a lightweight copy of the real DOM that React uses to optimize rendering. It allows React to update only the parts of the DOM that have changed, improving performance.",
          "progress": 0
        },
        {
          "question": "What is a key in React?",
          "answer": "Keys are unique identifiers used in React to identify elements in a list. They help React to efficiently update and re-render elements when the list changes.",
          "progress": 0
        },
        {
          "question": "What is React Hooks?",
          "answer": "React Hooks are functions that let developers use state and other React features in functional components. They were introduced in React 16.8 to make it easier to manage state and side effects.",
          "progress": 0
        },
        {
          "question": "What is the useEffect Hook?",
          "answer": "The useEffect Hook is used to perform side effects in functional components. It can handle tasks like fetching data, updating the DOM, or setting up subscriptions.",
          "progress": 0
        },
        {
          "question": "What is the difference between functional and class components in React?",
          "answer": "Functional components are simpler and use hooks for state and lifecycle features, while class components are more traditional and use class syntax with lifecycle methods.",
          "progress": 0
        },
        {
          "question": "What is the React context API?",
          "answer": "The React context API is a way to manage state globally in a React application. It allows you to create a context and provide data to any component in the tree without prop drilling.",
          "progress": 0
        },
        {
          "question": "What is the purpose of the useState Hook?",
          "answer": "The useState Hook is used to add state to functional components. It returns an array with the current state value and a function to update that state.",
          "progress": 0
        },
        {
          "question": "What is prop drilling in React?",
          "answer": "Prop drilling refers to the process of passing data through multiple layers of components to reach a nested component. It can make the code harder to maintain and understand.",
          "progress": 0
        },
        {
          "question": "What is a higher-order component (HOC) in React?",
          "answer": "A higher-order component is a function that takes a component as an argument and returns a new component with added functionality. HOCs are used for reusing component logic.",
          "progress": 0
        },
        {
          "question": "What is the useContext Hook?",
          "answer": "The useContext Hook is used to access the context value in functional components. It allows you to consume context without wrapping the component in a Consumer.",
          "progress": 0
        },
        {
          "question": "What is React Router?",
          "answer": "React Router is a library for handling routing in React applications. It allows you to define multiple routes and navigate between different views in a single-page application.",
          "progress": 0
        },
        {
          "question": "What is the useRef Hook?",
          "answer": "The useRef Hook is used to create a mutable reference to a DOM element or a value. It can be used to access and manipulate DOM elements directly in functional components.",
          "progress": 0
        },
        {
          "question": "What are fragments in React?",
          "answer": "Fragments are a way to group multiple elements without adding an extra DOM node. They allow you to return multiple elements from a component without a wrapper element.",
          "progress": 0
        },
        {
          "question": "What is React.memo?",
          "answer": "React.memo is a higher-order component that optimizes performance by memoizing the rendered output. It prevents unnecessary re-renders by checking if the props have changed.",
          "progress": 0
        },
        {
          "question": "What is the useCallback Hook?",
          "answer": "The useCallback Hook is used to memoize callback functions in functional components. It helps to prevent unnecessary re-creation of functions and improve performance.",
          "progress": 0
        }
      ]
    
    }
  render() {
    return (
      <>
        <Header />
        <Card />
      </>
    );
  }
}

export default App;
