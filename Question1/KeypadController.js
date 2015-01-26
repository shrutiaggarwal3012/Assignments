(function(){
	'use strict';
	angular.module("mobileApp")
	.controller('KeyPadCtrl',['$scope','suggestionFactory',function($scope,suggestionFactory){
		KeyPadController($scope,suggestionFactory);
	}]);

	function KeyPadController($scope,suggestionFactory)
	{
		$scope.keypad = [
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
		] ;

		$scope.keyEnteries = {keys: [], displayValue : ''};

		var restrictedKeys = [1,10,11,12];

		$scope.keyPressed = function($event)
		{
			
			var scope = angular.element($event.target).scope();
			
			if(restrictedKeys.indexOf(scope.key.key) > -1) 
			{
				alert('Not allowed');
				return;
			}

			console.log(scope.key.key+' is pressed');

			$scope.keyEnteries.keys.push(scope.key);
			$scope.keyEnteries.displayValue += scope.key.key;
			$scope.suggestions = getSuggestions();
			
		};

		$scope.deleteKey = function($event)
		{
			var value = $scope.keyEnteries.displayValue;
			$scope.keyEnteries.displayValue = value.slice(0,value.length-1);
			if($scope.keyEnteries.displayValue == '')
			{	
				$scope.suggestions = '' ;
			} else {
				$scope.suggestions = getSuggestions();
			}
		}

		$scope.getSearchResults = function()
		{
			var searchText = document.getElementById('searchText');
			searchText.value = $scope.keyEnteries.displayValue;
			document.getElementById('cse-search-box').submit();
			console.log("*********");
		} 

		function getSuggestions()
		{
			var PhoneNumber = new suggestionFactory.PhoneNumber($scope.keyEnteries.displayValue);
			PhoneNumber.update_combinations();
			return PhoneNumber.combinations;
		}

	}

})();