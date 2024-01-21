const reactElement = {
    type: 'a',
    props:{
        href : 'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit Google'
}
function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    for(const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop]);

    }
    domElement.innerHTML = reactElement.children;
    container.appendChild(domElement);
}

const mainContainer = document.querySelector('#root');
console.log("main")
console.log(mainContainer);
customRender(reactElement,mainContainer);

