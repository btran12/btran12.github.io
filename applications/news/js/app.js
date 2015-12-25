
var app = angular.module('NewsApp', ['ngRoute']);
var currentSect = "home";
var articleData = ""; //Store information about articles.

app.config(function ($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'NewsController'
    })
    .when('/article/:id', {
    	controller: 'ArticleController',
    	templateUrl: 'article.html'
  	})
    .otherwise({
      redirectTo: "/"
    });
});

app.controller('NewsController', function($scope, $http){
  $scope.sections = ["home","world","national","politics","business","opinion","technology","science", "health","sports","arts","fashion","dining","travel","magazine"];

  fetchNews();

  function fetchNews(){
    $http.get('http://api.nytimes.com/svc/topstories/v1/' + currentSect +  '.json?api-key=ff96a20c88b2f4cbfecdd6bcba03c586:9:73827464')
      .success(function(newsData) {
        $scope.news = newsData.results;
        articleData = newsData.results;
      })
  }

  $scope.queryNews = function(_section){
    currentSect = _section;
    fetchNews();
  }

});

app.controller('ArticleController', function($scope, $routeParams) {
    $scope.article = articleData[$routeParams.id];
});
