
export const config = {
  whatsappNumber: '3884359548',
  
  whatsappMessage: {
    greeting: '¡Hola! Me encantó este vestido 😍 ¿Podrían darme más info? ¡Gracias!',

    template: (vestido) => `${config.whatsappMessage.greeting}

${vestido.imagen}

📸 *${vestido.nombre}*
🏷️ Categoría: ${vestido.categoria}
📝 ${vestido.descripcion}`,

    templateWithLink: (vestido) => `${config.whatsappMessage.greeting}

Ver imagen: ${vestido.imagen}

📸 *${vestido.nombre}*
🏷️ Categoría: ${vestido.categoria}
📝 ${vestido.descripcion}`,

    generalMessage: '¡Hola! Me gustaría hacer una consulta sobre sus vestidos. ¿Podrían ayudarme? 😊'
  }
}

export const generateWhatsAppUrl = (vestido, method = 'preview') => {
  let message
  
  switch(method) {
    case 'preview':
      message = config.whatsappMessage.template(vestido)
      break
    case 'link':
      message = config.whatsappMessage.templateWithLink(vestido)
      break
    default:
      message = config.whatsappMessage.template(vestido)
  }
  
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`
}
export const generateGeneralWhatsAppUrl = () => {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappMessage.generalMessage)}`
}
