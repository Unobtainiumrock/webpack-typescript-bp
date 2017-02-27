
import sortByName from "./demo";
 
import * as $ from 'jquery';

const data = [{name: 'Nick', age: 10 },{name:'Soe', age: 2},{name:'John', age: 7}]

 $(() => {
     $(document.body).append(JSON.stringify(sortByName(data)));
 });
