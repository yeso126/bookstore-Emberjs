var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about');
});

App.IndexController = Ember.Controller.extend({
  booksCount: 6,
  logo: 'images/logo.png',
  time: function () {
    return (new Date()).toDateString()
  }.property()
});
