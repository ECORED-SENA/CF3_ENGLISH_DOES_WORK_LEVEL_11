<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Useful expressions for debating] (Expresiones útiles para debatir)
    .bg-2-1.margin-n.p-5.mb-5
      div(style="background-color: #aabcf7").pt-4
        .row.justify-content-center.mb-5.g-lg-0
          .col-lg-3.col-7.mb-lg-0.mb-3
            div.img-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.svg')})`}").h-100
          .col-lg-6.mb-lg-0.mb-3 
            .card-bg-2.p-3.h-100
              .row.justify-content-center.g-2
                .col-lg-6
                  .tarjeta.color-acento-botones--borde.p-4(style="background-color: #e1e8ff ").border-2.h-100
                    h5.text-center 
                      span.r--4.fst-italic Giving your opininion
                    .margin-t(style="background-color: #3c3fa7 ").p-2.mb-4
                      p.fst-italic.fw-bold.text-center.mb-0.text-white Introducing your argument 
                    ul.lista-ul--color.fst-italic
                      li.mb-0
                        i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                        | I ask you to consider…
                      li.mb-0
                        i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                        | It is obvious that…
                      li.mb-0
                        i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                        | My position is that…
                      li.mb-0
                        i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                        | In my opinion,…
                      li.mb-0
                        i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                        | I think that..
                .col-lg-6
                  .tarjeta.color-acento-botones--borde.p-3(style="background-color: #e1e8ff ").border-2.h-100
                    h5.text-center
                      span.r--4.fst-italic Giving your opininion
                    .margin-t(style="background-color: #3c3fa7 ").p-2.mb-4
                      p.fst-italic.fw-bold.text-center.mb-0.text-white  Developing your argument
                    ul.lista-ul--color.fst-italic
                      li.mb-0
                        i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                        | Reason is that…
                      li.mb-0
                        i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                        | Moreover, …
                      li.mb-0
                        i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                        | Next, ...
                      li.mb-0
                        i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                        | Again, …
                      li.mb-0
                        i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                        | Without doubt, ...
          .col-lg-3.col-7.mb-lg-0.mb-3
            div.img-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/2.svg')})`}").h-100
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/3.png', alt='')
      .col-lg-7(data-aos="fade-left")
        traductor.color-acento-contenido
            div(slot="textoIngles")
              p.fst-italic  In this thematic unit we will learn to use helpful expressions when debating that allow us to present, support, concede, and refute arguments, making our speech better presented in the debate.
                br
                br
                |Next, we will talk about style, which refers to the way debaters speak and deliver their speeches. To get higher style marks, speakers will need to make their communication effective and impactful. The following are a few tips which could be of use to speakers looking to improve the stylistic aspects of their speeches. We are invited to explore the video below:
            div(slot="textoEspanol")
              p En esta unidad temática, aprenderemos a usar expresiones útiles a la hora de debatir, las cuales nos permiten presentar, respaldar, conceder y refutar argumentos, haciendo que nuestro discurso se presente mejor en el debate. 
                br
                br
                |A continuación, hablaremos del estilo, que se refiere a la forma en que los debatientes hablan y pronuncian sus discursos. Para obtener calificaciones de estilo más altas, los oradores deberán hacer que su comunicación sea efectiva e impactante. Los siguientes son algunos consejos que podrían ser útiles para los oradores que buscan mejorar los aspectos estilísticos de sus discursos. Se invita a explorar el video que se presenta a continuación:
              
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .bg-2-2.margin-n.p-5.pb-0.mb-5
      p 
        span.fw-bold.fst-italic The following dialogue will allow us to enter the theme. When we want to express opinions and ideas in different ways that allow us to have a debate. For example: 
        span.r--g / El siguiente diálogo nos permitirá adentrarnos en el tema. Cuando nosotros deseamos expresar opiniones e ideas de diferentes maneras que nos permitan mantener un debate. Por ejemplo:
      .row.justify-content-center.g-0
          .col-lg-4
            div.img-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/4.svg')})`}").h-100
          .col-lg-8
            .bg-white.p-5
              DialogoChat(:dialogo="dialogoChat").color-acento-botones.noname.dialogocolores
    .bg-2-3.margin-n.p-5.pb-0.mb-5
      .row.justify-content-center.g-0.mb-4
          .col-lg-3
            div.img-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/9.png')})`}").h-100
          .col-lg-9
            .p-5.px-3(style="background-color: #f0f4ff")
              .tarjeta.bg-white.p-5.mx-5
                h5.text-center.fst-italic
                  span.r--4 Expressions that connect in a better way #[br] the discourse of the debate.
                SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-6")
                  .tarjeta-avatar
                    img(src='@/assets/curso/temas/tema2/5.svg' alt='AvatarTop' style="width: 250px")
                    .tarjeta.w-100.h-100(style="background-color: #e1e8ff ")
                      .p-4.mt-4
                        h6.text-center.fst-italic  Expressions to present ideas
                        .tarjeta.bg-white.p-3.py-1
                          ul.lista-ul--color
                            li
                              i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                              p.mb-0.fst-italic(style="color: #3c3fa7 ") The most important argument for ... is …
                            li
                              i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                              p.mb-0.fst-italic(style="color: #3c3fa7 ") The main idea/thing is ...
                  .tarjeta-avatar
                    img(src='@/assets/curso/temas/tema2/6.svg' alt='AvatarTop' style="width: 250px")
                    .tarjeta.w-100.h-100(style="background-color: #e1e8ff ")
                      .p-4.mt-4
                        h6.text-center.fst-italic  Argumentative expressions
                        .tarjeta.bg-white.p-3.py-1
                          ul.lista-ul--color
                            li
                              i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ") 
                              p.mb-0.fst-italic(style="color: #3c3fa7 ") While you might say that ..., it's important to remember that ...
                            li
                              i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ") 
                              p.mb-0.fst-italic(style="color: #3c3fa7 ") I agree with you that ... On the other hand, ...
                  .tarjeta-avatar
                    img(src='@/assets/curso/temas/tema2/7.svg' alt='AvatarTop' style="width: 250px")
                    .tarjeta.w-100.h-100(style="background-color: #e1e8ff ")
                      .p-4.mt-4
                        h6.text-center.fst-italic  Expressions to counterclaim
                        .tarjeta.bg-white.p-3.py-1
                          ul.lista-ul--color
                            li
                              i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                              p.mb-0.fst-italic(style="color: #3c3fa7 ") It is unjustifiable to say that...
                              li
                                i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ")
                                p.mb-0.fst-italic(style="color: #3c3fa7 ") I don´t believe that...
                  .tarjeta-avatar
                    img(src='@/assets/curso/temas/tema2/8.svg' alt='AvatarTop' style="width: 250px")
                    .tarjeta.w-100.h-100(style="background-color: #e1e8ff ")
                      .p-4.mt-4
                        h6.text-center.fst-italic  Concessive expressions
                        .tarjeta.bg-white.p-3.py-1
                          ul.lista-ul--color
                            li
                              i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ") 
                              p.mb-0.fst-italic(style="color: #3c3fa7 ") My final thought is … 
                            li
                              i.fas.fa-circle.fa-xs(style="color: #3c3fa7 ") 
                              p.mb-0.fst-italic(style="color: #3c3fa7 ") Let me recap/recapitulate my point ...
    .bg-2-4.margin-n.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/10.svg', alt='')
        .col-lg-10(data-aos="fade-left")
          .tarjeta.bg-white.p-2.px-3
            p.mb-0 
              span.fw-bold.fst-italic A film director meets his partner on the #[span.r--2 production set], and they engage in a debate about very luxurious cars. We are invited to explore the video below: 
              span.r--g / Un director de cine se encuentra con su compañero en el set de producción y entablan un debate acerca de carros muy lujosos. Se invita a explorar el díalogo que se presenta a continuación:
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.color-primario--borde.border-2.overflow-hidden(style="background-color: #edf1fd ")
            div.w-100(style="background-color: #6b8dfc ").p-3
              h4.fst-italic.mb-0 Debating in the set
            .contenedor-dialogo.p-4
              DialogoChat(:dialogo="dialogoChat2").color-acento-botones
    .tarjeta.color-acento-contenido.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/9.svg', alt='')
        .col-lg-11(data-aos="fade-left")
          p.mb-0 #[em #[b Let’s see some examples of sentences with expressions for debating:]] / Veamos algunos ejemplos de frases con expresiones para debatir:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5.bg-2-5.px-4(titulo="<em>Expressions to present ideas</em>" :icono="require('@/assets/curso/temas/tema2/11.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4.fst-italic
              span.r--4  Expressions to present ideas
            p 
              span.fst-italic For example:  
              span.r--g Por ejemplo:
            TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-white(
                texto="It seems to me that the team has lost already."
                :audio="require('@/assets/curso/audios/1.mp3')"
              )
            p.ms-4 Me parece que el equipo ya ha perdido.
            TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-white(
                texto="It's a terrible deal as far as I'm concerned."
                :audio="require('@/assets/curso/audios/1.mp3')"
              )
            p.ms-4 Es un trato terrible en lo que a mí respecta.
            TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-white(
                texto="Most people think that carbohydrates are not healthy."
                :audio="require('@/assets/curso/audios/1.mp3')"
              )
            p.ms-4 La mayoría de la gente piensa que los carbohidratos no son saludables.
          .col-md-6
            .tarjeta.color-acento-botones--borde.border-2.p-3(style="background-color: #ffffff " )
              .titulo-icono.mb-4
                h4.ms-5.mb-0 Expressions to present ideas
              .ms-5 
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="I would argue that /I would say that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="In my view"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="It seems that / It seems to me that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="I tend to think that/ I feel that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="As far as I am concerned"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="Some people argue that / Some people think that / Most people say that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="It is understood that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="There is a tendency to believe that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="One of the main arguments in favor of/against"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
      .py-4.py-md-5.bg-2-5.px-4(titulo="<em>Argumentative expressions </em> <br> / Expresiones argumentativas" :icono="require('@/assets/curso/temas/tema2/11.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4
              span.r--4.fst-italic   Argumentative expressions
              span.r--g Expresiones argumentativas
            p 
              span.fst-italic For example:  
              span.r--g Por ejemplo:
            TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-white(
                texto="On the whole, young adults miss the opportunity to enjoy that stage of their life."
                :audio="require('@/assets/curso/audios/1.mp3')"
              )
            p.ms-4 En general, los jóvenes adultos pierden la oportunidad de disfrutar de esa etapa de su vida. 
            TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-white(
                texto="More often than not, the court system fails people."
                :audio="require('@/assets/curso/audios/1.mp3')"
              )
            p.ms-4 La mayoría de las veces, el sistema judicial le falla a la gente.
            TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-white(
                texto="You are welcome to come along, provided that you come with your parents."
                :audio="require('@/assets/curso/audios/1.mp3')"
              )
            p.ms-4 Eres bienvenido a venir, siempre que vengas con tus padres.
          .col-md-6
            .tarjeta.color-acento-botones--borde.border-2.p-3(style="background-color: #ffffff " )
              .titulo-icono.mb-4
                h4.ms-5.mb-0 Argumentative expressions
              .ms-5 
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="On the whole"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="I think it is a good idea"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="Generally speaking"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="More often than not"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="Taking into consideration"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="You might not want to"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="Provided that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
      .py-4.py-md-5.bg-2-5.px-4(titulo="<em>Expressions to counterclaim</em> <br> / Expresiones para contraargumentar" :icono="require('@/assets/curso/temas/tema2/11.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4.fst-italic
              span.r--4 Expressions to counterclaim /
              span.r--g Expresiones para contraargumentar
            p 
              span.fst-italic For example:  
              span.r--g Por ejemplo:
              TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-white(
                  texto="Some religious people find it hard to accept the theory of evolution."
                  :audio="require('@/assets/curso/audios/1.mp3')"
                )
              p.ms-4 Algunas personas religiosas encuentran difícil aceptar la teoría de la evolución.
              TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-white(
                  texto="Critics argue that the movie could have had a better ending."
                  :audio="require('@/assets/curso/audios/1.mp3')"
                )
              p.ms-4 Los críticos argumentan que la película podría haber tenido un final mejor.
              TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-white(
                  texto="I'm not certain whether we are going to have a day off next week or not."
                  :audio="require('@/assets/curso/audios/1.mp3')"
                )
              p.ms-4 No estoy seguro de si vamos a tener un día libre la próxima semana o no.
          .col-md-6
            .tarjeta.color-acento-botones--borde.border-2.p-3(style="background-color: #ffffff " )
              .titulo-icono.mb-4
                h4.ms-5.mb-0 Expressions to counterclaim
              .ms-5 
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="I am unconvinced that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="I don´t believe that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="Some people find it hard to accept that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="There is little evidence that supports the idea that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="It is unjustifiable  that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="I disagree with the view"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="I argue that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="I am not certain whether"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
      .py-4.py-md-5.bg-2-5.px-4(titulo="<em>Concessive expressions</em> <br> / Expresiones concesivas" :icono="require('@/assets/curso/temas/tema2/11.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4.fst-italic
              span.r--4 Concessive expressions
              span.r--g / Expresiones concesivas 
            p 
              span.fst-italic For example:  
              span.r--g Por ejemplo:
              TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-white(
                  texto="Despite the fact that literacy indicators are lower than last year, they are still above the minimum required."
                  :audio="require('@/assets/curso/audios/1.mp3')"
                )
              p.ms-4 A pesar de que los indicadores de alfabetización son más bajos que el año pasado, todavía están por encima del mínimo requerido.
              TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-white(
                  texto="It could be argued that the crime victim should not be punished if she was trying to defend herself.     "
                  :audio="require('@/assets/curso/audios/1.mp3')"
                )
              p.ms-4 Se podría argumentar que la víctima del delito no debería ser castigada si estaba tratando de defenderse.
              TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-white(
                  texto="Admittedly, recent events have shown that emergency protocols are not effective enough.    "
                  :audio="require('@/assets/curso/audios/1.mp3')"
                )
              p.ms-4 Ciertamente, los acontecimientos recientes han demostrado que los protocolos de emergencia no son lo suficientemente efectivos.
          .col-md-6
            .tarjeta.color-acento-botones--borde.border-2.p-3(style="background-color: #ffffff " )
              .titulo-icono.mb-4
                h4.ms-5.mb-0 Concessive expressions
              .ms-5 
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="While/Although"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="Despite the fact that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="Even though"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="It could be argued that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="Admittedly/Certainly"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="But/However"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
                TarjetaAudio.color-acento-botones.mb-1.text-small.border-1.bg-botones.text-white(
                    texto="It may be true that"
                    :audio="require('@/assets/curso/audios/1.mp3')"
                  )
    p.mb-5(data-aos='fade-right')
      span.r--1.fw-bold.fst-italic Now let's test how much you learned about the different types of expressions for debating. Listen to and complete the following dialogue. 
      span.r--g / Ahora, probemos cuánto aprendió sobre los diferentes tipos de expresiones para debatir. Escuche y complete el siguiente diálogo.
    Dialogo.color-primario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) To practice types of expressions
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.
</template>

<script>
import traductor from '@/components/tarjetaTraductor.vue'
import DialogoChat from '@/components/DialogoChat.vue'
export default {
  name: 'Tema2',
  components: {
    DialogoChat,
    traductor,
  },
  data: () => ({
    dialogo: {
      personajes: [
        {
          nombre: 'Fabio',
          img: require('@/assets/curso/temas/tema2/fabio.svg'),
        },
        {
          nombre: 'Patricia',
          img: require('@/assets/curso/temas/tema2/patricia.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Fabio',
          textoIng:
            'Do you think that? Despite the *** that many hunters only hunt for “trophies” and waste the meat?',
          textoEsp: '',
          audio: require('@/assets/curso/audios/1.mp3'),
          palabra: 'fact',
        },
        {
          personaje: 'Patricia',
          textoIng:
            'There is little *** that supports that idea. In fact, research shows that 85% of hunters either keep the meat to eat or give it to someone else for food.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/1.mp3'),
          palabra: 'evidence',
        },
      ],
    },
    dialogoChat: {
      personajes: [
        {
          nombre: 'Fabio',
          img: require('@/assets/curso/temas/tema2/f.svg'),
        },
        {
          nombre: 'Patricia',
          img: require('@/assets/curso/temas/tema2/p.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Fabio',
          textoIng:
            'Patricia, have you already chosen what your position will be for the next debate?',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Patricia',
          textoIng:
            '<b> As far as I&#39m concerned</b>, hunting season should be longer.',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Fabio',
          textoIng:
            'Really? I thought you were going to choose to be part of the opposite team.',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Patricia',
          textoIng:
            '<b> No. Taking into consideration that</b> the animal population is too high and that some people hunt for food and need more time to get more food, I think that the best stance is to debate in favor, not against.',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
      ],
    },
    dialogoChat2: {
      personajes: [
        {
          nombre: 'Film Set Worker',
          img: require('@/assets/curso/temas/tema2/film.svg'),
        },
        {
          nombre: 'Brody',
          img: require('@/assets/curso/temas/tema2/pirate.svg'),
        },
        {
          nombre: 'Director',
          img: require('@/assets/curso/temas/tema2/director.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Film Set Worker',
          textoIng:
            'Hey Brody, it looks like the Director wants to debate something with you! <br> In a debate each person has an amount of time to speak, present facts and state their point of view. <br> Oh come on Brody, be confident!',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Brody',
          textoIng: 'It would be great if Buff was eaten by a shark.',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Director',
          textoIng: 'I hate sharks.',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Brody',
          textoIng: 'But sharks are mega!',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Film Set Worker',
          textoIng:
            'No, no, not that confident - speak loudly and clearly but don’t shout.',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Brody',
          textoIng:
            'It would be exciting and hilarious to fire Buff out of a cannon.',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Film Set Worker',
          textoIng:
            'Yes Brody! You’re being focused, persuasive, funny and convincing if you ask me.<br>And don’t forget to make eye contact, but don’t be too intense.',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Director',
          textoIng: ' It would be too expensive to buy a cannon.',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Brody',
          textoIng: 'Pfffft. Whatever, dummy!',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Film Set Worker',
          textoIng:
            'Oi, Brody…you can challenge the other person’s ideas, but don’t attack them personally.',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Brody',
          textoIng:
            'If Buff gets eaten by a crocodile, then we’re bound to win awards!',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Film Set Worker',
          textoIng:
            'Now you’ve got the hang of it! <br> The greatest debaters provide a strong opening and finish with a strong conclusion, while giving evidence and reasons why their argument is best.',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
        {
          personaje: 'Director',
          textoIng: 'Action!',
          audio: require('@/assets/curso/audios/1.mp3'),
        },
      ],
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bg-2-1
  background-image: url(../assets/curso/temas/tema2/bg-2-1.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position: start
.bg-2-2
  background-image: url(../assets/curso/temas/tema2/bg-2-2.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position: bottom
.bg-2-3
  background-image: url(../assets/curso/temas/tema2/bg-2-3.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position: bottom
.bg-2-4
  background-image: url(../assets/curso/temas/tema2/bg-2-4.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position: bottom
.bg-2-5
  background-image: url(../assets/curso/temas/tema2/bg-2-5.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position: bottom
.card-bg-2
  background-image: url(../assets/curso/temas/tema2/bg-card-2.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position: start
.margin-t
  margin: 0 -1rem
.contenedor-dialogo
  overflow-y: scroll
  overflow-x: hidden
  height: 450px
  margin-right: 1.5rem
  padding-top: 0.5rem
  padding-right: 1.5rem
  &::-webkit-scrollbar
      width: 10px
  &::-webkit-scrollbar-track
    border-radius: 10px
    background-color: #e5e5e5
  &::-webkit-scrollbar-thumb
    background-color: #b4bfd8
    height: 40px
    border-radius: 10px
  &::-webkit-scrollbar-thumb:hover
    background-color: $color-acento-botones
  &::-webkit-scrollbar-thumb:active
    background-color: $color-acento-botones
.tabs-b__tab__icon
  img
    filter: grayscale(100%)
    opacity: 0.3
.tabs-b__tab
  background-color: #fff5d1
.tabs-b__tab--active
  background-color: #ffffff
  .tabs-b__tab__icon
    img
      filter: grayscale(0%)
      opacity: 1
.titulo-icono.mb-4
  margin-top: 0.7rem
  position: relative
  border-radius: 0px 10px 10px 0px
  background-color: $color-acento-contenido
  padding: 0.5rem 1rem
  display: inline-block
  font-style: italic
  &:before
    content: url(../assets/curso/temas/tema2/titulo.svg)
    position: absolute
    bottom: 0
    left: 0
    width: 55px
    height: 59px
.bg-botones
  background-color: #3c3fa7
  .tarjeta-audio__input
    display: none
  .audio__btn
    background-color: $color-acento-contenido !important
    button
      background-color: $color-acento-contenido !important
    img
      content: url(../assets/curso/audio-negro.svg) !important
.tarjeta-audio
  min-height: 0
</style>
