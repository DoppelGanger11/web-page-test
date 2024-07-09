const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickeable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    620: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    1460: {
      slidesPerView: 4
    }
  }
});


const allProducts = [
  {
    id: "alarm-max",
    titulo: "Alarma Max-Security",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Alarma vehicular",
    categoria: {
      nombre: "Alarmas",
      id: "alarmas"
    },
    precio: 220.000
  },
  
  {
    id: "alarm-ultra5100",
    titulo: "Alarma Ultra 5100",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Alarma vehicular",
    categoria: {
      nombre: "Alarmas",
      id: "alarmas"
    },
    precio: 280.000
  },
  
  {
    id: "alarm-ultrakm1000",
    titulo: "Alarma Moto Ultra KM1000",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Alarma vehicular",
    categoria: {
      nombre: "Alarmas",
      id: "alarmas"
    },
    precio: 220.000
  },
  
  {
    id: "alarm-ultraXT21",
    titulo: "Alarma Moto Ultra Xt21C",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Alarma vehicular",
    categoria: {
      nombre: "Alarmas",
      id: "alarmas"
    },
    precio: 320.000
  },
  
  {
    id: "gps-nemesis",
    titulo: "GPS Nemesis 4g",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Gps Nemesis 4g",
    categoria: {
      nombre: "Alarmas",
      id: "alarmas"
    },
    precio: 320.000
  },
  
  {
    id: "gps-plaspy",
    titulo: "GPS Plaspy 4g",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Alarma vehicular",
    categoria: {
      nombre: "Alarmas",
      id: "alarmas"
    },
    precio: 320.000
  },
  
  {
    id: "alarm-ultraXT21",
    titulo: "Alarma Moto Ultra Xt21C",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Alarma vehicular",
    categoria: {
      nombre: "Alarmas",
      id: "alarmas"
    },
    precio: 320.000
  },

  {
    id: "radio-ecoKBT",
    titulo: "Radio Eco KBT 1din",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Radio multifuncion",
    categoria: {
      nombre: "Radios",
      id: "radios"
    },
    precio: 150.000
  },
  
  {
    id: "radio-miniJDL",
    titulo: "Radio MiniPantalla JDL",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Radio multifuncion",
    categoria: {
      nombre: "Radios",
      id: "radios"
    },
    precio: 320.000
  },
  
  {
    id: "radio-and7pul",
    titulo: "Radio Android 7'",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Radio multifuncion",
    categoria: {
      nombre: "Radios",
      id: "radios"
    },
    precio: 420.000
  },
  
  {
    id: "radio-and7pul1din",
    titulo: "Radio Android 7' 1din",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Radio multifuncion",
    categoria: {
      nombre: "Radios",
      id: "radios"
    },
    precio: 480.000
  },
  
  {
    id: "radio-and9pul232",
    titulo: "Radio Android 9'",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Radio Android 9' 2gb de RAM / 32 de almacenamiento.",
    categoria: {
      nombre: "Radios",
      id: "radios"
    },
    precio: 360.000
  },
  
  {
    id: "radio-and9pul332",
    titulo: "Radio Android 9'",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Radio Android 9' 3gb de RAM / 32 de almacenamiento.",
    categoria: {
      nombre: "Radios",
      id: "radios"
    },
    precio: 500.000
  },
  
  {
    id: "cam-revcirc",
    titulo: "Camara de reversa circular",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Camara de incrustar con vision nocturna.",
    categoria: {
      nombre: "Sistema de reversa",
      id: "sistema de reversa"
    },
    precio: 110.000
  },
  {
    id: "cam-revsobre",
    titulo: "Camara de reversa sobreponer",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Camara de reversa de sobreponer HD gran angular.",
    categoria: {
      nombre: "Sistema de reversa",
      id: "sistema de reversa"
    },
    precio: 130.000
  },
  {
    id: "pito-rev",
    titulo: "Pito de reversa MrHorn",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Pito de reversa 12 y 24 voltios.",
    categoria: {
      nombre: "Sistema de reversa",
      id: "sistema de reversa"
    },
    precio: 60.000
  },

  {
    id: "parl-4pulmobia",
    titulo: "Parlantes Mobiator 4'",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Parlantes 4' Mobiator 300w Max",
    categoria: {
      nombre: "Parlantes y sonido",
      id: "parlantes y sonido"
    },
    precio: 105.000
  },

  {
    id: "parl-4pulpionn",
    titulo: "Parlantes Pionner 4'",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Parlantes 4' Pionner ",
    categoria: {
      nombre: "Parlantes y sonido",
      id: "parlantes y sonido"
    },
    precio: 145.000
  },

  {
    id: "parl-5pulKBT",
    titulo: "Parlantes KBT 5'",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Parlantes 5' KBT ",
    categoria: {
      nombre: "Parlantes y sonido",
      id: "parlantes y sonido"
    },
    precio: 150.000
  },

  {
    id: "parl-6pulJVC",
    titulo: "Parlantes JVC 6'",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Parlantes JVC 6'.",
    categoria: {
      nombre: "Parlantes y sonido",
      id: "parlantes y sonido"
    },
    precio: 160.000
  },

  {
    id: "parl-6pulpionn",
    titulo: "Parlantes Pionner 6'",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Parlantes 6' Pionner.",
    categoria: {
      nombre: "Parlantes y sonido",
      id: "parlantes y sonido"
    },
    precio: 180.000
  },

  {
    id: "parl-ovalmobi",
    titulo: "Parlantes Mobiator Ovalados 6x9",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Parlantes Mobiator Ovalados 6x9",
    categoria: {
      nombre: "Parlantes y sonido",
      id: "parlantes y sonido"
    },
    precio: 170.000
  },

  {
    id: "twitter-balastatus",
    titulo: "Twitter bala Status",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Twitter bala Status",
    categoria: {
      nombre: "Parlantes y sonido",
      id: "parlantes y sonido"
    },
    precio: 95.000
  },

  {
    id: "medios-8pulateck",
    titulo: "Medios Ateck 8'",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Medios Ateck 8'.",
    categoria: {
      nombre: "Parlantes y sonido",
      id: "parlantes y sonido"
    },
    precio: 230.000
  },

  {
    id: "bajo-12pulcarbon",
    titulo: "Bajo Carbon Audio 12'",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Bajo Carbon Audio 12'.",
    categoria: {
      nombre: "Parlantes y sonido",
      id: "parlantes y sonido"
    },
    precio: 280.000
  },

  {
    id: "plant-better1200w",
    titulo: "Planta Better 1200W",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Planta Better 1200W.",
    categoria: {
      nombre: "Parlantes y sonido",
      id: "parlantes y sonido"
    },
    precio: 280.000
  },

  {
    id: "cajon-caja",
    titulo: "Cajon Sonido",
    imagen: "./assets/Items/01.jpg",
    descripcion: "Cajon Sonido.",
    categoria: {
      nombre: "Parlantes y sonido",
      id: "parlantes y sonido"
    },
    precio: 210.000
  },

]