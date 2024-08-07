$(document).ready(function () {
  //Slider
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: false,
    slideWidth: 1200,
    responsive: true
  });

  //Posts
  var posts = [
    {
      title: "Prueba de titulo",
      date: 'Publicado el dia ' + moment().format("dddd") + ' de ' + moment().format("MMMM"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula augue, iaculis a suscipitvel, condimentum vitae sapien. Pellentesque consectetur vel enim at suscipit.'
    },
    {
      title: "Prueba de titulo 2",
      date: 'Publicado el dia ' + moment().format("dddd") + ' de ' + moment().format("MMMM"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula augue, iaculis a suscipitvel, condimentum vitae sapien. Pellentesque consectetur vel enim at suscipit.'
    },
    {
      title: "Prueba de titulo 3",
      date: 'Publicado el dia ' + moment().format("dddd") + ' de ' + moment().format("MMMM"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula augue, iaculis a suscipitvel, condimentum vitae sapien. Pellentesque consectetur vel enim at suscipit.'
    },
    {
      title: "Prueba de titulo 4",
      date: 'Publicado el dia ' + moment().format("dddd") + ' de ' + moment().format("MMMM"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula augue, iaculis a suscipitvel, condimentum vitae sapien. Pellentesque consectetur vel enim at suscipit.'
    }
  ]
  var post
  posts.forEach((item, index) => {
    post = `
     <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                    ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
                `
    $("#posts").append(post);
  })

  // Selector de tema
  var theme = $("#theme")
  $('#to-green').click(function () {
    theme.attr("href", "/css/green.css")
  })

  $('#to-blue').click(function () {
    theme.attr("href", "/css/blue.css")
  })

  $('#to-red').click(function () {
    theme.attr("href", "/css/red.css")
  })

  // Scroll arriba
  $('.subir').click(function (e) {
    e.preventDefault()
    $('html, body').animate({
      scrollTop: 0
    }, 500)
  })

  $("#login form").submit(function () {
   var form_name =  $("#form_name").val()
   localStorage.setItem("form_name", form_name)
  })

  var form_name = localStorage.getItem("form_name")
  if(form_name != null && form_name != "undefined"){
    var about_parrafo = $("#about p")
    about_parrafo.html("<br><strong>Bienvenido, "+ form_name +"</strong>")
    about_parrafo.append("<a href='#' id= 'logout'>Cerrar sesión</a>")
    $("#login").hide()

    $("#logout").click(function () {
      localStorage.clear()
      location.reload()
    })
  }

  

});
