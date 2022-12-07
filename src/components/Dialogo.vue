<template lang="pug">
.dialogo
  .dialogo__header.px-3.px-lg-4.py-2.py-lg-3
    .mb-1
      slot(name="nombre-actividad") Arrastrar y soltar
    .h3.mb-0 
      slot(name="titulo-actividad") Titulo de actividad - Completa la conversación
  .px-2.py-3.p-lg-4
    .row.g-0
      .col-md-8.dialogo__chat(:ref="`chat-${uid}`")
        .row.g-0.flex-nowrap.dialogo__chat__item.mb-3(v-for="(line, lineIdx) in dialogoComputed")
          .col-auto.dialogo__chat__item__person
            img(:src="line.personaje.img")
            span.text-small(v-html="line.personaje.nombre")
          .col.dialogo__chat__item__message__container
            .dialogo__chat__item__message
              .row.g-0.align-items-center.dialogo__chat__item__message__bubble
                .col.dialogo__chat__item__message__text.me-2
                  .dialogo__chat__item__message__text__eng.h5.mb-0
                    template(v-for="(phrase, phraseIdx) in line.textoIng")
                      .d-inline.dialogo__chat__item__message__text__drop(
                        v-if="phrase === '*'"
                        @drop.prevent="onDrop(line.id)" 
                        @dragenter.prevent="onDragEnter(line.id)"
                        @dragleave.prevent="onDragLeave()"
                        @dragover.prevent
                        :key="`phrase-${line.id}-${phraseIdx}`"
                        :ref="`phrase-${line.id}`"
                        :class="{'is-active': dropId === line.id}"
                      )
                        span.dialogo__chat__item__message__text__drop__response(
                          v-if="answers[line.id]"
                          v-html="answers[line.id].palabra"
                        )
                        span.dialogo__chat__item__message__text__drop__default(v-else)
                      span(v-else :key="`phrase-${line.id}-${phraseIdx}`" v-html="phrase")
                  .dialogo__chat__item__message__text__esp.text-small(
                    v-if="translations.includes(line.id)"
                  )
                    hr.my-2
                    template(v-for="phrase in line.textoEsp")
                      .d-inline.dialogo__chat__item__message__text__drop(
                        v-if="phrase === '*'"
                      )
                        span.dialogo__chat__item__message__text__drop__default
                      span(v-else v-html="phrase")
                .col-auto.dialogo__chat__item__message__audio
                  Audio(
                    :audio="line.audio"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
              .d-flex.justify-content-end.me-3
                button.dialogo__chat__item__message__translate-btn.text-small(
                  @click="toggleTranslate(line.id)"
                ) Ver traducción
          .col-1
      .col-12.d-md-none
        hr.mb-3.mt-4
      .col.dialogo__words
        .dialogo__words__content
          .dialogo__words__content__explanation 
            slot(name="descripcion-actividad") Arrastra y suelta las palabras en la conversación
          .dialogo__words__content__words__container.mt-md-3.mb-3.mb-md-0(v-if="wordsToShow.length")
            template(v-if="touchScreen")
              .h5.dialogo__words__word(
                v-for="word in wordsToShow"
                :key="`word-${word.id}`"
                :ref="`word-${word.id}`"
                @touchstart.prevent="onTouchStart(word.id)" 
                @touchmove.prevent="onTouchMove($event,word.id)"
                @touchend.prevent="onTouchEnd($event,word.id)"
                @touchcancel.prevent="onTouchCancel($event,word.id)"
                :class="{'grabbing': word.id === dragId}"
                v-html="word.palabra"
              )
            template(v-else)
              .h5.dialogo__words__word(
                v-for="word in wordsToShow"
                :key="`word-${word.id}`"
                @dragstart="onStartDrag(word.id)"
                @dragend="onEndDrag()"
                draggable
                :class="{'grabbing': word.id === dragId}"
                v-html="word.palabra"
              )
        .dialogo__words__footer
          .dialogo__score.mt-3(v-if="score")
            .dialogo__score.p-3.approved(v-if="score === 'approved'")
              .row.align-items-center
                .col-2
                  .dialogo__score__icon
                    img(src="@/assets/template/green-check.svg")
                .col
                  slot.dialogo__score__text.h5.mb-0(name="feedback-correcto") ¡Muy bien!

            .dialogo__score.px-3.py-2.disapproved(v-if="score === 'disapproved'")
              .row.align-items-center
                .col-2
                  .dialogo__score__icon
                    img(src="@/assets/template/red-x.svg")
                .col
                  slot.dialogo__score__text.h5.mb-0(name="feedback-incorrecto") Incorrecto

          .dialogo__words__footer__actions.text-end.mt-3(
            v-if="Object.values(answers).length === words.length"
          )
            button(v-if="score === null" @click="onCheck") Comprobar
            button(v-else-if="score === 'disapproved'" @click="reset") Prueba otra vez

</template>

<script>
import Audio from '../../node_modules/ecored-base-pkg/src/components/Audio.vue'
export default {
  name: 'Dialogo',
  components: {
    Audio,
  },
  props: {
    dialogo: {
      type: Object,
      default: () => ({}),
    },
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
        textoEsp: this.splitPhrase(line.textoEsp),
        personaje: this.dialogo.personajes.find(
          personaje => personaje.nombre === line.personaje,
        ),
      }))
    },
    words() {
      return this.shuffle(
        this.dialogoComputed
          .map(line => ({ palabra: line.palabra, id: line.id }))
          .filter(line => line.palabra),
      )
    },
    answerWordsIds() {
      return Object.values(this.answers).map(answer => answer.dragId)
    },
    wordsToShow() {
      return this.words.filter(word => !this.answerWordsIds.includes(word.id))
    },
  },
  created() {
    this.touchScreen = 'ontouchstart' in document.documentElement
  },
  methods: {
    // DRAG EVENTS
    onStartDrag(dragId) {
      this.dragId = dragId
    },
    onEndDrag() {
      this.dragId = null
    },
    onDrop(dropId) {
      if (!this.dragId) return
      this.$set(this.answers, dropId, {
        dragId: this.dragId,
        dropId: dropId,
        palabra: this.words.find(wordObj => wordObj.id === this.dragId).palabra,
      })
      this.dropId = null
    },
    onDragEnter(dropId) {
      this.dropId = dropId
    },
    onDragLeave() {
      this.dropId = null
    },
    // TOUCH EVENTS
    onTouchStart(dragId) {
      const dragElm = this.$refs[`word-${dragId}`][0]
      dragElm.classList.add('touch-drag')
    },
    onTouchMove(event, dragId) {
      const dragElm = this.$refs[`word-${dragId}`][0]
      const dragElmRect = dragElm.getBoundingClientRect()
      const touch = event.touches[0]
      dragElm.style.top = `${touch.clientY - dragElmRect.height / 2}px`
      dragElm.style.left = `${touch.clientX - dragElmRect.width / 2}px`
    },
    onTouchEnd(event, dragId) {
      if (event.changedTouches.length > 1) {
        this.resetDragElm(dragId)
        return
      }
      const contElm = this.$refs[`chat-${this.uid}`]
      const contElmRect = contElm.getBoundingClientRect()
      const touch = event.changedTouches[0]
      const isInsideContX =
        touch.clientX > contElmRect.x &&
        touch.clientX < contElmRect.x + contElmRect.width
      const isInsideContY =
        touch.clientY > contElmRect.y &&
        touch.clientY < contElmRect.y + contElmRect.height

      if (!isInsideContX || !isInsideContY) {
        this.resetDragElm(dragId)
        return
      }

      let dropId
      const isTouching = this.words.some(wordObj => {
        const drop = this.$refs[`phrase-${wordObj.id}`][0]
        const dropRect = drop.getBoundingClientRect()
        const extraDrop = 25
        const isInsideX =
          touch.clientX > dropRect.x - extraDrop &&
          touch.clientX < dropRect.x + dropRect.width + extraDrop
        const isInsideY =
          touch.clientY > dropRect.y - extraDrop &&
          touch.clientY < dropRect.y + dropRect.height + extraDrop

        if (isInsideX && isInsideY) {
          dropId = wordObj.id
        }
        return isInsideX && isInsideY
      })
      if (isTouching) {
        this.$set(this.answers, dropId, {
          dragId: dragId,
          dropId: dropId,
          palabra: this.words.find(wordObj => wordObj.id === dragId).palabra,
        })
      }
      this.resetDragElm(dragId)
    },
    onTouchCancel(dragId) {
      this.resetDragElm(dragId)
    },
    resetDragElm(id) {
      const dragElm = this.$refs[`word-${id}`][0]
      dragElm.classList.remove('touch-drag')
    },
    // HELPERS
    toggleTranslate(id) {
      if (this.translations.includes(id)) {
        this.translations = this.translations.filter(tId => tId !== id)
      } else {
        this.translations.push(id)
      }
    },
    onCheck() {
      const finalCheck = Object.values(this.answers).every(
        answer => answer.dragId === answer.dropId,
      )
      this.score = finalCheck ? 'approved' : 'disapproved'
    },
    reset() {
      this.answers = {}
      this.score = null
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },
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
