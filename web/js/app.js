angular
	.module( "app", [] )
	.config( [ '$httpProvider', function($httpProvider) {
	
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		
    }
]);