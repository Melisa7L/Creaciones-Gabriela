import { useState } from 'react'
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'
import './App.css'
import { config, generateWhatsAppUrl, generateGeneralWhatsAppUrl } from './config'

const vestidos = [
{
    id: 1,
    nombre: "Vestido Piel de Sirena en tono naranja vibrante",
    categoria: "Gala | Audaz",
    descripcion: "Con majestuosa cola y finas aplicaciones de encaje floral bordado canutillos",
    detalles: "Su color audaz y la sofisticación del bordado artesanal garantizan una presencia memorable en cualquier evento de gala.",
    imagen: "images/1.jpeg", 
    imagenes: [
      "images/1.jpeg",
      "images/2.jpeg",
      "images/3.jpg"
    ],
    modelo: "Aylen Carrillo", 
    locacion: "El Refugio de Yala -Jujuy" 
  },
  {
    id: 2,
    nombre: "Vestido de Gala color Uva",
    categoria: "Gala | Clásico",
    descripcion: "Diseño entallado y favorecedor en satén 'Piel de Sirena', realzado con delicados encajes tono sobre tono.",
    detalles: "El entalle perfecto y el color profundo lo convierten en la elección ideal para una silueta estilizada y una elegancia atemporal.",
        imagen: "images/4.jpg", 
    imagenes: [
      "images/4.jpg",
      "images/5.jpg",
      "images/6.jpg"
    ],
    modelo: "Aylen Carrillo", 
    locacion: "El Refugio de Yala -Jujuy" 
  },
{
    id: 3,
    nombre: "Imponente Vestido de Noche Rojo",
    categoria: "Gala | Pasión",
    descripcion: "Confeccionado en tela 'Piel de Sirena'. Diseño de escote corazón con aplicaciones de encaje integral en el mismo tono rojo.",
    detalles: "El rojo intenso, combinado con el corte de la piel de sirena, proyecta seguridad y pasión, ideal para ser el centro de atención.",
        imagen: "images/8.jpg", 
    imagenes: [
      "images/8.jpg",
      "images/7.jpg"
    ],
    modelo: "Aylen Carrillo", 
    locacion: "El Refugio de Yala -Jujuy" 
  },
 {
    id: 4,
    nombre: "Vestido Naranja Cautivador",
    categoria: "Fiesta | Luminoso",
    descripcion: "Satén 'Piel de Sirena' con sutil brillo de lentejuelas. Destaca por su escote corazón y aplicaciones de encaje en color nude.",
    detalles: "Las lentejuelas y el brillo del tejido aseguran que el vestido capte la luz con cada movimiento, perfecto para celebraciones nocturnas.",
        imagen: "images/9.jpg", 
    imagenes: [
      "images/9.jpg",
      "images/10.jpg",
      "images/11.jpg"
    ],
    modelo: "Martina Zamar", 
    locacion: "El Refugio de Yala -Jujuy" 
  },
  {
    id: 5,
    nombre: "Vestido Nude con Perlas",
    categoria: "Romántico | Quinceañera",
    descripcion: "Diseño en Satén color Nude con falda de tul bordado con perlas y flores de relieve. Incluye finos breteles con aplicaciones.",
    detalles: "La combinación de satén suave y el tul bordado con perlas crea una textura de ensueño, ideal para quinceañeras o damas de honor.",
imagen: "images/12.jpg",     
imagenes: [
      "images/12.jpg",
      "images/13.jpg",
      "images/14.jpg",
      "images/15.jpg"
      
    ],
    modelo: "Aylen Carrillo", 
    locacion: "El Refugio de Yala -Jujuy" 
  },
{
    id: 6,
    nombre: "Vestido Sol Radiante Amarillo",
    categoria: "Fiesta | Original",
    descripcion: "Vestido 'Piel de Sirena' en Amarillo Dorado Radiante con aplicaciones de margaritas en tonalidades doradas que recorren el diseño.",
    detalles: "Su color alegre y el detalle de las margaritas bordadas lo hacen una opción fresca y muy original para eventos de día o primavera-verano.",
imagen: "images/16.jpg", 
    imagenes: [
      "images/16.jpg",
      "images/17.jpg",
      "images/18.jpg"
      
    ],
    modelo: "Aylen Carrillo", 
    locacion: "El Refugio de Yala -Jujuy" 
  },
{
    id: 7,
    nombre: "Vestido Sirena Blanco con Torerita de Encaje",
    categoria: "Novia | Clásico",
    descripcion: "Vestido de Corte Sirena en Tafetán Elastizado Blanco, embellecido con apliques de encaje floral y flores en relieve. Incluye torerita de encaje.",
    detalles: "La tela elastizada garantiza la comodidad, mientras que el diseño sirena con torerita aporta una sofisticación clásica para matrimonios o ceremonias de gala.",
imagen: "images/19.jpg",     
imagenes: [
      "images/19.jpg",
      "images/20.jpg"
      
    ],
    modelo: "Martina Zamar", 
    locacion: "El Refugio de Yala -Jujuy" 
  },
{
    id: 8,
    nombre: "Vestido Esmeralda de Ensueño",
    categoria: "Gala | Sofisticado",
    descripcion: "Vestido en Verde Esmeralda con elegante escote corazón. Confeccionado en Satén base y cubierto con tul bordado que le otorga profundidad.",
    detalles: "El color esmeralda es un clásico de la realeza. El juego de satén y tul bordado ofrece un brillo rico y un volumen delicado.",
imagen: "images/21.jpg",    
 imagenes: [
      "images/21.jpg",
      "images/22.jpg",
      "images/23.jpg",
      "images/24.jpg"
      
    ],
    modelo: "Aylen Carrillo", 
    locacion: "El Refugio de Yala -Jujuy" 
  },
{
    id: 9,
      nombre: "Vestido de Gala 'Blanc Lumière",
    categoria: "Novia | Vanguardista",
    descripcion: "Diseño vanguardista blanco con corsé de transparencias en encaje bordado, y falda en tela de Tafetán blanco que brinda estructura y movimiento.",
    detalles: "La fusión de un corsé transparente y el encaje crea un look moderno y sensual, perfecto para novias que buscan un diseño contemporáneo.",
imagen: "images/25.jpg", 
    imagenes: [
      "images/25.jpg",
      "images/26.jpg",
      "images/27.jpg",
      "images/28.jpg"
      
    ],
    modelo: "Aylen Carrillo", 
    locacion: "El Refugio de Yala -Jujuy" 
  },
  {
    id: 10,
    nombre: "Vestido Turquesa Diamante",
    categoria: "Gala | Exclusivo",
    descripcion: "Vestido en Turquesa Vibrante con aplicaciones de encaje y lentejuelas en contraste dorado y negro. La combinación de colores ofrece un impacto visual.",
    detalles: "La mezcla de encaje y lentejuelas en tonos metálicos sobre la base turquesa asegura un efecto de 'joya' que brilla en la pista de baile.",
imagen: "images/29.jpg",     
imagenes: [
      "images/29.jpg",
      "images/30.jpg",
      "images/31.jpg",
      "images/32.jpg"
      
    ],
    modelo: "Martina Zamar", 
    locacion: "El Refugio de Yala -Jujuy" 
  },
   {
    id: 11,
    nombre: "Vestido Satén con Tul Tornasol",
    categoria: "Gala | Iridiscente",
    descripcion: "Vestido de Satén Blanco cubierto por un tul finamente bordado con lentejuelas tornasoladas. El diseño proporciona una silueta limpia.",
    detalles: "El efecto tornasol de las lentejuelas ofrece un destello de color cambiante y sofisticado, ideal para quienes buscan un brillo elegante sin ser excesivo.",
imagen: "images/40.jpg",     
imagenes: [
      "images/40.jpg",
      "images/41.jpg",
      "images/42.jpg",
      "images/43.jpg"

    ],
    modelo: "Aylen Carrillo", 
    locacion: "El Refugio de Yala -Jujuy" 
  },
    {
    id: 12,
    nombre: "Colección Alta Costura (Recopilación)",
    categoria: "Colección | Muestra",
    descripcion: "Muestra de diseños de Alta Costura, destacando la versatilidad de la colección en tonalidades Blanco, Nude, Naranja y Amarillo.",
    detalles: "Una muestra de diseños de Gabriela Orellana, ideal para inspirarse en la creación de un vestido hecho a medida y exclusivo.",
imagen: "images/33.jpg",     
imagenes: [
      "images/33.jpg",
      "images/34.jpg",
      "images/36.jpg",
      "images/37.jpg",
      "images/38.jpg",
      "images/39.jpg",
    ],
    modelo: "Aylen Carrillo y Martina Zamar", 
    locacion: "El Refugio de Yala -Jujuy" 
  },

]

