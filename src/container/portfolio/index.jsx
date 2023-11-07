import React, { useState } from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderConten from "../../component/pageHeaderContent";
import Currancy_Converter from './images/Currancy_Converter.jpg';
import Hotel_Booking from './images/Hotel_Booking.jpg';
import Kfc_Billing from './images/Kfc_Billing.jpg';
import Todo_App from './images/Todo_App.jpg';
import weather_Image from './images/weather_Image.jpg';
import image6 from './images/image6.jpg';
import './style.scss';

const portfolioData = [
  {
    id: 2,
    name: "Currancy_Converter",
    image: Currancy_Converter,
    link : ''
  },
  {
    id: 3,
    name: "Hotel-Booking",
    link : '',
    image: Hotel_Booking
  },
  {
    id: 2,
    name: "Kfc_Billing",
    link : '',
    image: Kfc_Billing
  },
  {
    id: 2,
    name: "Todo_App",
    image: Todo_App,
    link: ''
  },
  {
    id: 3,
    name: "Weather_App",
    image: weather_Image,
    link: '',
  },
  {
    id: 3,
    name: "Developer",
    image: image6,
    link: '',
  },


];

const filterData = [
  {
    filterId: 1,
    label: 'All'
  },
  {
    filterId: 2,
    label: 'Development'
  },
  {
    filterId: 3,
    label: 'Design'
  }
]

const Portfolio = () => {

  const [filteredvalue, setFilterValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null)

  function handleFilter(currentId) {
    setFilterValue(currentId)
  };

  function handleHover(index){
    setHoveredValue(index)
  }

  console.log('=======================');
  console.log(hoveredValue);
  console.log('=====================');

  const filteredItems = filteredvalue === 1 ? portfolioData :
    portfolioData.filter(item => item.id === filteredvalue)

  console.log(filteredItems);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderConten headerText="My Portfolio" icon={<BsInfoCircleFill size={40} />}
      />

      <div className='portfolio__content'>
        <ul className='portfolio__content__filter'>
          {
            filterData.map(item => (
              <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>

                {
                  item.label
                }
              </li>
            ))
          }
        </ul>
        <div className='portfolio__content__cards'>
          {
            filteredItems.map((item, index) => (
              <div className='portfolio__content__cards__item'
               key={`cardItem ${item.name.trim()}`}
               onMouseEnter={()=>handleHover(index)}
               onMouseLeave={()=>handleHover(null)}
               >

                <div className='portfolio__content__cards__item__img-wrapper'>
                  <a>
                    <img  alt='dummay' src={item.image} />
                  </a>
                </div>
                <div className='overlay'>
                {
                  index === hoveredValue && (
                    <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                    </div>
                  )
                }

                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Portfolio