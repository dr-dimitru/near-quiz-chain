import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.registerHelper('isLoggedIn', () => Meteor.user);
