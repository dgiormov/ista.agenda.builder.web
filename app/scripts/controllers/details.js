'use strict';

/**
 * @ngdoc function
 * @name istaAngularApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the istaAngularApp
 */
angular.module('istaAngularApp')
  .controller('DetailsCtrl', function($scope, $routeParams, sessionDetails, sessionComments, sessionCommentsLike, RatingService, SpeakerRatingService, PersonService, shareService) {

    $scope.host = 'Speaker';
    $scope.session = sessionDetails.get({
      id: $routeParams.id
    }, function() {
      var speakers = $scope.session.speakers;
      if (speakers.length > 1) {
        $scope.host = 'Speakers';
      } else if (speakers.length === 1 && speakers[0].name === 'Organizers') {
        $scope.host = 'Staff';
      }

      for (var i = 0; i < speakers.length; i++) {
        $scope.bioStatus[i] = 'description-collapsed';
      }
    });

    $scope.addSession = function(session) {
      new PersonService().$save({
        id: session.id,
        isSelected: !session.isSelected
      }, function() {
        session.isSelected = !session.isSelected;
      }, function() {});
    };

    $scope.refreshComments = function() {
      $scope.comments = sessionComments.query({
        'session_id': $routeParams.id
      });
      $scope.comment = '';
    };
    $scope.refreshComments();
    $scope.postComment = function() {
      sessionComments.save({
        'session_id': $routeParams.id
      }, {
        data: $scope.comment
      }, function() {
        $scope.refreshComments();
      }, function() {});
    };


    $scope.rateSession = function(stars, session) {
      new RatingService().$save({
        sessionId: session.id,
        rating: stars
      }, function() {
        $scope.session.rating = stars;
      }, function() {
        $scope.session.rating = 0;
      });
    };

    $scope.rateSpeaker = function(stars, session) {
      new SpeakerRatingService().$save({
        sessionId: session.id,
        rating: stars
      }, function() {
        $scope.session.speakerRating = stars;
      }, function() {
        $scope.session.speakerRating = 0;
      });
    };

    $scope.like = function(comment) {
      sessionCommentsLike.save({
        'id': comment.id
      }, {}, function() {
        comment.likedByMe = !comment.likedByMe;
        if (comment.likedByMe) {
          comment.likes = comment.likes + 1;
        } else {
          comment.likes = comment.likes - 1;
        }
      }, function() {});
    };


    $scope.share = function() {
        shareService.get();
      };
      //////////////////////// Dynamic class selection ///////////////////////////
    $scope.descrClass = 'description-collapsed';
    $scope.bioStatus = [];

    $scope.getSpeakerStarClass = function(starNumber) {
      if (starNumber <= $scope.session.speakerRating) {
        return 'yes-rated';
      } else {
        return 'not-rated';
      }
    };

    $scope.getSessionStarClass = function(starNumber) {
      if (starNumber <= $scope.session.rating) {
        return 'yes-rated';
      } else {
        return 'not-rated';
      }
    };

    $scope.isAdded = function(outer) {
      if (!$scope.session.isSelected) {
        if (outer) {
          return 'not-added';
        } else {
          return 'fa-plus';
        }
      } else {
        if (outer) {
          return 'session-added';
        } else {
          return 'fa-check';
        }
      }
    };

    $scope.getTrackClass = function(session) {
      if (session.$resolved) {
        return session.track.replace(' ', '-').toLowerCase();
      } else {
        return '';
      }
    };
    $scope.expandColapse = function() {
      if ($scope.descrClass === 'description-expanded') {
        $scope.descrClass = 'description-collapsed';
      } else {
        $scope.descrClass = 'description-expanded';
      }
    };

    $scope.expandColapseBio = function(indexBio) {
      if ($scope.bioStatus[indexBio] === 'description-expanded') {
        $scope.bioStatus[indexBio] = 'description-collapsed';
      } else {
        $scope.bioStatus[indexBio] = 'description-expanded';
      }
    };

    $scope.getBioClass = function(indexBio) {
      return $scope.bioStatus[indexBio];
    };

    $scope.hasPicture = function(speaker) {
			return !(speaker.picture === 'undefined' || speaker.picture === '');
    };



  });
