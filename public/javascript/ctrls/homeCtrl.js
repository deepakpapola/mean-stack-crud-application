
app.controller('homeCtrl',function($http,$scope){

	//var vm = this;
	$scope.users=[];
	$scope.detailedUser;

	$scope.showDetails=function(User){
		$scope.detailedUser=User;
		$scope.detailed=true;
	}

	$scope.getUsers = function(){
		$http.get('/api/users').then(function(response){
			$scope.users = response.data;
		});
	}
	$scope.getUsers();


//remove  user
	$scope.removeUser=function(User){
		$http.delete('/api/users/'+User._id).then(function(response){
			$scope.getUsers();
		});
	}

//update user
	$scope.update=function(User){
		//console.log(User);
		$http.put('/api/users', User).then(function(response){
			console.log('updated user');
			$scope.getUsers();
		});

	};

//add user
	$scope.add=function(){
		//console.log($scope.user);
		$http.post('/api/users',$scope.user).then(function(response){
			$scope.user.name = '';
			$scope.user.age="";
			$scope.getUsers();
		})
	};

});