import '../stylesheets/CardFront.css'
import logo from '../images/card-logo.svg'

function CardFront({ numeroDeTarjeta }) {
    const agregarEspacios = () => {
        let toArray = numeroDeTarjeta.split('');
        for (let i=0; i < numeroDeTarjeta.length; i++) {
            if (i == 4) {
                toArray.splice(4,0,' ')
            }
            if (i == 8) {
                toArray.splice(9,0,' ')
            }
            if (i == 12) {
                toArray.splice(14,0,' ')
            }
        }
        return toArray;
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
                        JOSE ROMERO
                    </div>
                    <div className='card-front-expiration'>
                        06/24
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFront;