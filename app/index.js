import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

let div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

const mountNode = document.getElementById('app');

render(
    <div>
        app
    </div>
    ,
    mountNode
);

if(module.hot && process.env.NODE_ENV !== 'production'){
    module.hot.accept();
}