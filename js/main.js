$(document).ready(function(){
  // slider con jquery
  if (window.location.href.indexOf("index") > -1) {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      responsive: true,
      pager: true
    });  
  }
  

  // post
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Pueba de titulo 1",
        date: "Publicado el:" + moment().format("Do MMMM YYYY"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora recusandae cumque sequi autem hic neque omnis dicta ex molestiae. Quod mollitia error provident doloremque repellat ipsa sunt at dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos, eveniet quasi perspiciatis facilis impedit eos iste tempora delectus. Unde ipsa dolore sed laboriosam qui laborum ab, aliquid omnis recusandae."
      },
      {
        title: "Pueba de titulo 2",
        date: "Publicado el:" + moment().format("Do MMMM YYYY"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora recusandae cumque sequi autem hic neque omnis dicta ex molestiae. Quod mollitia error provident doloremque repellat ipsa sunt at dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos, eveniet quasi perspiciatis facilis impedit eos iste tempora delectus. Unde ipsa dolore sed laboriosam qui laborum ab, aliquid omnis recusandae."
      },
      {
        title: "Pueba de titulo 3",
        date: "Publicado el:" + moment().format("Do MMMM YYYY"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora recusandae cumque sequi autem hic neque omnis dicta ex molestiae. Quod mollitia error provident doloremque repellat ipsa sunt at dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos, eveniet quasi perspiciatis facilis impedit eos iste tempora delectus. Unde ipsa dolore sed laboriosam qui laborum ab, aliquid omnis recusandae."
      }
    ];

    posts.forEach(item => {
      var post = `
      <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
          ${item.content}
        </p>
        <a href="#" class="button-more">Leer mas</a>
      </article>
      `; 

      $("#posts").append(post);
    });
  }

  // tema consistente
  var theme = $("#theme");
  var localTheme = localStorage.getItem("color");
  
  if (localTheme == "red") {
    theme.attr("href", "css/red.css");
  }else if(localTheme == "green"){
    theme.attr("href", "css/green.css");
  }else if(localTheme == "blue"){
    theme.attr("href", "css/blue.css");
  }
  // cambiar temas
  $("#to-green").click(function(){
    theme.attr("href", "css/green.css");
    localStorage.setItem("color", "green");
  });
  $("#to-blue").click(function(){
    theme.attr("href", "css/blue.css");
    localStorage.setItem("color", "blue");
  });
  $("#to-red").click(function(){
    theme.attr("href", "css/red.css");
    localStorage.setItem("color", "red");
  });

  // subir
  $(".subir").click(function(e){
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  //login falso
  $("#login form").submit(function(){
    var name = $("#name").val();
    localStorage.setItem("form_name", name);
  });

  var form_name = localStorage.getItem("form_name");
  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");
    about_parrafo.html("<strong>Bienvenido, "+form_name+"</strong>");  
    about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>")
    $("#login").hide();

    $("#logout").click(function(){
      localStorage.removeItem("form_name");
      location.reload();
    });
  }

  // acordeon
  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }

  //reloj
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(function(){
      var reloj = moment().format("h:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);    
  }
  
  // validacion formulario contacto
  if (window.location.href.indexOf("contact") > -1) {
    $.validate({
      lang: 'es'
    });
  }

});