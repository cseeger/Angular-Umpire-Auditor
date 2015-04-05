main.controller('GameController', ['$scope','$routeParams', '$location', 'Game', 'Day', function($scope, $routeParams, $location, Game, Day) {

	var dateArray = []

	var year = $routeParams.year
	var month = $routeParams.month
	var day = $routeParams.day

	Game.show(year, month, day, function(data) {
		$scope.data = data
		$scope.umpire = data.umpire_id
		}
	)

	Day.dates().then(function(data) {
		data.forEach(function(date) {
			dateArray.push(date)
			$scope.disabled = function(date, mode) {
		  	var gameDate = new Date(date)
		  	var parsedDate = '' + gameDate.getYear() + '' + gameDate.getMonth() + '' + gameDate.getDate()
		    return ( mode === 'day' && (dateArray.indexOf(parsedDate) != -1));
		  };
		})

	})

	$scope.dt = null

	$scope.today = Date()


	$scope.submitDate = function() {
		date = $scope.dt
		if(date) {
			var year = date.getFullYear()
			var month = date.getMonth() + 1
			var day = date.getDate()
			$location.path('/games/date/' + year + '/' + month + '/' + day)			
		}
	}



}])