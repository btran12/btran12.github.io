
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
    $http.get('http://api.nytimes.com/svc/topstories/v2/' + currentSect +  '.json?api-key=bea40c42e52f4f53a83d7531ed89deab')
      .success(function(newsData) {
        $scope.news = newsData.results;
        articleData = newsData.results;
      });
  }

  $scope.queryNews = function(_section){
    currentSect = _section;
    fetchNews();
  }

});

app.controller('ArticleController', function($scope, $routeParams) {
    $scope.article = articleData[$routeParams.id];
});

//Capitalize the first letter filter
app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

app.filter('timesdate', function() {
  return function(input){
    var date = input.split('T')[0];
    var splitdate = date.split('-');
    var year = splitdate[0];
    var month = splitdate[1];
    var day = splitdate[2];
    return month + "/" + day + "/" + year;
  }
});
