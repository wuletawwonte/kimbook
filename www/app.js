
var db = null;

var app = angular.module('kimBook', ['ngCordova']);

app.run(function($cordovaSQLite) {
    db = $cordovaSQLite.openDB({name: "kimbook.db"});
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS loans (id integer primary key, name text, content text)");
})


app.controller('homeCtrl', function($scope, $cordovaSQLite) {
	var get_loans = function() {
		var query = "SELECT name, content FROM loans";
		$cordovaSQLite.execute(db, query, []).then(function(result){
			if(result.rows.length > 0) {

			$scope.loans = result.rows;
			} else {
				$scope.loans = null;
			}
		}, function(error){
			$scope.loans = null;
		});
	}

	get_loans();

	$scope.add = function (name, content) {
		var query = "INSERT INTO loans (name, content) VALUES (?, ?)";
		$cordovaSQLite.execute(db, query, [name, content]).then(function(result){
			console.log(result.insertId);
		}, function(error){
			console.log(error)
		});		
		get_loans();
	}

})
