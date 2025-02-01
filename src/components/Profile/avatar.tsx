import Image from 'next/image';
import styled from 'styled-components';


interface AvatarProfile{
  image_profile: string 
}
const AvatarProfile = ({image_profile}: AvatarProfile) => {


  
  return (
    <StyledWrapper>
      <div className="card1 rounded-full relative cursor-pointer  "
     
      >
       
          <Image src={image_profile} width={50} height={50} alt='' className={`rounded-full $transition-all duration-500 ease-in w-[50px] h-[50px] `} />
        
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card1 {
    background-color: black;
    width: 50px;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
  }

  .card1::before {
    content: "";
    position: absolute;
    z-index: -19;
    width: 55px;
    height: 55px;
    margin: auto;
    background: rgb(4,0,255);
    background: linear-gradient(135deg, rgba(4,0,255,1) 0%, rgba(136,0,255,1) 35%, rgba(209,0,255,1) 100%);
    border-radius: 100%;
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

export default AvatarProfile;
