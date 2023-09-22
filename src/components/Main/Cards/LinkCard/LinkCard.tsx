import Link from "next/link"
import Image from "next/image"
// import './styles.min.css'


type Card = {
    icon: string;
    title: string;
    description: string
}

type Cards = {
    cardsArr: Array<Card>
}

export default function LinkCard({cardsArr}:Cards) {
    return (
        cardsArr.map((card:Card, index:number) => {
            return (
                <div key={card.title} className={`link-card item${index}`}>
                    <Image src={card.icon} width={100} height={100} alt={card.title} />
                    <Link href={''} className="link-card-title">
                        {card.title} 
                        <Image src="/link-arrow.svg" width={16} height={10} alt='arrow' />
                    </Link>
                    <p className="link-card-description">{card.description}</p>
                </div>
            )
        })
    )
  }