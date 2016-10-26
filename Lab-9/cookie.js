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

	// regex constructor https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  function getData(name){
    var name = name;
		var re = name + "=(\\w*)[;]?"; 
		re = new RegExp(re);
    return document.cookie.match(name) ? re.exec(document.cookie)[1] : null;
  }

	// I dont think that this is 100% proper but it works
	// if the cookie only has one item in it split returns an array with blank string that has a length of 1
  function length(){
		if(document.cookie == ""){return 0;}
		return document.cookie.split(";").length;
	}

  function getCookieValue(offset){
    var endstr = document.cookie.indexOf(";", offset);
    if(endstr == -1){
      endstr = document.cookie.length;
    }
    return document.cookie.substring(offset, endstr);
  }

  // UTC string https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
	// Date() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
	// TODO: needs some work to get working right if the number of day sets it over 31
  function getDate(days){
    var todaysDate = new Date();
		var year = todaysDate.getUTCFullYear();
		var month = todaysDate.getUTCMonth();
		var day = todaysDate.getUTCDate() + days;
		while(day > ){

		}

		var returnDate = new Date(year, month, day);
    return returnDate.toUTCString();
  }

  return obj;
}
