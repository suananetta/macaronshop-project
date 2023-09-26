// import Link from "next/link"
import Image from "next/image"
import './styles.min.css'
import LinkCard from "./Cards/LinkCard/LinkCard"
import SaleCard from "./Cards/SaleCard/SaleCard"
import Button from "../_shared/Button/Button"

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

  let salesCards = [
    {
      id: '9443685a',
      theme: '#8CC4EC',
      badge: 'БЕСПЛАТНАЯ ДОСТАВКА',
      image: '/sale-macarons.png',
      description: 'По СПб в районе КАД –  от 3000₽По МСК – от 5000₽'
    },
    {
      id: 'a5915b26',
      theme: '#FF4D6D',
      badge: 'НОВИНКА',
      image: '/sale-potatocake.png',
      description: 'Шоколадное пирожное картошка на основе бисквита!'
    },
    {
      id: 'a591651c',
      theme: '#FF4D6D',
      badge: 'НОВИНКА',
      image: '/sale-candies.png',
      description: 'Аппетитные конфеты на основе миндального печенья и крема'
    },
    {
      id: 'a59167ba',
      theme: '#FF4D6D',
      badge: 'СЛАДКАЯ НОВИНКА',
      image: '/sale-caramel.png',
      description: 'Карамель на палочке из натуральных ингредиентов'
    },
  ]

  let holidayIcons = [
    '/holiday-hb.svg',
    '/holiday-green.svg',
    '/holiday-pink.svg',
    '/holiday-orange.svg',
  ]

  let holidays = [
    {
      date: 'Скоро',
      event: 'День рождения близкого человека'
    },
    {
      date: '1 января',
      event: 'Новый Год 2021'
    },
    {
      date: '14 февраля',
      event: 'День Святого Валентина'
    },
    {
      date: '23 февраля',
      event: 'День Защитника Отечества'
    },
    {
      date: '8 марта',
      event: 'Международный Женский День',
    },
    {
      date: '9 марта',
      event: 'День Сурка',
    }
  ]

    return (
      <main>
        <div className="container">

          <section className="section-intro">
            <div className="intro-info">
              <h3>Macaronshop</h3>
              <div className="intro-info-item"><hr />since 2013<hr /></div>
              
              <h1>Настоящая любовь</h1>
              <p>Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</p>
            </div>
          </section>

          <section className="section-links">
            <LinkCard cardsArr={linkCards}/>
          </section>

          <section className="section-sales">
            <h2>Акции</h2>
            <div className="sales-cards">
              <SaleCard cardsArr={salesCards}/>
            </div>
            <div className="sales-buttons">
              <Button
                btnClass='sale-btn active'
                btnName=''
                disabled={false}
                // onClick={}
              />
              <Button
                btnClass='sale-btn'
                btnName=''
                disabled={false}
                // onClick={}
              />
              <Button
                btnClass='sale-btn'
                btnName=''
                disabled={false}
                // onClick={}
              />
            </div>
          </section>

          <section className="section-holidays">
            <h2>Ближайшие праздники</h2>
            <hr />
            <div className="holidays-macarons">
              <Image src="/holiday-orange.svg" width={77} height={59} alt="" />
              <Image src="/holiday-green.svg" width={62} height={47} alt="" />
              <Image src="/holiday-pink.svg" width={62} height={47} alt="" />
              <Image src="/holiday-orange.svg" width={62} height={47} alt="" />
              <Image src="/holiday-green.svg" width={62} height={47} alt="" />
              <Image src="/holiday-pink.svg" width={62} height={47} alt="" />
            </div>
            <div className="holidays-items">
              {
                holidays.map(item => {
                  if (item.event.includes('День рождения')) {
                    return (
                      <div className="holidays-item">
                        <Image className="party-hat" src="/holiday-party-hat.svg" width={52} height={81} alt="" />
                        <span>{item.date}</span>
                        <span>{item.event}</span>
                      </div>
                    )
                  } else {
                    return (
                      <div className="holidays-item">
                        <span>{item.date}</span>
                        <span>{item.event}</span>
                      </div>
                    )
                  }
                })
              }
              
            </div>
          </section>

          <section className="section-popular-sets">
            <h2>Популярные наборы</h2>
          </section>
        </div>
      </main>
    )
  }