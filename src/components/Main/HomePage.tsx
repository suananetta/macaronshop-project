// import Link from "next/link"
import Image from "next/image"
import './styles.min.css'
import LinkCard from "./Cards/LinkCard/LinkCard"

export default function Home() {
  
  let linkCards = [
    {
      icon: '/icon-sets.svg',
      title: 'Готовые наборы',
      description: 'Готовые наборы со скидкой. Вы можете подобрать набор на подходящий случай.'
    },
    {
      icon: '/icon-custom.svg',
      title: 'Собрать свой набор',
      description: 'Выбрать количество макарун, и выбрать вкусы.'
    },
    {
      icon: '/icon-individual.svg',
      title: 'Набор с индивидуальной печатью',
      description: 'Собрать набор макарон с уникальным дизайном. '
    },
    {
      icon: '/icon-weddings.svg',
      title: 'Свадебные предложения',
      description: 'Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества.'
    },
    {
      icon: '/icon-corporate.svg',
      title: 'Корпоративные подарки',
      description: 'От 85 руб за шт. С уникальным дизайном. Приятный комплимент для коллег и партнеров.'
    },
    {
      icon: '/icon-wholesale.svg',
      title: 'Оптовые поставки',
      description: 'Предложение для кофеен, кафе, отелей и т.д. Посмотрите условия сотрудничества и отзывы.'
    }
  ]

    return (
      <main>
        <div className="container">
          <section className="intro">
            <div className="intro-info">
              <h3>Macaronshop</h3>
              <div className="intro-info-item"><hr />since 2013<hr /></div>
              
              <h1>Настоящая любовь</h1>
              <p>Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</p>
            </div>
          </section>
          <section className="links">
            <LinkCard cardsArr={linkCards}/>
          </section>
          <section className="sales">
            <h2>Акции</h2>
            
          </section>
        </div>
      </main>
    )
  }