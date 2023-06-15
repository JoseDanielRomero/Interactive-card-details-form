import '../stylesheets/CardFront.css'
import logo from '../images/card-logo.svg'

function CardFront() {
    return (
        <div className='card-front'>
            <div className='card-front-logobox'>
                <img className='logo' src={logo} />
            </div>
            <div className='card-front-infobox'>
                <div className='card-front-number'>
                    0000 0000 0000 0000
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