function App() {
  const [vestidoSeleccionado, setVestidoSeleccionado] = useState(null)
  const [imagenActual, setImagenActual] = useState(0)
  const [zoom, setZoom] = useState(false) 


  const abrirModal = (vestido) => {
    setVestidoSeleccionado(vestido)
    setImagenActual(0) 
    setZoom(false)
  }

  const cerrarModal = () => {
    setVestidoSeleccionado(null)
    setImagenActual(0)
    setZoom(false)
  }

  const imagenAnterior = () => {
    if (vestidoSeleccionado && vestidoSeleccionado.imagenes) {
      setImagenActual(prev => 
        prev === 0 ? vestidoSeleccionado.imagenes.length - 1 : prev - 1
      )
    }
  }

  const imagenSiguiente = () => {
    if (vestidoSeleccionado && vestidoSeleccionado.imagenes) {
      setImagenActual(prev => 
        prev === vestidoSeleccionado.imagenes.length - 1 ? 0 : prev + 1
      )
    }
  }

  const contactarWhatsApp = (vestido) => {
    const whatsappUrl = generateWhatsAppUrl(vestido, 'preview')
    window.open(whatsappUrl, '_blank')
  }
  const contactarWhatsAppGeneral = () => {
    const url = generateGeneralWhatsAppUrl()
    window.open(url, '_blank')
  }

  return (
    <div className="app">
<header className="header fade-in">
  <div className="header-content centered-header">
    <div className="logo-centered">
      <img
        src="images/logo.png"
        alt="Creaciones Gabriela Alta Costura"
        className="logo-img-centered"
      />
      <div className="logo-text-centered">
        <div className="logo-main-centered">CREACIONES GABRIELA</div>
        <div className="logo-sub-centered">Alta Costura |   Diseños Exclusivos de Gabriela Orellana</div>
      </div>
    </div>
    <div className="social-icons-centered">
      <a href="https://www.instagram.com/creaciones.gabriela.jujuy/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon" />
      </a>
      <a href="https://www.facebook.com/gabriela.orellana.9659/" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon" />
      </a>
      <a
        href="https://www.google.com/maps/place/Creaciones+Gabriela/@-24.2608614,-65.2153206,17z/data=!3m1!4b1!4m6!3m5!1s0x941b079d95a15159:0x44d2bbee50cad4d0!8m2!3d-24.2608614!4d-65.2153206!16s%2Fg%2F11wmv_yft1?hl=es-419&entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="maps-link"
        title="Ver ubicación en Google Maps"
      >
        <FaMapMarkerAlt className="maps-icon" />
        Salina Grande 701 barrio Paso de Jama - Palpalá - Jujuy
      </a>
    </div>
  </div>
</header>

<section className="hero">
  <div className="hero-content">
    <div className="hero-text fade-in">
      <h1>CREACIONES GABRIELA</h1> 
      <h2>EL ARTE DE VESTIR</h2>
    </div>
  </div>
</section>


      <section className="products">
<div className="products-grid">
  {vestidos.map((vestido, index) => (
    <div 
      key={vestido.id} 
      className="product-card fade-in" 
      onClick={() => abrirModal(vestido)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
<div className="product-image" style={{ position: "relative" }}>
  <img src={vestido.imagen} alt={vestido.nombre} />
</div>
              <div className="product-info">
                <h3 className="product-title">{vestido.nombre}</h3>
                <p className="product-description">{vestido.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {vestidoSeleccionado && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content-enhanced" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{vestidoSeleccionado.nombre}</h2>
              <span className="modal-category">{vestidoSeleccionado.categoria}</span>
              <button className="close-button" onClick={cerrarModal}>×</button>
            </div>
            <div className="modal-body-enhanced">

              <div className="image-gallery">
<div className="modal-main-image" style={{ position: "relative" }}>
  {vestidoSeleccionado.imagenes && vestidoSeleccionado.imagenes.length > 1 && (
    <button
      className="modal-arrow modal-arrow-left"
      onClick={() =>
        setImagenActual(
          imagenActual === 0
            ? vestidoSeleccionado.imagenes.length - 1
            : imagenActual - 1
        )
      }
    >
      <svg width="32" height="32" viewBox="0 0 22 22" fill="none">
        <path d="M14 6L9 11L14 16" stroke="#646cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )}
  <img
    src={vestidoSeleccionado.imagenes[imagenActual]}
    alt={vestidoSeleccionado.nombre}
    className="main-image"
  />
  {vestidoSeleccionado.imagenes && vestidoSeleccionado.imagenes.length > 1 && (
    <button
      className="modal-arrow modal-arrow-right"
      onClick={() =>
        setImagenActual(
          imagenActual === vestidoSeleccionado.imagenes.length - 1
            ? 0
            : imagenActual + 1
        )
      }
    >
      <svg width="32" height="32" viewBox="0 0 22 22" fill="none">
        <path d="M8 6L13 11L8 16" stroke="#646cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )}
</div>
              </div>
              
              <div className="product-info-enhanced">
                
                <p className="modal-description">{vestidoSeleccionado.descripcion}</p>
                <p className="modal-details">{vestidoSeleccionado.detalles}</p>

                {/* ⭐️ MODIFICACIÓN: Usamos el campo 'modelo' y 'locacion' del vestido ⭐️ */}
                <div className="modal-metadata">
                    <p><strong>Modelo:</strong> {vestidoSeleccionado.modelo || "Aylen Carrillo"}</p>
                    <p><strong>Locación:</strong> {vestidoSeleccionado.locacion || "El Refugio de Yala"}</p>
                </div>
                

                <button 
                  className="whatsapp-button-enhanced"
                  onClick={() => contactarWhatsApp(vestidoSeleccionado)}
                >
                  <FaWhatsapp className="whatsapp-icon" />
                  📱 CONSULTAR POR WHATSAPP
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="floating-whatsapp" onClick={contactarWhatsAppGeneral}>
        <div className="whatsapp-bar">
          <FaWhatsapp className="whatsapp-icon-large" />
          <span className="whatsapp-text">CONSULTA</span>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <a href="https://github.com/tu-usuario/mi-catalogo" target="_blank" rel="noopener noreferrer" className="github-link">
            </a>
            
            <a 
              href="https://linkedin.com/in/fatima-melisa-lino-744166225" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="developer-credit-link" 
            >
              <FaLinkedin className="developer-icon" /> 
              Desarrollado por Fátima Melisa Lino
            </a>
            
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App