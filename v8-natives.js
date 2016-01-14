v8 = Meteor.isClient ? this.v8 : (Meteor.isServer ? Npm.require('v8-natives') : null);
