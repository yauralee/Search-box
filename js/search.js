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
  }
});
