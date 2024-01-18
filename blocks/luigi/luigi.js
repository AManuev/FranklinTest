const elem = document.getElementById('this-is-a-luigi-search-container');
const elh = document.createElement('h1');
const newContent = document.createTextNode("This is a luigi container.");
elh.appendChild(newContent);

elem.append(elh);

//import LuigiClient from '@luigi-project/client';
//
//// window.LuigiClient
//
//useEffect(() => {
//    const LuigiClient = require('@luigi-project/client');
//    LuigiClient.addInitListener(function(context) {
//        LuigiClient.showAlert({text: 'Hello'});
//    });
//}, []);