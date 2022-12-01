# Registro de cambios

Estos son los cambios hechos en la ECORED-BASE-2021

## 5.1.0 - 01-12-2021

### Agregado

- Sintesis

### Arreglado

- Componente SlyderF en algunos casos los botones no funcionaban como se esperaba

#

## 5.0.1 - 09-11-2021

### Arreglado

- Componente SlyderF aveces no llegaba al último elemento
- Componente Zoom hace zoom cuando se hacía scroll por la pagina, ahora solo hay que hacer click a la imágen para que se pueda hacer zoom
- Vista Material complementario enlaces de descargas no funcionaban cuando era uno solo

#

## 5.0.0 - 29-10-2021

### Agregado

- Componente tarjeta-avatar-slide
- Componente Tarjeta-slide
- Componente lineaTiempoE
- Componente SlyderF
- Componente Zomm

### Arreglado

- Agregar numero a la imagen infografiaca e infografiaca-B (numero="1")
- los botones del slyderA y slyderA quedan abajo (tipo="b")
- titulo-principal y titulo-segundo de colores
- acordiones agregar clase para estado activo (acordion__activo)
- espacio para el icono del link de las referencias bibliograficas
- deshabilitar descargable en local
- SlyderB, SlyderC, SlyderD quitar titulo cuando no se ponga la llave
- ponerle min-width a los creditos para moviles
- material complementario recibe mas de un link o descarga
- referencias bibliograficas y glosario se ordena incluso con tags html

#

## 4.2.0 - 21-09-2021

### Agregado

- Componente ImagenInfograficaB
- Componente tarjeta-flip

### Arreglado

- Los titulos y todos los props que van dentro de las vistas soportan html
  - AcordionA
  - LineaTiempoA
  - LineaTiempoB
  - LineaTiempoC
  - LineaTiempoD
  - PasosB
  - SlyderB
  - SlyderC
  - SlyderD
  - TabsA
  - TabsB
  - TabsC

#

## 4.1.1 - 26-08-2021

### Agregado

- Glosario ahora recibe HTML a través de la llave terminoHtml (debe tener ambas llaves termino y terminoHtml para que funcione)

### Arreglado

