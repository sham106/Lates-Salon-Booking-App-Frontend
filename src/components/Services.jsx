import React from 'react';
import styled from "styled-components";
import service1 from "assets/service1.png";
import service2 from "assets/service2.png";
import service3 from "assets/service3.png";
import play from "assets/play.png";
import { useScroll } from "components/useScroll";
import { motion } from "framer-motion";
import { servicesAnimations } from "animation";


function Services() {
  const [element, controls] = useScroll();

  const services = [
    {
      title: 'Haircut',
      description: 'A stylist will cut your hair according to your desired length and style.',
      price: 'From Ksh 600',
      image: 'img/haircut.png',
    },
    {
      title: 'Hair coloring',
      description: 'A stylist will color your hair according to your desired shade.',
      price: 'From Ksh 1500',
      image: 'img/beard-trim.png',
    },
    {
      title: 'Hair styling',
      description: 'A stylist will style your hair according to your desired look',
      price: 'From Ksh 500',
      image: 'img/beard-trim.png',
    },
    {
      title: 'Hair extensions',
      description: 'A stylist will add hair extensions to your natural hair to add length or volume.',
      price: 'From Ksh 1500',
      image: 'img/beard-trim.png',
    },
    {
      title: 'Nail art',
      description: ' A nail technician will paint your nails with intricate designs or patterns.',
      price: 'From Ksh 400',
      image: 'img/beard-trim.png',
    },
    {
      title: 'Shampooing and conditioning',
      description: 'A stylist will wash and condition your hair.',
      price: 'From Ksh 700',
      image: 'img/beard-trim.png',
    },
    {
      title: 'Blow drying',
      description: 'A stylist will dry your hair using a blow dryer.',
      price: 'From Ksh 300',
      image: 'img/beard-trim.png',
    },
    // Add more services here
    // ...
  ];

  return (
    <div className="container-xxl py-5 service-container" id='services'>
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <p className="d-inline-block bg-secondary text-primary py-1 px-4">Services</p>
          <h1 className="text-uppercase">What We Provide</h1>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={index}>
              <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                <div className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                  <img className="img-fluid" src={service.image} alt="" />
                </div>
                <div className="ps-4">
                  <h3 className="text-uppercase mb-3">{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="text-uppercase text-primary">{service.price}</span>
                </div>
                <a className="btn btn-square" href=""><i className="fa fa-plus text-primary"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}

// const Section = styled.section`
// min-height: 100vh;
// .services {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   align-items: center;
//   height: 100%;
//   margin: 0 14rem;
//   margin-top: 10rem;
//   gap: 5rem;
//   &__service {
//     padding: 2rem;
//     &:nth-of-type(2) {
//       background-color: var(--primary-color);
//       .services__service__title {
//         span {
//           color: #fff;
//         }
//       }
//       .services__service__description {
//         color: #fff;
//       }
//     }
//     &__image {
//       margin-bottom: 3rem;
//     }
//     &__title {
//       span {
//         color: var(--primary-color);
//         font-weight: bolder;
//       }
//       h2 {
//         font-size: 3rem;
//         line-height: 2.5rem;
//         margin-bottom: 5rem;
//         color: var(--secondary-color);
//       }
//     }
//     &__description {
//       color: var(--primary-color);
//       margin-bottom: 2rem;
//     }
//   }
// }
// @media screen and (min-width: 280px) and (max-width: 1080px) {
//   .services {
//     margin: 2rem 0;
//     grid-template-columns: 1fr;
//     gap: 2rem;
//     padding: 0 2rem;
//   }
// }
// `;

export default Services