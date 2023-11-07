import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderConten from "../../component/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import './style.scss'


const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderConten headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}

      />

      <div className='contact__content'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)"
          }}
          end={{
            transform: "translate(0px)"
          }}
        >

          <h3 className='contact__content__header-text'>Let's Talk</h3>

        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)"
          }}
          end={{
            transform: "translate(0px)"
          }} 
        >

          <div className='contact__content__form'>

            <div className='contact__content__form__controlswrapper'>
              <div className='nameWrapper'>
                <input required name='name' className='inputName' type={'text'} />
                <label htmlFor='name' className='nameLabel'>Name</label>
              </div>
              <div className='emailWrapper'>
                <input required name='email' className='inputEmail' type={'text'} />
                <label htmlFor='email' className='emailLabel'>Email</label>
              </div>
              <div className='descriptionWrapper'>
               <textarea 
               required
               name='description'
               className='inputDescription'
               type={"text"}
               rows="5"
               />
                <label htmlFor='description' className='descriptionLabel'>Description</label>
              </div>

            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  )
};

export default Contact