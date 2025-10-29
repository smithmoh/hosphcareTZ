import React from 'react';
import styles from "../style"
import styled from 'styled-components';
import MapImg from '../assets/map.png';
import featuresData from '../constants/index';

const MapStyles = styled.div`
  
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <section>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {featuresData.map((featuresData) => (
          <div key={featuresData.id} className={`flex-1 flex justify-center items-left flex-col m-3`} >
              <span className="primaryText font-poppins font-semibold xs:text-[20.45px] text-black">
              {featuresData.title}
              </span>
              <p className="primaryText font-normal xs:text-[16.45px] text-[12.45px]">
              {featuresData.text}
              </p>
          </div>
        ))}
      </div>
      <MapStyles>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        { <img src={MapImg} alt="Map" />}
        </div>
      </MapStyles>
    </section>
  );
}