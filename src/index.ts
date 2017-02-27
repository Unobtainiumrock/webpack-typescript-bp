import sortByName from "./demo";

import * as $ from 'jquery';

$(() => {
    $(document.body).append(sortByName([{name: 'Nick', age: 10 },{name:'Soe', age: 2},{name:'John', age: 7}]));
});
