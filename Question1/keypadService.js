(function(){
	'use strict';
	angular.module('mobileApp')
	.factory('keypad',[keypad]);

function keypad(){
	var keypad = [
					{key : 1, values : []},
					{key : 2, values : ['A','B','C']},
					{key : 3, values : ['D','E','F']},
					{key : 4, values : ['G','H','I']},
					{key : 5, values : ['J','K','L']},
					{key : 6, values : ['M','N','O']},
					{key : 7, values : ['P','Q','R','S']},
					{key : 8, values : ['T','U','V']},
					{key : 9, values : ['W','X','Y','Z']},
					{key : 10, values : []},
					{key : 11, values : []},
					{key : 12, values : []},
				 ];

	var o = {keypad: keypad};
	return o;
	}

})();