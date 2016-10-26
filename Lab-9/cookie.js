/*
lab 9
using the module format discussed in class create a module for handling cookies.

- there should be only three public functions for manipulating cookies
  - void setData(name, value[, numDays = 0])
  - String getData(name)
  - Number length()

notes:
  - set items takes an optional variable of the number of days the cookie should live for
  - length returns the number of things stored in the cookie
*/

function Cookie(){
  var obj = {
    setData: setData,
    getData: getData,
    length: length
  };

  function setData(name, value, day){
    document.cookie = name + "=" + value +
      (day ? "; expires=" + getDate(day) : "");
  }

  // TODO rewrite this to use regex capture groups
  function getData(name){
    var name = name + "=";
    //if(!RegExp(name + "(\w+);\?").test(document.cookie)){return null};
    console.log(RegExp(name + "(\\w+);\\?").exec(document.cookie));
    for(var i = 0; i < document.cookie.length; i++){
      var j = i + name.length;
      if(document.cookie.substring(i, j) == name){
        return getCookieValue(j);
      }
      i = document.cookie.indexOf(" ", i);
      if (i == 0) break;
    }
    return null;
  }

  function getCookieValue(offset){
    var endstr = document.cookie.indexOf(";", offset);
    if(endstr == -1){
      endstr = document.cookie.length;
    }
    return document.cookie.substring(offset, endstr);
  }

  // UTC string https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
  function getDate(days){
    //var today = new Date();
    //DateObj.toUTCDate();
    todaysDate = new Date();
    returnDate = todaysDate.toUTCString();
    if(days){
      var modDate = todaysDate.getDate() + days;
      var remove = todaysDate.getDate();
      returnDate = returnDate.replace(RegExp(remove), modDate);
    }
    return returnDate;
  }

  function length(){}
  return obj;
}
