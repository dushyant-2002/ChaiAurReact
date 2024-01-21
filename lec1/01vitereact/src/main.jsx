import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// function MyApp(){
//     return(
//         <div>
//             <h1>custom App using function syntax</h1>
//         </div>
//     )
// }
// const customElement = (
//     <h1>Custom Element</h1>
// )
const userName = "Dushyant"

const reactElement = React.createElement(
    'a',
    {href : "https://google.com" , target : '_blank'},
    'click me to visit Google',
    userName
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <>     
//     {/* MyApp() can also run like this coz at the end function is getting called so we can do this in this wy also*/}
//     {/* <MyApp/> */}
//     {/* in the end MyApp function is returning object so we can give object also  */}
//     {/* {customElement} */}
//      {reactElement}
//     </>
// )
ReactDOM.createRoot(document.getElementById('root')).render(
    <>     
    <App/>
    </>
)

