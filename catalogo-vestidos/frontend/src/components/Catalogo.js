import React, { useEffect, useState } from 'react';
import VestidoCard from './VestidoCard';
import WhatsAppButton from './WhatsAppButton';
import './styles/main.css';

const Catalogo = () => {
    const [vestidos, setVestidos] = useState([]);

    useEffect(() => {
        const fetchVestidos = async () => {
            const response = await fetch('http://localhost:8000/api/vestidos/'); 
            const data = await response.json();
            setVestidos(data);
        };

        fetchVestidos();
    }, []);

    return (
        <div className="catalogo-container">
            <h1>Catálogo de Vestidos</h1>
            <div className="vestidos-grid">
                {vestidos.map((vestido) => (
                    <VestidoCard key={vestido.id} vestido={vestido} />
                ))}
            </div>
            <WhatsAppButton />
        </div>
    );
};

export default Catalogo;