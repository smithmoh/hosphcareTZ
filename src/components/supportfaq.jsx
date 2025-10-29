import { useState } from 'react';
import styles from '../style';
import Faq from '../constants/Faq'
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';



const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: 0em 1em;
  h1 {
    padding: 1rem;
    font-size: 1rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #fff;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #256aeb;

  p {
    font-size: 1rem;
    margin: 1rem
  }
`;


const Supportfaq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section id="hero" className={`flex md:flex-row flex-col bg-blue-gradient ${styles.paddingY}`}>
      <div className={`flex-1 flex ${styles.flexStart} ${styles.flexCenter} md:my-0 my-10 relative`}>
        <IconContext.Provider value={{ color: '#256aeb', size: '25px' }}>
          <section>
            <div>
              {Faq.map((item, index) => (          
                <div key={index}>
                  <Wrap onClick={() => toggle(index)} >
                    <h1>{item.question}</h1>
                    <div>{clicked === index ? <FiMinus /> : <FiPlus />}</div>
                  </Wrap>
                  {clicked === index ? (<Dropdown><p>{item.answer}</p></Dropdown>) : null}
                </div>
              ))}
            </div>
          </section>
        </IconContext.Provider>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section> 
  );
};
export default Supportfaq;

      