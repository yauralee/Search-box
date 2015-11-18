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

$(document).ready(function(){
  function showResult(keywords,bookmarks){
    $("ul").html("");
    var reg = new RegExp(keywords,"ig");
    var selectedData = bookmarks.filter(function(item){
      return reg.test(item.title);
    }).map(function(item){
      item.title.replace(reg,'<span style="background-color:red">'+'$1'+'</span>');
      console.log(item);
      return item;
    })
    appendBookmarks(selectedData);
  }

  $("#keywordInput").bind("input propertychange",function(){
     $.ajax({
       url:"bookmarks.json",
       type:"get",
       dataType:"json",
       success:function(data){
         var inputWords = $('#keywordInput').val();
         showResult(inputWords,data);
       }
     })
  });
})
