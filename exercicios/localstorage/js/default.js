function createItem(tagName, value) {
    var item = document.createElement(tagName);
    var text = document.createTextNode(value);
    item.appendChild(text);
    return item;
}

function salvar() {
  var formTitulo = document.getElementById("titulo").value;
  var formAutor = document.getElementById("autor").value;
  var formCorpo = document.getElementById("corpo").value;
  var formData = new Date();
  var posts = JSON.parse(localStorage["posts"]);
  posts.push({titulo: formTitulo, corpo: formCorpo, autor: formAutor, data: formData});

  localStorage["posts"] = JSON.stringify(posts);

  document.getElementById("titulo").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("corpo").value = "";

  return false;
}

if (Modernizr.localstorage) {
  if (localStorage["posts"] == undefined) {
    localStorage["posts"] = JSON.stringify([]);
  }

  if (document.getElementById("result") != undefined) {
    var posts = JSON.parse(localStorage['posts']);
    for (var post in posts) {
      var titulo = createItem('h1', posts[post].titulo);
      var corpo   = createItem('section', posts[post].corpo);
      var autor  = createItem('span', posts[post].autor);
      var data   = createItem('span', new Date(posts[post].data).toLocaleDateString());
      var article = document.createElement("article");
      article.appendChild(titulo);
      article.appendChild(autor);
      article.appendChild(data);
      article.appendChild(corpo);
      document.getElementById("result").appendChild(article);
    }
  } else {
    document.getElementById("salvar").onclick = salvar;
  }
}
