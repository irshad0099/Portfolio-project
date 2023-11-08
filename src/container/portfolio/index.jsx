import React, { useState } from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderConten from "../../component/pageHeaderContent";
import Converter__Currancy from './images/Converter__Currancy.jpg';
import Booking__Hotel from './images/Booking__Hotel.jpg';
import Kfc from './images/kfc.jpeg';
import Todo_App from './images/Todo_App.jpg';
import App__Wether from './images/App__Wether.jpg';
import React__code1 from './images/React__code1.jpg';
import './style.scss';

const portfolioData = [
  {
    id: 2,
    name: "Currancy_Converter",
    image: Converter__Currancy,
    link : ''
  },
  {
    id: 3,
    name: "Hotel-Booking",
    link : '',
    image: Booking__Hotel
  },
  {
    id: 2,
    name: "Kfc_Billing",
    link : '',
    image: Kfc
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
    image: App__Wether ,
    link: '',
  },
  {
    id: 3,
    name: "Developer",
    image: React__code1,
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