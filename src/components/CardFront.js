import '../stylesheets/CardFront.css'
import logo from '../images/card-logo.svg'

function CardFront({ nombreDeTarjeta, numeroDeTarjeta, mesDeExpiracion, anoDeExpiracion }) {
    const agregarEspacios = () => {
        if (numeroDeTarjeta.length == 0) {
            return '0000 0000 0000 0000';
        } else {
            let toArray = numeroDeTarjeta.split('');
        for (let i=0; i < numeroDeTarjeta.length; i++) {
            if (i == 4) {
                toArray.splice(4,0,' ');
            }
            if (i == 8) {
                toArray.splice(9,0,' ');
            }
            if (i == 12) {
                toArray.splice(14,0,' ');
            }
        }
        return toArray;
        }
    }
    const cardDefaultValues = (input, outputDefaultValue) => {
        if (input.length == 0) {
            return outputDefaultValue;
        } else {
            let capitals = input.toUpperCase();
            return capitals;
        }
    }

    return (
        <div className='card-front'>
            <div className='card-front-logobox'>
                <img className='logo' src={logo} />
            </div>
            <div className='card-front-infobox'>
                <div className='card-front-number'>
                    {agregarEspacios()}
                </div>
                <div className='card-front-infobox-row'>
                    <div className='card-front-name'>
                        {cardDefaultValues(nombreDeTarjeta, 'JANE APPLESEED')}
                    </div>
                    <div className='card-front-expiration'>
                        {cardDefaultValues(mesDeExpiracion, '00')}/{cardDefaultValues(anoDeExpiracion, '00')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFront;