angular.module('alurapic').controller('FotosController', function($scope) {
	
	$scope.fotos = [
		{
			titulo : 'Angular',
			url: 'https://cms-assets.tutsplus.com/uploads/users/12/posts/14047/preview_image/angular-js.png'
		},
		{
			titulo : 'Logo',
			url: 'https://cms-assets.tutsplus.com/uploads/users/12/posts/14047/preview_image/angular-js.png'
		},
		{
			titulo : 'Outro angular',
			url: 'https://cms-assets.tutsplus.com/uploads/users/12/posts/14047/preview_image/angular-js.png'
		},
	];
	$scope.filtro = '';

}); 