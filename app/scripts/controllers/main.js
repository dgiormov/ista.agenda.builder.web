'use strict';

/**
 * @ngdoc function
 * @name istaAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the istaAngularApp
 */
angular.module('istaAngularApp')
	.controller('MainCtrl', function($scope, session, PersonService) {
		$scope.selected = false;
		$scope.sessions = session.query({
			date: 26
		});

		//classes
		$scope.getTrackClass = function(track) {
			return track.replace(" ", "-").toLowerCase();
		}
		$scope.changeDate = function(date) {
			debugger;
		}
		$scope.addSession = function(session, $event) {
			$event.preventDefault();
			new PersonService().$save({
				id: session.id,
				isSelected: !session.isSelected
			}, function() {
				session.isSelected = !session.isSelected;
			});
		}
		$scope.isSelected = function(isSelected) {
			if (isSelected) {
				return "session-added"
			} else {
				return "not-added"
			}
		}
		$scope.isChecked = function(isSelected) {
			if (isSelected) {
				return "fa-check"
			} else {
				return "fa-plus"
			}
		}
		$scope.filterSessions = function(willFilter) {
			$scope.selected = willFilter;
		}
		$scope.getSelectedAgendaClass = function(myAgenda) {
			if (($scope.selected && myAgenda) || (!$scope.selected && !myAgenda)) {
				return "panel-link-active"
			} else {
				return "";
			}
		}
	})
	.filter('isSelectedElement', function() {
		return function(items, isSelected) {
			if (!isSelected) {
				return items;
			}
			var res = [];
			for (var i = 0; i < items.length; i++) {
				if (items[i].isSelected) {
					res.push(items[i]);
				}
			}
			return res;
		};
	});