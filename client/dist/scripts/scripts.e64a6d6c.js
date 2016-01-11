"use strict";angular.module("clientApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","analytics.mixpanel"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("analytics.mixpanel").config(["$mixpanelProvider",function(a){a.apiKey("1840988862eca86edd2dacc90144f3aa")}]),angular.module("clientApp").controller("MainCtrl",["$scope","$anchorScroll","$location","$http","$mixpanel",function(a,b,c,d,e){e.track("page visited");var f="Hi I'm Blake, a software engineer and designer.";a.type="",a.sendBtn="Send Message",a.mailInfo={};var g=0;setInterval(function(){g<f.length&&(a.type=a.type.replace("|",""),g==f.length-1?a.type+=f[g]:a.type+=f[g]+"|",g++),a.$apply()},100),a.scrollTo=function(a){e.track("topnav click: "+a);var d=c.hash();c.hash(a),b(),c.hash(d)},a.trackNav=function(a){e.track("navigated to: "+a)},a.sendMail=function(b){e.track("send message");var c={sender:b.email,textBody:b.message};a.sendBtn="Sending...";var f=d.post("main/email",c);f.success(function(b){a.mailInfo={},a.messageSent=!0,a.sendBtn="Send Another?"}),f.error(function(a){console.log(a)})}}]),angular.module("clientApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("clientApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="header"> <div class="navbar-default" role="navigation"> <div class="container"> <div class="navbar-header"> <span class="bp-blue small"></span> <button class="navbar-toggle collapsed" data-target="#js-navbar-collapse" data-toggle="collapse" type="button"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav"> <li> <a class="pointer" ng-click="scrollTo(\'skills\')">Skills</a> </li> <li> <a class="pointer" ng-click="scrollTo(\'achievements\')">Achievements</a> </li> <li> <a class="pointer" ng-click="scrollTo(\'find\')">Find me</a> </li> <li> <a class="pointer" ng-click="scrollTo(\'info\')">Contact Me</a> </li> </ul> <span class="bp-blue large"></span> </div> </div> </div> </div> <div class="intro-row"> <img class="blake" src="/images/blake.228e9566.jpg"> <div class="intro">{{type}}</div> </div> <div class="jagged"></div> <div class="second"> <div class="container"> <h3 class="cursive" id="skills">Skills</h3> <div class="sub">List of my specialties</div> <ul> <li class="col-sm-12 col-md-4 list"> <i class="icon-javascript three-x"></i> <span class="onehalf-x">Javascript</span> <div>I love javascript. I tend to write front-end code in angular or backbone.</div> </li> <li class="col-sm-12 col-md-4 list"> <i class="icon-nodejs three-x"></i> <span class="onehalf-x">Node.js</span> <div>Node is awesome. I tend to write the majority of my backend services in node.</div> </li> <li class="col-sm-12 col-md-4 list"> <i class="icon-php-alt three-x"></i> <span class="onehalf-x">PHP</span> <div>I worked on the Edmodo backend API which used a whole lot of PHP.</div> </li> </ul> <ul> <li class="col-sm-12 col-md-4 list"> <i class="icon-ruby three-x"></i> <span class="onehalf-x">Ruby</span> <div>I\'ve also written some backend services and testing scripts in ruby!</div> </li> <li class="col-sm-12 col-md-4 list"> <i class="icon-postgres three-x"></i> <span class="onehalf-x">SQL</span> <div>I have lots of experience working with SQL and understand how to design complex and performant database schemas.</div> </li> <li class="col-sm-12 l col-md-4 list"> <i class="icon-cassandra three-x"></i> <span class="onehalf-x">NoSQL</span> <div>Huge fan of NoSQL. I\'ve worked with couchdb, mongodb, and aerospike.</div> </li> </ul> </div> </div> <div class="third"> <div class="container"> <h3 class="cursive" id="achievements">Achievements</h3> <div class="sub">Places I\'ve worked. Things I\'ve done</div> <ul> <li class="col-sm-12 col-md-4 list edmodo achievements"> <img class="edmodo-img" src="/images/edmodo.a82eb945.png"> <span class="onehalf-x">Edmodo</span> <div>I worked at Edmodo, where I worked on various projects from the backend API to front end landing pages</div> </li> <li class="col-sm-12 col-md-4 list achievements fonts"> <i class="fa fa-bolt three-x"></i> <span class="onehalf-x">RosterBlitz</span> <div>I founded <a href="https://www.rosterblitz.com">RosterBlitz</a>, the premier sports quizzing website on the internet.</div> </li> <li class="col-sm-12 col-md-4 list achievements fonts"> <i class="fa fa-building three-x"></i> <span class="onehalf-x">NCTI</span> <div>I worked at NCTI where I built a beautiful node/angular app from scratch.</div> </li> </ul> </div> </div> <div class="second"> <div class="container contact"> <h3 class="cursive" id="find">Find me</h3> <div class="sub">Links and stuff</div> <ul> <li class="col-sm-12 col-md-4 list"> <i class="fa fa-github-alt three-x"></i> <span class="onehalf-x"> <a href="https://www.github.com/blakeparkinson/" target="_blank" ng-click="trackNav(\'github\')">GitHub</a> </span> </li> <li class="col-sm-12 col-md-4 list"> <i class="fa fa-linkedin three-x"></i> <span class="onehalf-x"> <a href="https://www.linkedin.com/in/bparky" target="_blank" ng-click="trackNav(\'linkedin\')">LinkedIn</a> </span> </li> <li class="col-sm-12 col-md-4 list"> <i class="fa fa-facebook three-x"></i> <span class="onehalf-x"> <a href="https://www.facebook.com/blakeparkinson" target="_blank" ng-click="trackNav(\'facebook\')">Facebook</a> </span> </li> </ul> </div> </div> <div class="third"> <div class="container contact"> <h3 class="cursive" id="info">Contact Me</h3> <div class="sub">I do web development, play soccer with you, babysit your kids. Message me and let\'s chat!</div> <ul> <form name="email"> <div class="form-group" ng-class="{ \'has-error\': userForm.email.$invalid }"> <label class="control-label">Your email.</label> <input class="form-control email" name="email" ng-model="mailInfo.email" required> <div> <label class="control-label">What\'s up?</label> </div> <textarea class="form-control" ng-model="mailInfo.message"></textarea> <div class="btn btn-warning" ng-click="sendMail(mailInfo)">{{sendBtn}}</div> </div> </form> </ul> </div> </div>')}]);