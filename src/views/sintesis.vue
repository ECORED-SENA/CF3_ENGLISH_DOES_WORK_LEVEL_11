<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .position-relative.mb-5
      .imagen-sintesis.d-none.d-lg-block: img(src='@/assets/curso/temas/tema2/sin.png', alt='')
      .row.justify-content-end.mb-5
        .col-lg-10
          .tarjeta(style="background-color: #6b8dfc ").p-5
            .row.justify-content-end
              .col-lg-10
                traductor.color-acento-contenido
                  div(slot="textoIngles")
                    p.fst-italic  Up to this point, we have been able to understand everything that has to do with how to correctly write an argumentative text and all the linguistic resources necessary for this purpose. Therefore, you are invited to appreciate the following conceptual scheme that summarizes the subject matter:
                  div(slot="textoEspanol")
                    p Hasta este punto hemos podido comprender todo lo que tiene que ver con cómo escribir correctamente un texto argumentativo y todos los recursos lingüísticos necesarios para este propósito. Por ello, se invita a que aprecie el siguiente esquema conceptual que le resume la temática tratada:
    br
    br
    .row.justify-content-center.mt-5
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
import traductor from '@/components/tarjetaTraductor.vue'

export default {
  name: 'Sintesis',
  components: {
    traductor,
  },
  data: () => ({
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
.imagen-sintesis
  position: absolute
  bottom: 0
  left: 0
  transform: translateY(30%)
</style>
