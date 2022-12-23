<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em> Basic argument construction</em> (Construcción de argumentos)
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        traductor.color-acento-contenido
          div(slot="textoIngles")
            p.fst-italic  When we #[span.r--2.fw-bold engage in an argumentative debate], we need more than an obvious #[span.r--2.fw-bold statement based on reality]; it does not matter that this is true and that it can be verified, it needs to be something arguable, that generates debate and interest. And unlike argumentative texts, in a debate, the way in which the argument is delivered is also important, not just the content; that is, there are more factors involved, such as #[span.r--2.fw-bold voice tone, discursive style, rhetoric, gestures, and other elements] of non-verbal communication that influence the receptivity of the audience to our message.
          div(slot="textoEspanol")
            p A la hora de #[b participar en un debate argumentativo], se necesita más que una #[b declaración obvia basada en la realidad]; no importa que esta sea cierta y que se pueda comprobar, se necesita que sea algo discutible, que genere debate e interés. Y a diferencia de los textos argumentativos, en un debate también es importante la forma en la que se entrega el argumento, no solo el contenido, o sea, hay más factores involucrados, como el tono de #[b la voz, el estilo discursivo, la retórica, los gestos y otros elementos] de la comunicación no verbal que influyen en la receptividad de la audiencia a nuestro mensaje. 
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/1.jpg', alt='' style="border-radius: 20px")
    .tarjeta.p-3.mb-5(style="background-color: #e4ebff ")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/2.svg', alt='' )
        .col-lg-11
          p.mb-0 #[span.r--4 #[em The following dialogue will allow us to enter the theme.  When we want to use an argument that allows us to identify the product of a reflection, it is necessary to first recognize the conclusion that we want to present. For example:]] #[span.r--g / El siguiente diálogo nos permitirá adentrarnos en el tema. Cuando deseamos utilizar un argumento que nos permita identificar el producto de una reflexión, es necesario reconocer, en primer lugar, la conclusión que se quiere presentar. Por ejemplo: ]
    .bg-1-1.margin-n.p-5.mb-5.pb-0
      .row.justify-content-center.g-0
        .col-lg-4
          div.img-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/3.svg')})`}").h-100
        .col-lg-8
          .bg-white.p-5
            DialogoChat(:dialogo="dialogoChat").color-acento-botones.noname.dialogocolores
    h5(data-aos="fade-right").mb-5
      span.r--4 #[em Parts of a debate argument ]  
      span.r--g / Partes de la argumentación de un debate
    .row.justify-content-center.mb-5.align-items-center
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        traductor.color-acento-contenido
            div(slot="textoIngles")
              p.fst-italic  The parts of an argument for a debate should not be confused with the parts of an argumentative text. Below is the anatomy of an argument for a debate.
            div(slot="textoEspanol")
              p Las partes de un argumento para un debate no deben confundirse con las partes de un texto argumentativo. A continuación, se muestra la anatomía de un argumento para un debate.
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/4.svg', alt='')
    .bg-1-2.margin-n.p-5.mb-5.pb-0
      .bg-card.p-5.mb-5
        h5.mb-5
          span.r--4 #[em General outline of an argument for a debate.] 
          span.r--g / Boceto general de un argumento para un debate.
        .d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/5.svg', alt='').mb-5
        .d-block.d-lg-none: img(src='@/assets/curso/temas/tema1/5-m.svg', alt='').mb-5
        .d-flex.justify-content-end
          a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
            span Ver traducción
            i.fas.fa-language.text-white.fa-lg
      .tarjeta.bg-white.p-4.mb-5
        p.text-center.mb-0 
          span.r--4 #[em #[b Let’s see examples of statements of parts of a debate: ]]
          span.r--g / Veamos ejemplos de planteamientos de partes de un debate:
      .row.justify-content-center.g-0.mb-4
        .col-lg-3
          div.img-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/7.png')})`}").h-100
        .col-lg-9
          .p-5.px-3(style="background-color: #f0f4ff")
            SlyderA.px-5.d-none.d-lg-block
              .tarjeta.bg-white.p-5.mx-5
                h4.text-center.fst-italic #[span.r--1 Statement vs. Claim]
                .row.justify-content-center.mb-5
                  .col-lg-3.col-8.mb-lg-0.mb-3
                    img(src='@/assets/curso/temas/tema1/8.svg', alt='')

                  .col-lg-9
                    traductor.color-acento-botones--borde
                      div(slot="textoIngles")
                        p.fst-italic.mb-0 We have to differentiate well between a statement based on facts that is obviously true and a claim that is up to debate.
                      div(slot="textoEspanol")
                        p Tenemos que diferenciar bien entre una declaración basada en hechos que es obviamente cierta y una afirmación que está sujeta a debate. 
                .row.justify-content-center.mb-3.align-items-center
                  .col-lg-10
                    img(src='@/assets/curso/temas/tema1/c1.svg', alt='')
                  .col-lg-1
                    Audio.color-acento-contenido.mx-3(:audio="require('@/assets/curso/audios/tema1/c1.mp3')").me-5
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-10
                    img(src='@/assets/curso/temas/tema1/c2.svg', alt='')
                  .col-lg-1
                    Audio.color-acento-contenido.mx-3(:audio="require('@/assets/curso/audios/tema1/c2.mp3')").me-5

              .tarjeta.bg-white.p-5
                h4.text-center.fw-bold.mb-4
                    span.r--1 #[em Reason ]
                    span.r--g / Razón
                .row.justify-content-center.mb-5
                  .col-lg-3.col-8.mb-lg-0.mb-3
                    img(src='@/assets/curso/temas/tema1/8.svg', alt='')

                  .col-lg-9
                    traductor.color-acento-botones--borde
                      div(slot="textoIngles")
                        p.fst-italic.mb-0 These are statements, motives, arguments that support our initial claim.
                      div(slot="textoEspanol")
                        p Estas son declaraciones, motivos, argumentos que sustentan nuestra afirmación inicial. 
                .row.justify-content-center.mb-3.align-items-center
                  .col-lg-10
                    img(src='@/assets/curso/temas/tema1/c3.svg', alt='')
                  .col-lg-1
                    Audio.color-acento-contenido.mx-3(:audio="require('@/assets/curso/audios/tema1/c3.mp3')").me-5
              .tarjeta.bg-white.p-5
                h4.text-center.fw-bold 
                    span.r--1 #[em Counterclaim ]
                    span.r--g / Contrademanda 
                .row.justify-content-center.mb-5
                  .col-lg-3.col-8.mb-lg-0.mb-3
                    img(src='@/assets/curso/temas/tema1/8.svg', alt='')

                  .col-lg-9
                    traductor.color-acento-botones--borde
                      div(slot="textoIngles")
                        p.fst-italic.mb-0 This is what the opposing side is arguing about the issue. We can think of some counterclaims ourselves at the time of designing and organizing our speech for debate, thus anticipating what we must be prepared to refute the opposing party. 
                      div(slot="textoEspanol")
                        p Esto es lo que argumenta la parte contraria sobre el tema. Podemos pensar en algunas contrademandas nosotros mismos en el momento de plantear y organizar nuestro discurso para el debate, previendo así en qué es lo que debemos estar preparados para refutarle a la parte contraria. 
                .row.justify-content-center.mb-3.align-items-center
                  .col-lg-10
                    img(src='@/assets/curso/temas/tema1/c4.svg', alt='')
                  .col-lg-1
                    Audio.color-acento-contenido.mx-3(:audio="require('@/assets/curso/audios/tema1/c4.mp3')").me-5
              .tarjeta.bg-white.p-5
                h4.text-center.fw-bold 
                  span.r--1 #[em Rebuttal  ]
                  span.r--g / Refutación
                .row.justify-content-center.mb-5
                  .col-lg-3.col-8.mb-lg-0.mb-3
                    img(src='@/assets/curso/temas/tema1/8.svg', alt='')

                  .col-lg-9
                    traductor.color-acento-botones--borde
                      div(slot="textoIngles")
                        p.fst-italic.mb-0 This is our response to the counterclaim and what further supports our initial claim.
                      div(slot="textoEspanol")
                        p Esta es nuestra respuesta a la contrademanda y lo que apoya aún más nuestra afirmación inicial. 
                .row.justify-content-center.mb-3.align-items-center
                  .col-lg-10
                    img(src='@/assets/curso/temas/tema1/c5.svg', alt='')
                  .col-lg-1
                    Audio.color-acento-contenido.mx-3(:audio="require('@/assets/curso/audios/tema1/c5.mp3')").me-5
            SlyderE(indicadores="derecha").d-lg-none.d-block.px-4.mb-4
              div
                h4.text-center.fst-italic.mb-3 #[span.r--1 Statement vs. Claim]
                traductor.color-acento-botones--borde
                      div(slot="textoIngles")
                        p.fst-italic.mb-0 We have to differentiate well between a statement based on facts that is obviously true and a claim that is up to debate.
                      div(slot="textoEspanol")
                        p Tenemos que diferenciar bien entre una declaración basada en hechos que es obviamente cierta y una afirmación que está sujeta a debate. 
                .row.justify-content-center.mb-5
                    .col-lg-10
                      img(src='@/assets/curso/temas/tema1/9-m.svg', alt='')
                .row.justify-content-center.mb-3
                  .col-6
                    Audio.color-acento-contenido.mx-3(:audio="require('@/assets/curso/audios/tema1/c1.mp3')")
                .row.justify-content-center.mb-3
                  .col-6
                    Audio.color-acento-contenido.mx-3(:audio="require('@/assets/curso/audios/tema1/c2.mp3')")
              div
                h4.text-center.fw-bold.mb-3
                  span.r--1 #[em Reason ]
                  span.r--g / Razón
                traductor.color-acento-botones--borde
                      div(slot="textoIngles")
                        p.fst-italic.mb-0 These are statements, motives, arguments that support our initial claim.
                      div(slot="textoEspanol")
                        p Estas son declaraciones, motivos, argumentos que sustentan nuestra afirmación inicial.
                .row.justify-content-center.mb-3
                  .col-6
                    Audio.color-acento-contenido.mx-3(:audio="require('@/assets/curso/audios/tema1/c3.mp3')")
                .row.justify-content-center.mb-5
                    .col-lg-10
                      img(src='@/assets/curso/temas/tema1/10-m.svg', alt='')
              div
                h4.text-center.fw-bold 
                      span.r--1 #[em Counterclaim ]
                      span.r--g / Contrademanda 
                traductor.color-acento-botones--borde
                      div(slot="textoIngles")
                        p.fst-italic.mb-0 This is what the opposing side is arguing about the issue. We can think of some counterclaims ourselves at the time of designing and organizing our speech for debate, thus anticipating what we must be prepared to refute the opposing party. 
                      div(slot="textoEspanol")
                        p Esto es lo que argumenta la parte contraria sobre el tema. Podemos pensar en algunas contrademandas nosotros mismos en el momento de plantear y organizar nuestro discurso para el debate, previendo así en qué es lo que debemos estar preparados para refutarle a la parte contraria. 
                .row.justify-content-center.mb-3
                  .col-6
                    Audio.color-acento-contenido.mx-3(:audio="require('@/assets/curso/audios/tema1/c4.mp3')")
                .row.justify-content-center.mb-5
                  .col-lg-10
                    img(src='@/assets/curso/temas/tema1/11-m.svg', alt='')
              div
                h4.text-center.fw-bold 
                    span.r--1 #[em Rebuttal  ]
                    span.r--g / Refutación
                traductor.color-acento-botones--borde
                      div(slot="textoIngles")
                        p.fst-italic.mb-0 This is our response to the counterclaim and what further supports our initial claim.
                      div(slot="textoEspanol")
                        p Esta es nuestra respuesta a la contrademanda y lo que apoya aún más nuestra afirmación inicial. 
                .row.justify-content-center.mb-3
                  .col-6
                    Audio.color-acento-contenido.mx-3(:audio="require('@/assets/curso/audios/tema1/c5.mp3')")
                .row.justify-content-center.mb-5
                  .col-lg-10
                    img(src='@/assets/curso/temas/tema1/12-m.svg', alt='')
      h5.mb-5
        span.r--4 #[em Steps to prepare for a debate] 
        span.r--g / Pasos para prepararse para un debate
      .row.justify-content-center.mb-5
        .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/13.png', alt='')
        .col-lg-7(data-aos="fade-left")
          traductor.color-acento-contenido
              div(slot="textoIngles")
                p.fst-italic  A good argumentative speech for a debate should be structured in a way that is easy for listeners to understand, clearly stating the position on the topic, the arguments in favor of it, and the evidence that supports it. 
                  br
                  br
                  |Arguing is an activity that takes place in many situations; for example, when a politician makes a speech asking us to vote for his party, when an advertisement appears on television or on social networks asking us to buy a certain product. In short, we are argumentative beings! Below #[span.r--2.fw-bold we have a step by step] so that you can make an argumentative speech and be sure that you did not miss absolutely anything.
              div(slot="textoEspanol")
                p Un buen discurso argumentativo para un debate debe estar estructurado de forma que sea fácil de entender para los oyentes, donde se exponga claramente la postura sobre el tema, los argumentos a favor de este y la evidencia que lo respalda. 
                  br
                  br
                  |Argumentar es una actividad que se desarrolla en multitud de situaciones; por ejemplo, cuando un político emite un discurso para que votemos por su partido, cuando en la televisión o en las redes sociales aparece un anuncio para que compremos un determinado producto. En definitiva, ¡somos seres argumentadores!  A continuación, tenemos un paso a paso para que pueda realizar un discurso argumentativo y esté seguro de que no le hace falta absolutamente nada. 
      .row.justify-content-center.g-0
          .col-lg-8
            .p-5.px-3(style="background-color: #ffffff")
              SlyderE(indicadores="derecha")
                div
                  h5.text-center
                    span.r--1.fst-italic Identify an issue 
                    br
                    span.r--1.fw-normal Identifique un problema
                  .row.justify-content-center.mb-5
                    .col-lg-6.mb-lg-0.mb-3
                      traductor.color-acento-contenido
                        div(slot="textoIngles")
                          p.fst-italic  
                            span.r--1.fw-bold This is usually a controversial and polarizing topic, but one that can be researched and debated in a logical way.
                            br
                            br
                            | Many times, in the debate exercises, it is not in our options to choose the topic or the position in favor of which we are going to debate, it is only assigned to us and that's it. But if it is in your possibilities to choose it, keep in mind the following.
                        div(slot="textoEspanol")
                          p Este suele ser un tema controvertido y polarizador, pero que puede investigarse y debatirse de manera lógica.
                            br
                            br
                            |Muchas veces, en los ejercicios de debate, no está en nuestras opciones elegir el tema o la posición a favor de la cual vamos a debatir, solo se nos asigna a nosotros y ya está. Pero si está en tus posibilidades elegirlo, ten en cuenta lo siguiente.
                      TarjetaAudio.color-acento-botones.mb-3(
                        texto=""
                        :audio="require('@/assets/curso/audios/tema1/1.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    .col-lg-6.col-8: img(src='@/assets/curso/temas/tema1/15.png', alt='')
                div
                  h5.text-center
                    span.r--1.fst-italic Make a chart with pros and cons 
                    br
                    span.r--1.fw-normal Haga una tabla con pros y contras
                  .row.justify-content-center.mb-5
                    .col-lg-6.mb-lg-0.mb-3
                      traductor.color-acento-contenido
                        div(slot="textoIngles")
                          p.fst-italic 
                            span.r--1.fw-bold Examine it and, according to this, choose your position
                            br  
                            br
                            | If it is up to you to choose your position in the debate, weigh not only your interests and ideals but also its advantages and disadvantages, as this can greatly influence how easy or difficult it will be to defend your claim.  
                        div(slot="textoEspanol")
                          p Examínalo y, de acuerdo con esto, elige tu posición.
                            br
                            br
                            |Si te toca a ti elegir tu posición en el debate, sopesa no solo tus intereses e ideales sino también sus ventajas y desventajas, ya que esto puede influir mucho en cuán fácil o difícil será defender tu reclamo.
                      TarjetaAudio.color-acento-botones.mb-3(
                        texto=""
                        :audio="require('@/assets/curso/audios/tema1/2.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    .col-lg-6.col-8: img(src='@/assets/curso/temas/tema1/16.png', alt='')
                div
                  h5.text-center
                    span.r--1.fst-italic Properly develop… 
                    br
                    span.r--1.fw-normal Desarrolle apropiadamente…
                  .row.justify-content-center.mb-5
                    .col-lg-6.mb-lg-0.mb-3
                      traductor.color-acento-contenido
                        div(slot="textoIngles")
                          p.fst-italic
                            span.r--1.fw-bold Your topic, main idea, and thesis
                            br  
                            br
                            |Finish establishing your position by stating these concepts as this will be the basis of your debate speech.
                        div(slot="textoEspanol")
                          p Su tema, idea principal y tesis
                            br
                            br
                            |Termina de establecer tu posición enunciando estos conceptos ya que serán la base de tu discurso de debate.
                      TarjetaAudio.color-acento-botones.mb-3(
                        texto=""
                        :audio="require('@/assets/curso/audios/tema1/3.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    .col-lg-6.col-8: img(src='@/assets/curso/temas/tema1/17.png', alt='')
                div
                  h5.text-center
                    span.r--1.fst-italic Design claims and counterclaims 
                    br
                    span.r--1.fw-normal Diseñe afirmaciones y contrademandas
                  .row.justify-content-center.mb-5
                    .col-lg-6.mb-lg-0.mb-3
                      traductor.color-acento-contenido
                        div(slot="textoIngles")
                          p.fst-italic
                            span.r--1.fw-bold Stronger claims for the main supporting arguments and counterclaims that  can be rebut.
                            br  
                            br
                            | Write consciously and with a purpose all those sentences and statements that are going to support your speech. 
                        div(slot="textoEspanol")
                          p Afirmaciones más sólidas para los principales argumentos de apoyo y contraargumentos que se pueden refutar.
                            br
                            br
                            |Escribe conscientemente y con un propósito todas aquellas oraciones y afirmaciones que van a sustentar tu discurso.
                      TarjetaAudio.color-acento-botones.mb-3(
                        texto=""
                        :audio="require('@/assets/curso/audios/tema1/4.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    .col-lg-6.col-8: img(src='@/assets/curso/temas/tema1/18.png', alt='')
                div
                  h5.text-center
                    span.r--1.fst-italic Organize your argumentative speech 
                    br
                    span.r--1.fw-normal Organice su discurso argumentativo
                  .row.justify-content-center.mb-5
                    .col-lg-6.mb-lg-0.mb-3
                      traductor.color-acento-contenido
                        div(slot="textoIngles")
                          p.fst-italic
                            span.r--1.fw-bold This is important and influences how your speech will be perceived
                            br  
                            br
                            |Assemble and structure your speech correctly, as the order in which your audience receives the information can influence how they perceive the topic and the position they take on it.
                        div(slot="textoEspanol")
                          p Esto es importante e influye en cómo se percibirá su discurso.
                            br
                            br
                            |Arma y estructura tu discurso correctamente, ya que el orden en que tu audiencia recibe la información puede influir en cómo perciben el tema y la posición que toman al respecto.
                      TarjetaAudio.color-acento-botones.mb-3(
                        texto=""
                        :audio="require('@/assets/curso/audios/tema1/5.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    .col-lg-6.col-8: img(src='@/assets/curso/temas/tema1/19.svg', alt='')
                div
                  h5.text-center
                    span.r--1.fst-italic “Delivery” of the speech 
                    br
                    span.r--1.fw-normal “Entrega” del discurso
                  .row.justify-content-center.mb-5
                    .col-lg-6.mb-lg-0.mb-3
                      traductor.color-acento-contenido
                        div(slot="textoIngles")
                          p.fst-italic
                            span.r--1.fw-bold It is not only important what you say but how you say it
                          ul.lista-ul--color
                            li
                              i.fas.fa-circle.fa-xs(style="color:#3c3fa7 ")
                              p.mb-0.fst-italic Don't read, recite your material from memory.
                            li
                              i.fas.fa-circle.fa-xs(style="color:#3c3fa7 ")
                              p.mb-0.fst-italic Take care that your vocabulary is not cliché, basic, common or repetitive.
                            li
                              i.fas.fa-circle.fa-xs(style="color:#3c3fa7 ")
                              p.mb-0.fst-italic Avoid fillers.
                            li
                              i.fas.fa-circle.fa-xs(style="color:#3c3fa7 ")
                              p.mb-0.fst-italic Speak slowly and vocalize well.
                            li
                              i.fas.fa-circle.fa-xs(style="color:#3c3fa7 ")
                              p.mb-0.fst-italic Work on your rhetoric and discursive style.
                        div(slot="textoEspanol")
                          p No solo es importante lo que dices sino cómo lo dices

                            br
                            br
                            |No lea, recite su material de memoria.

                            br
                            br
                            |Cuida que tu vocabulario no sea cliché, básico, común o repetitivo.

                            br
                            br
                            |Evite los rellenos.

                            br
                            br
                            |Habla despacio y vocaliza bien.

                            br
                            br
                            |Trabaja en tu retórica y estilo discursivo.
                      TarjetaAudio.color-acento-botones.mb-3(
                        texto=""
                        :audio="require('@/assets/curso/audios/tema1/6.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    .col-lg-6.col-8: img(src='@/assets/curso/temas/tema1/20.png', alt='')
                div
                  h5.text-center
                    span.r--1.fst-italic Conduct and behavior 
                    br
                    span.r--1.fw-normal Conducta y comportamiento
                  .row.justify-content-center.mb-5
                    .col-lg-6.mb-lg-0.mb-3
                      traductor.color-acento-contenido
                        div(slot="textoIngles")
                          p.fst-italic
                            span.r--1.fw-bold Your behavior also influences your speech and your audience
                          ul.lista-ul--color
                            li
                              i.fas.fa-circle.fa-xs(style="color:#3c3fa7 ")
                              p.mb-0.fst-italic Use gestures and body language to consolidate your speech.
                          
                            li
                              i.fas.fa-circle.fa-xs(style="color:#3c3fa7 ")
                              p.mb-0.fst-italic Make eye contact with your audience.
                          
                            li
                              i.fas.fa-circle.fa-xs(style="color:#3c3fa7 ")
                              p.mb-0.fst-italic Diversify your tone of voice, adapt it to the content of your speech, so that it is not monotonous.
                          
                            li
                              i.fas.fa-circle.fa-xs(style="color:#3c3fa7 ")
                              p.mb-0.fst-italic Learn to manage pauses in your favor.
                          
                            li
                              i.fas.fa-circle.fa-xs(style="color:#3c3fa7 ")
                              p.mb-0.fst-italic Close your debate with passion.
                          
                        div(slot="textoEspanol")
                          p Tu comportamiento también influye en tu discurso y en tu audiencia
                            br
                            br
                            |Usa gestos y lenguaje corporal para consolidar tu discurso.
                            br
                            br
                            |Haz contacto visual con tu audiencia.
                            br
                            br
                            |Diversifica tu tono de voz, adáptalo al contenido de tu discurso, para que no resulte monótono.
                            br
                            br
                            |Aprende a gestionar las pausas a tu favor.
                            br
                            br
                            |Cierra tu debate con pasión.
                      TarjetaAudio.color-acento-botones.mb-3(
                        texto=""
                        :audio="require('@/assets/curso/audios/tema1/7.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    .col-lg-6.col-8: img(src='@/assets/curso/temas/tema1/21.png', alt='')
          .col-lg-3
            div.img-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/14.svg')})`}").h-100
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/13.png', alt='')
      .col-lg-7(data-aos="fade-left")
        traductor.color-acento-contenido
            div(slot="textoIngles")
              p.fst-italic According to author #[span.r--2.fw-bold Paul Graham], there is a hierarchy of discrepancy that, as shown in the pyramid graphic below, #[span.r--2.fw-bold the higher] a person ranks on the pyramid, the more powerful their argument, while those at lower levels #[span.r--2.fw-bold use weak] and trivial #[span.r--2.fw-bold arguments] to justify their claims. Knowing this helps us not to fall into #[span.r--2.fw-bold fallacies and contradictions], and to focus on building solid arguments since we know which approaches to avoid.
            div(slot="textoEspanol")
              p Según el autor Paul Graham, existe una jerarquía en la discrepancia que, como se muestra en el siguiente gráfico piramidal, cuanto más alto se ubica una persona en la pirámide, más poderoso es su argumento, mientras que aquellos que se ubican en los niveles inferiores, utilizan argumentos débiles y triviales para justificar sus afirmaciones. Saber esto nos ayuda a no caer en falacias y contradicciones, y a enfocarnos en construir argumentos sólidos ya que sabemos qué enfoques debemos evitar.
    .margin-n(style="background-color: #e9eeff ").p-5.mb-5
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/23.svg', alt='')
        .tarjeta.p-3(x="48%" y="28.3%" numero="+" style=" background-color: #12263f")
          div(style='border-left: 3px solid white').p-1.mb-3
            .h5.mb-0.fst-italic.text-white Refuting the central point
          p 
            span.r--3.fst-italic Pointing out a flaw in the central point: “The author's main point seems to be x. As he says… But it is wrong for these reasons…” 
            span.text-white / Señalar una falla en la idea central: “El punto principal del autor parece ser x. Como él dice… Pero está mal por estas razones…”
        .tarjeta.p-3(x="51%" y="37.6%" numero="+" style="background-color: #12263f")
          div(style='border-left: 3px solid white').p-1.mb-3
            .h5.mb-0.fst-italic.text-white Refutation
          p 
            span.r--3.fst-italic Finding a mistake and supporting it by quoting the author.  
            span.text-white / Encontrar un error y explotarlo citando al autor.
        .tarjeta.p-3(x="54%" y="47%" numero="+" style="background-color: #12263f")
          div(style='border-left: 3px solid white').p-1.mb-3
            .h5.mb-0.fst-italic.text-white Counterargument 
          p 
            span.r--3.fst-italic Contradicting with reasoning and/or evidence, aimed only at the original argument. 
            span.text-white / Contradecir con razonamiento y/o evidencia, dirigido únicamente al argumento original.
        .tarjeta.p-3(x="57.3%" y="57.4%" numero="+" style="background-color: #12263f")
          div(style='border-left: 3px solid white').p-1.mb-3
            .h5.mb-0.fst-italic.text-white Contradiction
          p 
            span.r--3.fst-italic Stating the opposing case without supporting evidence. 
            span.text-white  / Expresar el caso contrario sin pruebas que lo sustenten. 
        .tarjeta.p-3(x="60.8%" y="67.5%" numero="+" style="background-color: #12263f")
          div(style='border-left: 3px solid white').p-1.mb-3
            .h5.mb-0.fst-italic.text-white Responding to Tone
          p 
            span.r--3.fst-italic Responding to the writing, not the writer or the message: “The author sounds so flippant!” 
            span.text-white / Responder a la forma, no al mensajero ni al mensaje: “¡El autor suena tan frívolo!”
        .tarjeta.p-3(x="63.8%" y="77.2%" numero="+" style="background-color: #12263f")
          div(style='border-left: 3px solid white').p-1.mb-3
            .h5.mb-0.fst-italic.text-white Ad Hominem
          p 
            span.r--3.fst-italic Attacking the writer personally: “He's a senator, of course, he'd say that!” 
            span.text-white / Atacar personalmente al escritor: "¡Es senador, por supuesto, diría eso!"
        .tarjeta.p-3(x="66.6%" y="87%" numero="+" style="background-color: #12263f")
          div(style='border-left: 3px solid white').p-1.mb-3
            .h5.mb-0.fst-italic.text-white Name-calling
          p 
            span.r--3.fst-italic  Using abusive language to invoke fear in the opponent: “You are an idiot!!!” 
            span.text-white / Usar lenguaje abusivo para invocar el miedo en el oponente: "¡¡¡Eres un idiota!!!"
    p.mb-5(data-aos='fade-right')
      span.r--4.fst-italic Now let's see how much you learned about how to present the arguments and speech for a debate. Listen to and complete the following dialogue.  
      span.r--g / Ahora, veamos cuánto aprendió sobre cómo presentar los argumentos y el discurso para  un debate. Escuche y complete el siguiente diálogo.
    Dialogo.color-primario(:dialogo="dialogo").fst-italic
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) To practice arguments and speech
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
    
    

































    // Modales 
    ModalA(:abrir-modal.sync="modal1")
      .d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/6.svg', alt='').mb-5
      .d-block.d-lg-none: img(src='@/assets/curso/temas/tema1/6-m.svg', alt='').mb-5
    
</template>

<script>
import TraduccionAudio from '@/components/TraduccionAudio.vue'
import traductor from '@/components/tarjetaTraductor.vue'
import Dialogo from '@/components/Dialogo.vue'
import Traduccion from '@/components/DialogoTraduccionChat.vue'
import DialogoChat from '@/components/DialogoChat.vue'
export default {
  name: 'Tema1',
  components: {
    traductor,
    TraduccionAudio,
    Traduccion,
    DialogoChat,
    Dialogo,
  },
  data: () => ({
    modal1: false,
    dialogo: {
      personajes: [
        {
          nombre: 'Teacher',
          img: require('@/assets/curso/temas/tema1/teacher.svg'),
        },
        {
          nombre: 'Julia',
          img: require('@/assets/curso/temas/tema1/julia.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Teacher',
          textoIng:
            'And if someone uses as a counterclaim the argument that "they bring negative consequences since they restrict the expression of free personality through clothing", how would you *** it?',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema1/H11_1.mp3'),
          palabra: 'refute',
        },
        {
          personaje: 'Julia',
          textoIng:
            'The rebuttal would be that, even by *** uniforms, students express their personality and individuality through their hairstyles, use of accessories, and other details.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema1/d2.mp3'),
          palabra: 'wearing',
        },
        {
          personaje: 'Teacher',
          textoIng: 'You&#39re on the *** track, Julia.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/tema1/H11_2.mp3'),
          palabra: 'right ',
        },
      ],
    },
    traduccionAudio: [
      {
        textoIng:
          'We have to differentiate well between a statement based on facts that is obviously true and a claim that is up to debate.',
        textoEsp:
          'Tenemos que diferenciar bien entre una declaración basada en hechos que es obviamente cierta y una afirmación que está sujeta a debate.',
        audio: require('@/assets/curso/audios/1.mp3'),
      },
    ],
    traduccionAudio1: [
      {
        textoIng:
          'These are statements, motives, arguments that support our initial claim.',
        textoEsp:
          'Estas son declaraciones, motivos, argumentos que sustentan nuestra afirmación inicial. ',
        audio: require('@/assets/curso/audios/1.mp3'),
      },
    ],
    traduccionAudio2: [
      {
        textoIng:
          'This is what the opposing side is arguing about the issue. We can think of some counterclaims ourselves at the time of designing and organizing our speech for debate, thus anticipating what we must be prepared to refute the opposing party. ',
        textoEsp:
          'Esto es lo que argumenta la parte contraria sobre el tema. Podemos pensar en algunas contrademandas nosotros mismos en el momento de plantear y organizar nuestro discurso para el debate, previendo así en qué es lo que debemos estar preparados para refutarle a la parte contraria. ',
        audio: require('@/assets/curso/audios/1.mp3'),
      },
    ],
    traduccionAudio3: [
      {
        textoIng:
          'This is our response to the counterclaim and what further supports our initial claim.',
        textoEsp:
          'Esta es nuestra respuesta a la contrademanda y lo que apoya aún más nuestra afirmación inicial. ',
        audio: require('@/assets/curso/audios/1.mp3'),
      },
    ],
    dialogoChat: {
      personajes: [
        {
          nombre: 'Sue',
          img: require('@/assets/curso/temas/tema1/t.svg'),
        },
        {
          nombre: 'Jim',
          img: require('@/assets/curso/temas/tema1/j.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Sue',
          textoIng: 'Julia, what is your position in the debate next week?',
          audio: require('@/assets/curso/audios/tema1/teacher1.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng:
            'Teacher, my position is in favor of the use of uniforms in educational institutions.',
          audio: require('@/assets/curso/audios/tema1/H3_1.mp3'),
        },
        {
          personaje: 'Sue',
          textoIng: 'And what is your main claim?',
          audio: require('@/assets/curso/audios/tema1/teacher2.mp3'),
        },
        {
          personaje: 'Jim',
          textoIng:
            'That the use of uniforms brings positive consequences to the students since they help to promote an environment of equality and inclusiveness for all regardless of their socioeconomic status.',
          audio: require('@/assets/curso/audios/tema1/H3_2.mp3'),
        },
      ],
    },

    // variables de vue
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
.bg-1-1
  background-image: url(../assets/curso/temas/tema1/bg-1-1.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position: start
.bg-1-2
  background-image: url(../assets/curso/temas/tema1/bg-1-2.svg)
  background-repeat: no-repeat
  background-size: 100%
  background-position: bottom
</style>
