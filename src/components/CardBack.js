import '../stylesheets/CardBack.css'

function CardBack({ codigoDeTarjeta }) {
    const cardDefaultValues = (input, outputDefaultValue) => {
        if (input.length == 0) {
            return outputDefaultValue;
        } else {
            return codigoDeTarjeta;
        }
    }

    return (
        <div className='card-back'>
            <div className='card-back-cvc'>
                {cardDefaultValues(codigoDeTarjeta, '000')}
            </div>
        </div>
    )
}

export default CardBack;