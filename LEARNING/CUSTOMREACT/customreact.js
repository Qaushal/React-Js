

const Reactelement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target: '_blank'
    },
    children: 'Click me'
}

function render(Reactelement,mainContainer){
    domElement = document.createElement(Reactelement.type);
    domElement.innerHTML = Reactelement.children
    for (const Pro in Reactelement.props) {
        if (Pro === 'children') continue;
            domElement.setAttribute(Pro,Reactelement.props[Pro])
    
        }
        mainContainer.appendChild(domElement)
    }
    const mainContainer = document.getElementById('root')

    render(Reactelement,mainContainer);