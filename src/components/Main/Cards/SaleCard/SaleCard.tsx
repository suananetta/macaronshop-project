import Link from "next/link"
import Image from "next/image"
// import './styles.min.css'


type Card = {
    id: string;
    theme: string;
    badge: string;
    image: string;
    description: string
}

type Cards = {
    cardsArr: Array<Card>;
}

export default function SaleCard({cardsArr}:Cards) {
    return (
        cardsArr.map((card:Card, index:number) => {
            return (
                <div key={card.id} className={`sale-card item${index}`} 
                    style={{
                        background: `top/130% 70% no-repeat url(${card.image}), linear-gradient(to bottom, transparent 10%, ${card.theme})90%`,
                        backgroundImage: ``
                    }}
                >
                    <div className="sale-card-badge" style={{backgroundColor:`${card.theme}`}}>
                        <span>{card.badge}</span>
                    </div>
                    <p>{card.description}</p>
                </div>
            )
        })
    )
  }