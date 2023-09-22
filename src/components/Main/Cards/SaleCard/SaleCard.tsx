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

export default function SaleCard({cardsArr}:Cards) {
    return (
        cardsArr.map((card:Card, index:number) => {
            return (
                <div key={card.title} className={`link-card item${index}`}>

                </div>
            )
        })
    )
  }