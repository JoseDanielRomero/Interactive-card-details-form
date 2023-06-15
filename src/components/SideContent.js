import '../stylesheets/SideContent.css'
import CardBack from './CardBack';
import CardFront from './CardFront';

function SideContent() {
    return (
        <div className='side-content-box'>
            <img className='img-side' src={(require('../images/bg-main-desktop.png'))} />
            <CardFront></CardFront>
            <CardBack></CardBack>
        </div>
    );
}

export default SideContent;