<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg-interno.margin-n.p-4
      .row.justify-content-center.mb-5.align-items-center
        .col-lg-3.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/intro/1.png', alt='')
        .col-lg-9(data-aos="fade-left")
          .tarjeta.bg-white.p-5.iconos--tarjeta
            .iconos--tarjeta__1: img(src='@/assets/curso/temas/intro/a1.svg', alt='')
            .iconos--tarjeta__2: img(src='@/assets/curso/temas/intro/a2.svg', alt='') 
            .iconos--tarjeta__text.p-4 
              p Este nivel de formación bilingüe se enfoca en #[span.r--1.fw-bold cómo argumentar de forma oral], o más puntualmente, en cómo debatir. Para esto, se va a exponer cuáles son cada una de las #[span.r--1.fw-bold  partes de un debate] y se va a dar un paso a paso minucioso sobre qué se debe hacer para plantear y preparar #[span.r--1.fw-bold un buen discurso] que nos ayude a argumentar mejor en un debate; también vamos a ver #[span.r--1.fw-bold  qué no hacer] a la hora de estar en #[span.r--1.fw-bold desacuerdo con alguien] y cómo usar diferentes expresiones útiles para debatir que presentan mejor nuestro discurso.  Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y, para comenzar, se invita a explorar el video que se presenta a continuación.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7sS46SdWgLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.bg-interno
  background-image: url(../assets/curso/temas/intro/bg-intro.svg)
  background-repeat: no-repeat
  background-position: start
  background-size: 100%
.iconos--tarjeta
  box-shadow: 0 0 10px rgba(0,0,0,0.1)
  position: relative
  &__1
    position: absolute
    bottom: 0
    left: 0
    transform: translateY(50%)
  &__2
    position: absolute
    top: 0
    right: 0
    transform: translateY(-50%)
</style>
