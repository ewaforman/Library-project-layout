!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);e(1);function r(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,c=function(){};return{s:c,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,i=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return a=t.done,t},e:function(t){i=!0,u=t},f:function(){try{a||null==e.return||e.return()}finally{if(i)throw u}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}fetch("http://127.0.0.1:5000/get_all_books").then((function(t){return t.json()})).then((function(t){var n,e=r(t);try{for(e.s();!(n=e.n()).done;){var o=n.value,c=o.name,u=o.surname,a=o.title,i=(o.status,o.id),l=document.querySelector(".book__body"),d='<tr>\n      <td class="col__id">'.concat(i,'</td>\n      <td class="col__authorName">').concat(c,'</td>\n      <td class="col__authorSurname">').concat(u,"</td>\n      <td>").concat(a,"</td>");l.innerHTML+=d}}catch(t){e.e(t)}finally{e.f()}})).catch((function(t){console.log("Nie udalo sie pobrac ksiazek.")})),fetch("http://127.0.0.1:5000/count_all_students").then((function(t){return t.json()})).then((function(t){var n=t.number,e=document.querySelector(".student__number"),r="(".concat(n,")");e.innerHTML=r})).catch((function(t){console.log("Nie udalo sie pobrac liczby studentow.")})),fetch("http://127.0.0.1:5000/get_all_hires").then((function(t){return t.json()})).then((function(t){var n,e=r(t);try{for(e.s();!(n=e.n()).done;){var o=n.value,c=o.id_book,u=o.id_student,a=o.date_hire,i=o.date_return,l=(o.id,o.student_name,o.student_surname,o.author_name,o.author_surname,o.title,document.querySelector(".hire__body")),d='<tr>\n    <td class="col__id">'.concat(c,'</td>\n    <td class="col__id">').concat(u,"</td>\n    <td>").concat(a,"</td>\n    <td>").concat(i,"</td>\n  </tr>");l.innerHTML+=d}}catch(t){e.e(t)}finally{e.f()}})).catch((function(t){console.log("Nie udalo sie pobrac wypozyczen.")})),fetch("http://127.0.0.1:5000/count_all_books").then((function(t){return t.json()})).then((function(t){var n=t.number,e=document.querySelector(".books__number"),r="(".concat(n,")");e.innerHTML=r})).catch((function(t){console.log("Nie udalo sie pobrac liczby ksiazek.")})),fetch("http://127.0.0.1:5000/get_all_students").then((function(t){return t.json()})).then((function(t){var n,e=r(t);try{for(e.s();!(n=e.n()).done;){var o=n.value,c=o.name,u=o.surname,a=o.username,i=o.id,l=document.querySelector(".student__body"),d='<tr>\n      <td class="col__id">'.concat(i,"</td>\n      <td>").concat(c,"</td>\n      <td>").concat(u,'</td>\n      <td class="col__user">').concat(a,"</td>");l.innerHTML+=d}}catch(t){e.e(t)}finally{e.f()}})).catch((function(t){console.log("Nie udalo sie pobrac studentow.")}))},function(t,n,e){}]);