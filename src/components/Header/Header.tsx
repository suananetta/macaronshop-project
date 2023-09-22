import Link from "next/link"
import Image from "next/image"
import './styles.min.css'


export default function Header() {
    return (
      <header>
        <div className="container">
            <div className="company-info">
                <nav>
                    <ul>
                        <Link href={''}>Гарантия свежести</Link>
                        <Link href={''}>Доставка и оплата</Link>
                        <Link href={''}>Оптовые поставки</Link>
                        <Link href={''}>Контакты</Link>
                    </ul>
                </nav>
                <div className="info">
                    <div className="info-item">
                        <Image src="/place.svg" width={24} height={24} alt="" />
                        <span>Санкт-Петербург</span>
                    </div>
                    <div className="info-item">
                        <Image src="/phone.svg" width={24} height={24} alt="" />
                        <span>8 812 309-82-88</span>
                    </div>
                    <div className="info-item">
                        <Image src="/bag.svg" width={24} height={24} alt="" />
                        <span>В корзине (4 товара)</span>
                    </div>
                </div>
                <div className="links">
                    <Link href={''}><Image src="/telegram.svg" width={24} height={24} alt="" /></Link>
                    <Link href={''}><Image src="/vk.svg" width={24} height={24} alt="" /></Link>
                    <Link href={''}><Image src="/classmates.svg" width={24} height={24} alt="" /></Link>
                </div>
            </div>
            <div className="options-info">
                <Link href={''} className="options-info-item">Собрать набор</Link>

                <select className="options-info-item" name="" id="" >
                    <option value="gift baskets">подарочные наборы</option>
                </select>

                <Link href={''} className="options-info-item">Собрать набор</Link>

                <Image src="/logo.svg" width={124} height={124} alt="logo" className="options-info-item"/>

                <Link href={''} className="options-info-item">Создать дизайн</Link>

                <select className="options-info-item" name="" id="" >
                    <option value="for companies">КОМПАНИЯМ</option>
                </select>

                <select className="options-info-item" name="" id="" >
                    <option value="entire catalog">ВЕСЬ КАТАЛОГ</option>
                </select>
            </div>
        </div>
      </header>
    )
  }