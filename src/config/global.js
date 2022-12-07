export default {
  global: {
    componenteFormativo:
      '<em> Debating your way to victory!</em> <br> <span class= r--1>¡Debatiendo hasta la victoria!</span>',
    descripcionCurso:
      'Este componente se enfocará en <b> cómo argumentar de forma oral en un debate</b>, cuáles son las <b> partes de un debate</b>, una guía paso a paso sobre cómo <b>formular y preparar el discurso</b> que presentaremos para debatir, cómo expresar que estamos en desacuerdo y cómo usar <b> expresiones útiles para debatir.</b>',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a7.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          '<em> Basic argument construction</em> (Construcción de argumentos)',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          '<em> Useful expressions for debating</em> (Expresiones útiles para debatir)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Basic Argument Construction (Construcción de argumentos) ',
      referencia:
        'Britishcouncilsg. (2015). How to Write an Argumentative Essay - Planning [Video]. YouTube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=oAUKxr946SI ',
    },
    {
      tema: 'Basic Argument Construction (Construcción de argumentos) ',
      referencia:
        'Instructional Development Services. (s. f.). Identifying the Main Idea. Austin Community College District.',
      tipo: 'Artículo ',
      link:
        'https://sites.austincc.edu/tsiprep/reading-review/identifying-the-main-idea/ ',
    },
    {
      tema:
        'Useful expressions for debating (Expresiones útiles para debatir) ',
      referencia:
        'BBC Learning English. (2016). Linking words of contrast: BBC English Class [Video]. YouTube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=PccESvY9H58 ',
    },
  ],
  glosario: [
    {
      termino: '<em>Argumentative text</em> / Texto argumentativo',
      significado:
        'texto donde el autor toma una postura sobre un tema (generalmente controversial) y debe persuadir al lector, por medio de argumentos y evidencia, de tomar su misma postura. ',
    },
    {
      termino: '<em>Connectors</em> / Conectores',
      significado:
        'palabras o frases que unen ideas, frases, oraciones o párrafos. ',
    },
    {
      termino: '<em>Main idea</em> / Idea principal',
      significado:
        'punto principal que el autor está presentando sobre un tema. ',
    },
    {
      termino: '<em>Secondary ideas</em> / Ideas secundarias',
      significado:
        'ideas que se derivan de las ideas principales, las respaldan y las complementan (dan más detalles al respecto).',
    },
  ],
  referencias: [
    {
      referencia:
        'Graduate Writing Center. (s. f.). Linking Words (Conjunctions and Connectors). Yale Center for Teaching and Learning.',
      link:
        'https://ctl.yale.edu/sites/default/files/files/GWC_LinkingWords-1.pdf ',
    },
    {
      referencia:
        'Instructional Development Services. (s. f.). Identifying the Main Idea. Austin Community College District.',
      link:
        'https://sites.austincc.edu/tsiprep/reading-review/identifying-the-main-idea/  ',
    },
    {
      referencia:
        'Learning Assistance Center. (s. f.). Main ideas and supporting details. University of Hawaii.',
      link:
        'https://manoa.hawaii.edu/undergrad/learning/wp-content/uploads/2014/03/MAIN-IDEAS-AND-SUPPORTING.pdf  ',
    },
    {
      referencia:
        'MasterClass. (2021). How to Write a Good Argumentative Essay: Easy Step-by-Step Guide.',
      link:
        'https://www.masterclass.com/articles/how-to-write-a-good-argumentative-essay ',
    },
    {
      referencia:
        'Purdue Online Writing Lab. (s. f.). Argumentative Essays. Purdue University.',
      link:
        'https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html',
    },
    {
      referencia:
        'Rosario English Area. (s. f.). Academic connectors. Universidad del Rosario.',
      link:
        'https://repository.urosario.edu.co/bitstream/handle/10336/13883/Academic%20Connectors.pdf?sequence=1 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Michelle Manuela Pérez Hernández ',
        cargo: 'Experta Temática ',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez ',
        cargo: 'Diseñadora Instruccional ',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus ',
        cargo: 'Asesora Metodológica ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González ',
        cargo: 'Corrector de Estilo ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
