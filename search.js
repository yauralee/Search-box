$(document).ready(function(){

  function timeFormat(timeStamp){
    var date = new Date(parseInt(timeStamp));
    return "Created@"+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate()+1)；
  }
  function appendBookmarks(data){
    var searchResult = data.reduce(function(str,item){
      str+="<li>"+data.title+"</li>";
      str+="<li>"+timeFormat(data.created)+"</li>";
      str+="<hr>";
      return str;
    },"");
    $('ul').html(searchResult);
  }


  function showResult(keyWords,bookmarks){
    $("ul").html("");
    var reg = new RegExp(keywords,"ig");
    var selectedData = bookmarks.filter(function(item){
      return reg.test(item.title);
    }).map(function(item){
      return item.title.replace(reg,'<span class="hightlightStyle">$1</span>');
    })
    appendBookmarks(selectedData);
  }

  $("#keywordInput").bind("input propertychange",function(){
     $.ajax({
       url:"bookmarks.json",
       type:"get",
       dataType:"json",
       success:function(data){
         var inputWords = $(this).val();
         showResult(inputWords,data);
       }
     })
  });
})
