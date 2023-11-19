var listaNomes=['Hallowen Ends','Invasores','Circulo de Fogo','Interstellar','Super Mario Bros - O Filme', ' Transformers - O Despertar das Feras', ' Os Vingadores', 'Creed I']



var listaFilmes = [
"https://www.cafecomfilme.com.br/media/k2/items/cache/f525928d26841a773893302587c8b9b0_XL.jpg","https://br.web.img3.acsta.net/c_310_420/pictures/15/07/21/20/26/495789.jpg","https://i0.wp.com/2centavos.com.br/wp-content/uploads/2013/08/pacific-rim-poster.jpg","https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png", "https://www.claquete.com/fotos/filmes/poster/14794_medio.jpg","https://musicart.xboxlive.com/7/83ab6600-0000-0000-0000-000000000002/504/image.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Creed_%28filme%29.jpg/200px-Creed_%28filme%29.jpg"
 ];

var i=0
while(i<listaFilmes.length){
  var container = document.createElement("div");
  container.style.textAlign = "center";
  container.style.display = "inline-block";
  container.style.marginRight = "20px";
  container.style.color = "beige";
  
  
  var imagem = document.createElement("img");
  imagem.src = listaFilmes[i];
  container.appendChild(imagem);
  
  var elementoTexto = document.createElement("p");
  elementoTexto.textContent = listaNomes[i];
  container.appendChild(elementoTexto);
  
  document.body.appendChild(container);
  
  i++
}

