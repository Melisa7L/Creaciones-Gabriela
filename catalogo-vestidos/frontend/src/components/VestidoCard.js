import React from 'react';
import './VestidoCard.css';

const VestidoCard = ({ vestido }) => {
    const handleWhatsAppClick = () => {
        const message = `Deseo tener más información sobre este vestido: ${vestido.descripcion}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="vestido-card">
            <img src={vestido.imagenUrl} alt={vestido.nombre} className="vestido-image" />
            <div className="vestido-info">
                <h3 className="vestido-title">{vestido.nombre}</h3>
                <p className="vestido-description">{vestido.descripcion}</p>
                <button className="whatsapp-button" onClick={handleWhatsAppClick}>
                    Consultar por WhatsApp
                </button>
            </div>
        </div>
    );
};

export default VestidoCard;