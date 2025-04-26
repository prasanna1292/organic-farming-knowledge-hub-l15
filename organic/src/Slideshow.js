import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Include default styles

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000',
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '500px',
};

const slideImages = [
  {
    url: 'https://media.istockphoto.com/id/491267876/photo/cauliflower-plantation.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tjz2uvB81B9A4fXZI2WbzGJruova5AzefTG1T9WdAhA=',
   
  },
  {
    url: 'https://media.istockphoto.com/id/506164764/photo/tractor-spraying-soybean-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=FziHcky7PA62LyCW15cUEva70DhfXUbdeNIZBi_zQlk=',
   
  },
  {
    url: 'https://media.istockphoto.com/id/108313157/photo/india-farming.webp?a=1&b=1&s=612x612&w=0&k=20&c=yseKM6JJgR7-3W0vV-ZGTClDwHNIumNoJw2nYWjQOAE=',
   
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
             
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
