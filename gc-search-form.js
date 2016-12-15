(function() {

  'use strict';

  Polymer({

    is: 'gc-search-form',

    properties: {
      employees: {
        type: Array
      },

      _skills: {
        type: Array
      },

      _selectedSkills: {
        type: Array
      },

      _searchType: {
        type: String,
        value: 'or'
      },

      _params: {
        type: Object,
        computed: '_computeRequireAll(_searchType)'
      },

      _formattedSkills: {
        type: Array,
        value: function() {
          return [];
        }
      }
    },

    _computeRequireAll: function(value) {
      return {
        all: (value === 'and').toString()
      };
    },

    _sendSkills: function() {
      var ironAjax = this.$.ironAjaxSend;

      var formatted = this._selectedSkills.map(function(item) {
        return item.name;
      });

      ironAjax.set('params', this._params);

      ironAjax.set('body', {
        'skills': formatted
      });

      ironAjax.generateRequest();
    }

  });

}());
