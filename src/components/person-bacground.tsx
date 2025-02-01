
"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Card = () => {

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100) 
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) return null; 

  return (
    <StyledWrapper >
      <div className="card relative">
        <Image src="https://uiverse.io/astronaut.png" alt="" className="image" width={300} height={300} />
        <div className="heading"></div>
        <div className="icons">
         
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* HOLD THE ASTRONAUT */

  .card {
    position: relative;
    width: 19em;
    height: 25em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0a0a0a;
    color: white;
    font-family: Montserrat;
    font-weight: bold;
    padding: 1em 2em 1em 1em;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1;
    row-gap: 1em;
  }
  .card img {
    width: 12em;
    margin-right: 1em;
    animation: move 10s ease-in-out infinite;
    z-index: 5;
  }
  .image:hover {
    cursor: -webkit-grab;
    cursor: grab;
  }

  .icons svg {
    width: 20px;
    height: 20px;
  }

  .card::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: -3px;
    border-radius: 10px;
    transform: translate(-5px, 250px);
    transition: 0.4s ease-in-out;
    z-index: -1;
  }
  .card:hover::before {
    width: 150%;
    height: 100%;
    margin-left: -4.25em;
  }
  .card::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 20px;
    transition: all 0.4s ease-in-out;
    z-index: -1;
  }

  .heading {
    z-index: 2;
    transition: 0.4s ease-in-out;
  }
  .card:hover .heading {
    letter-spacing: 0.025em;
  }

  .heading::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 220px 118px #fff, 280px 176px #fff, 40px 50px #fff,
      60px 180px #fff, 120px 130px #fff, 180px 176px #fff, 220px 290px #fff,
      520px 250px #fff, 400px 220px #fff, 50px 350px #fff, 10px 230px #fff;
    z-index: -1;
    transition: 1s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0s;
  }
  .icons::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 140px 20px #fff, 425px 20px #fff, 70px 120px #fff, 20px 130px #fff,
      110px 80px #fff, 280px 80px #fff, 250px 350px #fff, 280px 230px #fff,
      220px 190px #fff, 450px 100px #fff, 380px 80px #fff, 520px 50px #fff;
    z-index: -1;
    transition: 1.5s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.4s;
  }
  .icons::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 490px 330px #fff, 420px 300px #fff, 320px 280px #fff,
      380px 350px #fff, 546px 170px #fff, 420px 180px #fff, 370px 150px #fff,
      200px 250px #fff, 80px 20px #fff, 190px 50px #fff, 270px 20px #fff,
      120px 230px #fff, 350px -1px #fff, 150px 369px #fff;
    z-index: -1;
    transition: 2s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.8s;
  }
  .card:hover .heading::before,
  .card:hover .icons::before,
  .card:hover .icons::after {
    filter: blur(3px);
  }

  .image:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
  .image:active + .heading::before {
    box-shadow: 240px 20px #9b40fc, 240px 25px #9b40fc, 240px 30px #9b40fc,
      240px 35px #9b40fc, 240px 40px #9b40fc, 242px 45px #9b40fc,
      246px 48px #9b40fc, 251px 49px #9b40fc, 256px 48px #9b40fc,
      260px 45px #9b40fc, 262px 40px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1em);
  }
  .image:active ~ .icons::before {
    box-shadow: 262px 35px #9b40fc, 262px 30px #9b40fc, 262px 25px #9b40fc,
      262px 20px #9b40fc, 275px 20px #9b40fc, 275px 24px #9b40fc,
      275px 28px #9b40fc, 275px 32px #9b40fc, 275px 36px #9b40fc,
      275px 40px #9b40fc, 275px 44px #9b40fc, 275px 48px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1em);
  }
  .image:active ~ .icons::after {
    box-shadow: 238px 60px #9b40fc, 242px 60px #9b40fc, 246px 60px #9b40fc,
      250px 60px #9b40fc, 254px 60px #9b40fc, 258px 60px #9b40fc,
      262px 60px #9b40fc, 266px 60px #9b40fc, 270px 60px #9b40fc,
      274px 60px #9b40fc, 278px 60px #9b40fc, 282px 60px #9b40fc,
      234px 60px #9b40fc, 234px 60px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1.25em);
  }

  .heading::after {
    content: "";
    top: -8.5%;
    left: -8.5%;
    position: absolute;
    width: 7.5em;
    height: 7.5em;
    border: none;
    outline: none;
    border-radius: 50%;
    transition: 0.4s ease-in-out;
    z-index: -1;
  }
  

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 1em;
    z-index: 1;
  }

  .instagram,
  .x,
  .discord {
    position: relative;
    transition: 0.4s ease-in-out;
  }
  .instagram:after,
  .x:after,
  .discord:after {
    content: "";
    position: absolute;
    width: 0.5em;
    height: 0.5em;
    left: 0;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(233, 233, 233, 0.5),
      0px 0px 10px rgba(192, 192, 192, 0.5);
    border-radius: 50%;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
  .instagram svg path,
  .x svg path,
  .discord svg path {
    stroke: #808080;
    transition: 0.4s ease-in-out;
  }
  .instagram:hover svg path {
    stroke: #cc39a4;
  }
  .x:hover svg path {
    stroke: black;
  }
  .discord:hover svg path {
    stroke: #8c9eff;
  }
  .instagram svg,
  .x svg,
  .discord svg {
    transition: 0.3s ease-in-out;
  }
  .instagram:hover svg {
    scale: 1.4;
  }
  .x:hover svg,
  .discord:hover svg {
    scale: 1.25;
  }
  .instagram:hover:after,
  .x:hover:after,
  .discord:hover:after {
    scale: 4;
    transform: translateX(0.09em) translateY(0.09em);
  }

  .instagram::before {
    content: "";
    position: absolute;
    top: -700%;
    left: 1050%;
    rotate: -45deg;
    width: 5em;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, transparent);
    animation: 4s shootingStar ease-in-out infinite;
    transition: 1s ease;
    animation-delay: 1s;
  }
  .x::before {
    content: "";
    position: absolute;
    top: -1300%;
    left: 850%;
    rotate: -45deg;
    width: 5em;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, transparent);
    animation: 4s shootingStar ease-in-out infinite;
    animation-delay: 3s;
  }
  .discord::before {
    content: "";
    position: absolute;
    top: -2100%;
    left: 850%;
    rotate: -45deg;
    width: 5em;
    height: 1px;
    animation: 4s shootingStar ease-in-out infinite;
    animation-delay: 5s;
  }
  .card:hover .instagram::before,
  .card:hover .x::before,
  .card:hover .discord::before {
    filter: blur(3px);
  }
  .image:active ~ .icons .instagram::before,
  .image:active ~ .icons .x::before,
  .image:active ~ .icons .discord::before {
    animation: none;
    opacity: 0;
  }

  @keyframes shootingStar {
    0% {
      transform: translateX(0) translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateX(-55em) translateY(0);
      opacity: 1;
    }
    70% {
      transform: translateX(-70em) translateY(0);
      opacity: 0;
    }
    100% {
      transform: translateX(0) translateY(0);
      opacity: 0;
    }
  }

  @keyframes move {
    0% {
      transform: translateX(0em) translateY(0em);
    }
    25% {
      transform: translateY(-1em) translateX(-1em);
      rotate: -10deg;
    }
    50% {
      transform: translateY(1em) translateX(-1em);
    }
    75% {
      transform: translateY(-1.25em) translateX(1em);
      rotate: 10deg;
    }
    100% {
      transform: translateX(0em) translateY(0em);
    }
  }

  @keyframes glowing-stars {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }`;

export default Card;
