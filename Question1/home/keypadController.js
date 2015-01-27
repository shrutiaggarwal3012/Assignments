(function(){
	'use strict';
	angular.module("mobileApp")
	.controller('KeyPadCtrl',['$scope','suggestionFactory',function($scope,suggestionFactory){
		KeyPadController($scope,suggestionFactory);
	}]);

	function KeyPadController($scope,suggestionFactory)
	{
		$scope.keypad = suggestionFactory.PhoneNumber.keypad ;
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
			if(searchText.value == '')
				alert('Enter some number');
			document.getElementById('cse-search-box').submit();
		} 

		function getSuggestions()
		{
			var PhoneNumber = new suggestionFactory.PhoneNumber($scope.keyEnteries.displayValue);
			PhoneNumber.update_combinations();
			return PhoneNumber.combinations.trim().slice(0,-1);
		}
	}
})();