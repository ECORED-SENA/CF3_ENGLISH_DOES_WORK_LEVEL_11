<template lang="pug">
.dialogoChat.p-5
  .row.justify-content-center.align-items-center.g-0
    .col-md-12
      .row.g-0.flex-nowrap.dialogoChat__chat__item.mb-3(v-for="(line, lineIdx) in dialogoComputed")
        .col-auto.dialogoChat__chat__item__person
          img(:src="line.personaje.img")
          span.text-small(v-html="line.personaje.nombre")
        .col.dialogoChat__chat__item__message__container
          .dialogoChat__chat__item__message
            .row.g-0.align-items-center.dialogoChat__chat__item__message__bubble
              .col.dialogoChat__chat__item__message__text.me-2
                .dialogoChat__chat__item__message__text__eng.h5.mb-0
                  template(v-for="(phrase, phraseIdx) in line.textoIng")
                    .d-inline.dialogoChat__chat__item__message__text__drop(
                      v-if="phrase === '*'"
                    )
                      span.dialogoChat__chat__item__message__text__drop__response(
                        v-if="answers[line.id]"
                        v-html="answers[line.id].palabra"
                      )
                      span.dialogoChat__chat__item__message__text__drop__default(v-else)
                    span(v-else :key="`phrase-${line.id}-${phraseIdx}`" v-html="phrase")
                .dialogoChat__chat__item__message__text__esp.text-small(
                  v-if="translations.includes(line.id)"
                )
              .col-auto.dialogoChat__chat__item__message__audio
                Audio(
                  :audio="line.audio"
                  @audio-hover="mostrarIndicadorAudio = false"
                  )

      
</template>

<script>
import Audio from '../../node_modules/ecored-base-pkg/src/components/Audio.vue'

const dialogo = {
  type: Object,
  default: () => ({}),
}

export default {
  name: 'Chat',
  components: {
    Audio,
  },
  props: {
    dialogo,
  },
  data: () => ({
    uid: Math.floor(Math.random() * 10 ** 10),
    touchScreen: false,
    dragId: null,
    dropId: null,
    answers: {},
    translations: [],
    score: null,
  }),
  computed: {
    dialogoComputed() {
      if (!this.dialogo.dialogo) return []
      return this.dialogo.dialogo.map((line, idx) => ({
        ...line,
        id: this.uid + idx + 1,
        textoIng: this.splitPhrase(line.textoIng),
        personaje: this.dialogo.personajes.find(
          personaje => personaje.nombre === line.personaje,
        ),
      }))
    },
  },

  methods: {
    // HELPERS
    splitPhrase(phrase) {
      return phrase
        .replace(/^\s+|\s+$/g, '&nbsp;')
        .replace('***', '___*___')
        .split('___')
        .filter(Boolean)
    },
  },
}
</script>

<style lang="sass"></style>
