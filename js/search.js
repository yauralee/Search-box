new Vue({
  el: "#bookmarks",

  data: {
    mark: "",
    bookmarks: []
  },

  ready: function() {
    this.$http.get('bookmarks.json', function(data, status, request) {
      this.$set('bookmarks', data);
    });
  },

  methods: {
    highlightText: function(text) {
      return "<span class='highlight'>" + text + "</span>";
    }
  },


  filters: {
      highlight: function(value) {
        var reg = /code/gi;
        return value.replace(reg, this.highlightText('$&'));
      }
  }
});
