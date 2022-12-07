<template lang="pug">
.traductor.mb-5
  .contenedor-traductor.mb-5
    .contenedor-traductor__eng
      slot(name="textoIngles").fst-italic
    .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
      slot(name="textoEspanol")
    a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
</template>

<script>
export default {
  name: 'TarjetaTraductor',
  props: {
    textoIngles: {
      type: String,
      default: '',
    },
    textoEspanol: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    ocultarEsp: true,
  }),
}
</script>

<style lang="sass">
.contenedor-traductor
  position: relative
  padding: 2em
  border-radius: 10px
  transition: height 0.5s ease-in-out
  &__esp
    border-top: 3px solid #69727c
    padding-top: 1em
    margin-top: 1em
  .boton-traduccion
    position: absolute
    bottom: 0
    right: 0
    transform: translateY(100%) translateX(-13%)
    border-radius: 0px 0px 10px 10px
    background-color: $color-acento-botones
    padding: 0.5em 1em
    cursor: pointer
    &:hover
      background-color: darken($color-acento-botones, 10% )
.mostrar
  display: none
.traductor
  &.color-primario
    .contenedor-traductor
      background-color: lighten($color-primario, 26%)
  &.color-secundario
    .contenedor-traductor
      background-color: lighten($color-secundario, 26%)
  &.color-acento-contenido
    .contenedor-traductor
      background-color: lighten($color-acento-contenido, 26%)
  &.color-acento-botones
    .contenedor-traductor
      background-color: lighten($color-acento-botones, 26%)
</style>
