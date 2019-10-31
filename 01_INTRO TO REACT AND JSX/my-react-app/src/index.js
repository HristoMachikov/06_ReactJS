import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import './styles/styles.css';
// import App from './components/App';
import contacts from './contacts.json'

// let contactsArr = [];
let currSelIndex = 0;

function onClicked(index) {
    currSelIndex = index
    render();
}

// contacts.forEach((contact, idx) => {
//     let a =
//         <li className="contacts" onClick={() => onClicked(idx)} data-id={idx}>
//             <span className="avatar small">&#9787;</span>
//             <span className="title">{contact.firstName} {contact.lastName}</span>
//         </li>;
//     contactsArr.push(a)
// });

const Details = function (props) {
    let elem = contacts[props.index];
    return (
        <div class="details">
            <ul>
                <li><span>Name:</span>{elem.firstName} {elem.lastName}</li>
                <li><span>Email:</span>{elem.email}</li>
                <li><span>Phone:</span>{elem.phone}</li>
            </ul>
        </div>
    );
}

const Contacts = () => {
    // return contactsArr;
    return contacts.map((contact, idx) => {
        return (<li className="contacts" onClick={() => onClicked(idx)} data-id={idx}>
            <span className="avatar small">&#9787;</span>
            <span className="title">{contact.firstName} {contact.lastName}</span>
        </li>);
    })
}

const Main = () => (
    <div class="container">
        <ul>
            <Contacts />
        </ul>
        <Details index={currSelIndex} />
        <h2>It is:{new Date().toLocaleTimeString()}</h2>
    </div>
);

const render = () => ReactDOM.render(<Main />, document.getElementById('root'));
render();

setInterval(render, 1000);