- Doble slash (//) en enlaces dentro de la plantilla

#

## 4.1.0 - 26-07-2021

### Cambios

- /package.json
- /src/components/Muestras.vue

### Agregado

- Componente SlyderE
- Componente cajon-b
- En el componente 'linea-tiempo-c' la opcion de hacer los titulos mas pequenos

### Arreglado

- En el componente 'linea-tiempo-c' el problema generado por la cantidad de texto en el titulo
- En el componente 'bloque-texto-e' el nombre de la clase 'bloque-texto-e__text' cambio a 'bloque-texto-e__texto' para mejor consistencia
- En el componente 'tarjeta-avatar-b' ahora la imagen va a estar dentro de '.tarjeta-avatar-b__img" para arreglar el responsive del componente
- Los textos dentro de estos componentes ahora se pueden utilizar como html
  - menu principal
  - banner interno
  - banner principal
  - header
  - material complementario
  - inicio
  - referencias bibliograficas
- En el componente 'pasos' el problema con los circulos en responsive
- En los componentes de texto destacado, los problemas de alineacion de las comillas

### Potenciales problemas con versiones anteriores

- en el componente 'tarjeta-avatar-b', la imagen solo necesita estar dentro de: .tarjeta-avatar-b__img

#

## 4.0.0 - 26-06-2021

### Cambios

- /package.json
- /src/main.js
- /src/app.vue
- /src/components/Muestras.vue
- /src/assets
- /src/views/Tema1.vue
- /src/views/Tema2.vue
- /src/views/Tema3.vue

### Agregado

- componente bloque-texto-g
- en pantallas pequeñas el menú se cierra cuando se da click
- Objeto Vue arreglado para la base
- Implementacion de AOS

### Arreglado

- Bug en componente ScrollHorizontal
- arreglo de overflow-x en el contenedor de tema
- la versión 5.0.2 de bootstrap tiene un problema con la grilla
- el orden del glosario no toma en cuenta mayúsculas

#

## 3.3.0 - 14-06-2021

### Cambios

- /package.json
- /src/main.js
- /src/app.vue
- /src/views/Actividad.vue
- /src/styles/_variables.sass
- /src/components/Muestras.vue
- /src/config/global.js
- /src/assets/[multiples imagenes]

### Agregado

- Ultima version de Bootstrap 5.0.1
- Separador en forma de componente de Vue 'Separador'
- Directiva que permite que los componentes dinámicos interactuen con Vue
- Titulo '.titulo-sexto'
- Creditos
- Créditos en inicio
- Botones de accesibilidad

### Arreglado

- Jerarquías de títulos de la plantilla
- Banner principal si no hay imagen de fondo va a quedar con el color en variables
- Imágenes dentro de tarjetas con avatar
- Los títulos ahora son elementos h
- Unificación de pie de imagen y pie de tabla
- Mejor contraste en el encabezado de la tabla de material complementario
- Tamaño de titulo de .tabla-b

#

## 3.2.0 - 02-06-2021

### Cambios

- /package.json => "ecored-base-pkg": "2.2.0"
- /src/styles/_variables.sass
- /src/components/Muestras.vue
- /src/config/global.js

### Agregado

- Nuevas clases para titulos .titulo-tercero, .titulo-cuarto y .titulo-quinto
- nuevo .espaciador
- PasosA ahora soporta contenido dinámico
- Indicadores de interacción .indicador--click y .indicador--hover
- Indicadores de interacción en todos los componentes interactivos
- Imagen en .tarjeta-avatar ahora tiene tamaños dinámico a travez de $tarjeta-avatar-ancho-img

### Arreglado

- Mejora de responsive en ImagenInfografica
- Cambio de textos en botones de la vista inicial
- Cambio de espaciado en .titulo-principal y .titulo-segundo
- Cambio de todos los tamaños de los headers (h1, h2, h3, h4, h5, h6)
- Cambio de espaciado de p, ul y ol
- Mejora de padding en componente AcordionA
- Cambio de nombre de clase .tarjeta-Avatar-b por .tarjeta-avatar-b
- Mejora de alineación de las comillas en los componentes de texto destacado

#

## 3.1.0 - 24-05-2021

### Cambios

- /package.json => "ecored-base-pkg": "2.1.0"
- /src/assets/template/puntero.svg
- /src/styles/_variables.sass
- /src/components/Muestras.vue
- /src/styles/_styles.sass

### Agregado

- Nuevo Componente ImagenInfográfica
- Nuevo Componente LineaTiempoD
- Componente .tarjeta-Avatar-b tiene una variable que controla el ancho de su avatar
- Los botones ahora tienen el nuevo esquema de colorización (.color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones)
- esquema de colorización tiene color de texto basado en luminancia del color de fondo
- Nueva distribucion de creditos
- Nuevo componente de indicador de interacción
- Nueva distribución en Muestras

### Arreglado

- Arreglo de escroleo del menú
- Mejora de especificidad en .text-white, .texto-blanco

### Borrado

- Variables: $color-btn-b-fondo, $color-btn-b-texto (quedan de manera provisional para compatibilidad con anteriores versiones)
- Clase .boton--b, los botones se van a manejar con el nuevo esquema de colorización

#

## 3.0.0 - 11-05-2021

### Cambios
- ## Muchos componentes a partir de esta versión cambian su marcado (html) y sus estilos (css), por esto, se recomienda empezar de nuevo teniendo como guía las nuevas muestras.vue.
- /package.json => "ecored-base-pkg": "2.0.0"
- /src/views/Actividad.vue
- /src/styles/variables.sass
- /src/assets/template/
- /src/components/Muestras.vue
- /src/router/index.js

### Agregado

- Mejora en la personalización de la imagen del banner principal.
  ```
  $banner-principal-img-y: '' // 'arriba','abajo',''
  $banner-principal-img-x: '' // 'derecha',''
  ```
- Mejora en la aplicación de colores para componentes.
  ```
  .color-primario
  .color-secundario
  .color-acento-contenido
  .color-acento-botones
  ```
- Clases para textos están en inglés y en español.
  ```
  .text-thin, .texto-thin
  .text-regular, .texto-regular
  .text-bold, .texto-bold
  .text-black, .texto-black
  .text-center, .texto-centro
  .text-white, .texto-blanco
  .text-white--hover, .texto-blanco--hover
  ```
- Nueva vista de actividades de aprendizaje.

### Arreglos

- Mejora en renderizado del AcordionA
- Arreglo del tamaño de las imágenes en tarjeta-avatar

#

## 2.3.1 - 04-05-2021

### Cambios

- /package.json => "ecored-base-pkg": "1.3.1"
- /src/main.js
- /src/router/index.js
- /src/styles/_variables.sass

### Agregado

- Visualización de la versión de la base y del paquete de la base en footer.
- Nueva variable $color-banner-fondo.

### Arreglos

- Ordenado de glosario con palabras compuestas.
- Escroleo de barra de avance para firefox.
