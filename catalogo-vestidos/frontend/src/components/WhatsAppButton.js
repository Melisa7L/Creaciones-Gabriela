import React from 'react';

const WhatsAppButton = ({ vestido }) => {
    const mensaje = `Deseo tener más información sobre este vestido: ${vestido.descripcion}`;
    const numeroWhatsApp = '3884359548'; 
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    return (
        <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
            <img src="/path/to/whatsapp-icon.svg" alt="WhatsApp" />
            Contactar por WhatsApp
        </a>
    );
};

export default WhatsAppButton;