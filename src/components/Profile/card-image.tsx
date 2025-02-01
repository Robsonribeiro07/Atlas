import { useSwitchChangeImage } from '@/hooks/use-change-image';
import { useGetList } from '@/hooks/use-get-list';
import { useUsers } from '@/hooks/use-User';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const CardImage = () => {


  const [isVisibleSwitchPhoto, setIsVisibleSwitchPhoto] = useState(false)

  const {userId } = useUsers()	

  const {mutate} = useSwitchChangeImage()

  const {List} = useGetList()


  const handleVisible = () => {
     setIsVisibleSwitchPhoto(true)
  }

  const handleHidden = () => {
    setIsVisibleSwitchPhoto(false)
  }

  const VisibleSwitchPhoto = isVisibleSwitchPhoto ? "blur-[4px] transition-all"  : "blur-none "

  const TextVisible = isVisibleSwitchPhoto ? "opacity-100" : "opacity-0"

  const inputElement = useRef<HTMLInputElement>(null)

  const handleChangePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {

   const file = e.currentTarget.files ? e.currentTarget.files[0] : undefined

   if(file) {
     
    const reader = new FileReader()

    reader.onload = (e) => {
      const resultImg = e.target?.result as string
      mutate({image: resultImg, UserId: userId!})
       
    }
    reader.readAsDataURL(file)

   }

   return () => {
    if(inputElement.current) {
      inputElement.current.value = ''
    }
   }
  }

  const handleSwitchPhotoClick = () => {
    if(!VisibleSwitchPhoto) return
    if(inputElement.current) {
      inputElement.current.click()
    }
  }

  return (
    <StyledWrapper>
      <div className="card1 rounded-full relative cursor-pointer  "
      onMouseOver={handleVisible} 
      onMouseLeave={handleHidden} 
      onClick={handleSwitchPhotoClick}
      >
        <input type='file' accept='image/*' className='sr-only' ref={inputElement}
        onChange={handleChangePhoto}
        />
        <p className={`absolute z-10 ${TextVisible}  transition-all duration-[1s] `}>Escolha outra foto</p>
        {List?.image_profile && (
          <Image src={List.image_profile} width={200} height={200} alt='' className={`rounded-full ${VisibleSwitchPhoto} transition-all duration-500 ease-in w-[200px] h-[200px] object-cover`} />
        )}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card1 {
    background-color: black;
    width: 200px;
    height: 200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    box-shadow: 2px 2px 19px;
  }

  .card1::before {
    content: "";
    position: absolute;
    z-index: -19;
    width: 210px;
    height: 210px;
    margin: auto;
    background: rgb(4,0,255);
    background: linear-gradient(135deg, rgba(4,0,255,1) 0%, rgba(136,0,255,1) 35%, rgba(209,0,255,1) 100%);
    border-radius: 100%;
  }

  .card1::after {
    content: "";
    position: absolute;
    z-index: -19;
    width: 200px;
    height: 200px;
    margin: auto;
    background: rgb(4,0,255);
    background: linear-gradient(135deg, rgba(4,0,255,1) 0%, rgba(136,0,255,1) 35%, rgba(209,0,255,1) 100%);
    border-radius: 100%;
    filter: blur(20px);
    transition: 2s;
  }

  .card1:hover::after {
    animation: cardafter 2.5s infinite forwards;
  }

  @keyframes cardafter {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }`;

export default CardImage;
