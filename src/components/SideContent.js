import '../stylesheets/SideContent.css'
import CardBack from './CardBack';
import CardFront from './CardFront';

function SideContent({ nombreDeTarjeta, numeroDeTarjeta, mesDeExpiracion, anoDeExpiracion, codigoDeTarjeta }) {
    return (
        <aside className='side-content-box'>
            <img className='img-side' src={(require('../images/bg-main-desktop.png'))} />
            <CardFront
                nombreDeTarjeta={nombreDeTarjeta}
                numeroDeTarjeta={numeroDeTarjeta}
                mesDeExpiracion={mesDeExpiracion}
                anoDeExpiracion={anoDeExpiracion}
            />
            <CardBack codigoDeTarjeta={codigoDeTarjeta} />
        </aside>
    );
}

export default SideContent;