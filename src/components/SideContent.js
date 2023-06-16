import '../stylesheets/SideContent.css'
import CardBack from './CardBack';
import CardFront from './CardFront';

function SideContent({ numeroDeTarjeta }) {
    return (
        <aside className='side-content-box'>
            <img className='img-side' src={(require('../images/bg-main-desktop.png'))} />
            <CardFront numeroDeTarjeta={numeroDeTarjeta}/>
            <CardBack></CardBack>
        </aside>
    );
}

export default SideContent;