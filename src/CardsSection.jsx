import './css/cards_section.css';
import Image1 from "./assets/image-7.png";
import Image2 from "./assets/image-8.png";
import Image3 from "./assets/image-9.png";
import Image4 from "./assets/image-10.png";
import Image5 from "./assets/image-2.png";
import Image6 from "./assets/image-11.png";
import { Card } from './Card';

export const CardsSection = () => {
    return (
        <section className="cards-section">
            <h2 className='title'>Para onde você quer viajar?</h2>

            <div className="cards-wrapper">
                {cards.map((card, index) => (
                    <Card key={index} image={card.image}
                        description={card.description}
                        title={
                            <>
                                <span className='font-bold'>{card.destination.city}</span>, <span style={{ fontSize: '0.875rem' }}>{card.destination.country}</span>
                            </>
                        }
                    >
                        <div className='price-wrapper'>
                            <div className='prices'>
                                <span className='current-price'>{formatBRL(card.currentPrice)}</span>
                                <span className='old-price'>{formatBRL(card.oldPrice)}</span>
                            </div>

                            <a href='#'className='button btn-orange font-bold'>Saiba mais</a>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}

const formatBRL = (value) => {
  const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

  return formatter.format(value)
}


const cards  = [
  {
    "destination": {
      "city": "Barcelona",
      "country": "Espanha"
    },
    "description": "Pariatur autem harum ratione eveniet porro quidem distinctio, laudantium ducimus ipsam temporibus.",
    "currentPrice": 3900,
    "oldPrice": 4400,
    "image": Image1
  },
  {
    "destination": {
      "city": "Porto",
      "country": "Portugal"
    },
    "description": "Pariatur autem harum ratione eveniet porro quidem distinctio, laudantium ducimus ipsam temporibus.",
    "currentPrice": 3700,
    "oldPrice": 4300,
    "image": Image2
  },
  {
    "destination": {
      "city": "Milão",
      "country": "Itália"
    },
    "description": "Pariatur autem harum ratione eveniet porro quidem distinctio, laudantium ducimus ipsam temporibus.",
    "currentPrice": 3500,
    "oldPrice": 4200,
    "image": Image3
  },
  {
    "destination": {
      "city": "Londres",
      "country": "Inglaterra"
    },
    "description": "Pariatur autem harum ratione eveniet porro quidem uae distinctio, laudantium ducimus ipsam temporibus.",
    "currentPrice": 4200,
    "oldPrice": 4900,
    "image": Image4
  },
  {
    "destination": {
      "city": "Lauterbrunnen",
      "country": "Suíça"
    },
    "description": "Pariatur autem harum ratione eveniet porro quidem distinctio, laudantium ducimus ipsam temporibus.",
    "currentPrice": 3900,
    "oldPrice": 4300,
    "image": Image5
  },
  {
    "destination": {
      "city": "Paris",
      "country": "França"
    },
    "description": "Pariatur autem harum ratione eveniet porro quidem distinctio, laudantium ducimus ipsam temporibus.",
    "currentPrice": 4500,
    "oldPrice": 5300.00,
    "image": Image6
  }
]
