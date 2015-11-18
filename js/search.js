$(document).ready(function(){

  function showResult(keyWords,bookmarks){
    $("ul").html("");
    var reg = new RegExp(keywords,"ig");
    var selectedData = bookmarks.filter(function(item){
      return reg.test(item.title);
    }).map(function(item){
      return item.title.replace(reg,'<span class="hightlightStyle">$1</span>');
    });
    appendBookmarks(selectedData);
  }

  $("#keywordInput").bind("input propertychange",function(){
     var self = this;
     $.ajax({
       url:"bookmarks.json",
       type:"get",
       dataType:"json",
       success:function(data){
         var inputWords = $(self).val();
         showResult(inputWords,data);
       }
     })
  });

});

function timeFormat(timeStamp){
  var date = new Date(parseInt(timeStamp));
  return 'created@' + date.getFullYear() + '-' + (date.getMonth()+1) + '-' + (date.getDate()+1);
}
function appendBookmarks(data){
  var searchResult = data.reduce(function(str,item){
    str+="<li>"+item.title+"</li>";
    str+="<li>"+timeFormat(item.created)+"</li>";
    str+="<hr>";
    return str;
  },"");
  $('ul').html(searchResult);
}
