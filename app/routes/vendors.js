import Ember from 'ember';
import NavBarMixin from 'ember-cli-cordova/mixins/routes/nav-bar';

export default Ember.Route.extend(NavBarMixin, {
  queryParams: {
    viewmode: {
      replace: true
    }
  },

  setupController: function(controller, model) {
    controller.set('city', 'Vancouver');
  },

  nav: {
    controller: 'application',

    title: {
      text: 'Find Vendors'
    },

    leftButton: {
      text: 'Back',
      icon: 'back-icon',
      action: function() {
        this.transitionTo('dashboard');
      }
    },

    rightButton: {
      text: 'Settings',
      icon: 'settings-icon',
      action: function() {
        this.transitionTo('settings');
      }
    },
  },

  actions: {
    didTransition: function() {
      this.controller.set('city', 'Vancouver');
      return true;
    },
  }
});
