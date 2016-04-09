
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
