function salvar() {
  var posts = JSON.parse(localStorage["posts"]);

  posts.push({titulo: $("#titulo").val(), corpo: $("#corpo").val(), autor: $("#autor").val(), data: new Date()});
  localStorage["posts"] = JSON.stringify(posts);

  $("#formulario").reset();
  return false;
}

$(document).ready(function() {
  if (Modernizr.localstorage) {
    if (localStorage["posts"] == undefined) {
      localStorage["posts"] = JSON.stringify([]);
    }

    if ($("#conteudo").length > 0) {
      var posts = JSON.parse(localStorage['posts']);
      for (var post in posts) {
        var article = $("<article>");
        $("<h1>").append($('<a>').html(posts[post].titulo)).appendTo(article);
        $("<section>").html(posts[post].corpo).appendTo(article);
        $("<span>").html(posts[post].autor).appendTo(article);
        $('<span>').html(new Date(posts[post].data).toLocaleDateString()).appendTo(article);
        $('<section>').addClass("texto").html(posts[post].corpo).appendTo(article);
        $("#conteudo").append(article) ;
      }
    } else {
      $("#salvar").click(salvar);
    }
  }
});
