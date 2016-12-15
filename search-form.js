(function() {

  'use strict';

  Polymer({

    is: 'search-form',

    properties: {
      skills: {
        type: Array
      },
      selectedSkills: {
        type: Array
      }
    },

    _sendSkills: function() {
      var ironAjax = this.$.ironAjaxSend;

      ironAjax.set('body', {
        'skills': this.selectedSkills
      });

      ironAjax.generateRequest();
    }

  });

}());
