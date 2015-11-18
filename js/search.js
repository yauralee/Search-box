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
<<<<<<< HEAD:search.js
      item.title.replace(reg,'<span style="background-color:red">'+'$1'+'</span>');
      console.log(item);
      return item;
    })
=======
      return item.title.replace(reg,'<span class="hightlightStyle">$1</span>');
    });
>>>>>>> 2e9c8fceb7c41cd6ef19a3e1b70996f8dc7b8e53:js/search.js
    appendBookmarks(selectedData);
  }

  $("#keywordInput").bind("input propertychange",function(){
     var self = this;
     $.ajax({
       url:"bookmarks.json",
       type:"get",
       dataType:"json",
       success:function(data){
<<<<<<< HEAD:search.js
         var inputWords = $('#keywordInput').val();
=======
         var inputWords = $(self).val();
>>>>>>> 2e9c8fceb7c41cd6ef19a3e1b70996f8dc7b8e53:js/search.js
         showResult(inputWords,data);
       }
     })
  });
<<<<<<< HEAD:search.js
})
=======

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
>>>>>>> 2e9c8fceb7c41cd6ef19a3e1b70996f8dc7b8e53:js/search.js
