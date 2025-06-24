import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      .bg-grid-pattern {
        background-size: 50px 50px;
        background-image: 
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      }
      
      .particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      
      .particles:before,
      .particles:after {
        content: '';
        position: absolute;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
      }
      
      .particles:before {
        box-shadow: 
          0 0 10px rgba(0, 255, 128, 0.5),
          0 0 20px rgba(0, 255, 128, 0.2),
          0 0 30px rgba(0, 255, 128, 0.1),
          30vw 20vh 0 rgba(255, 255, 255, 0.1),
          25vw 60vh 0 rgba(255, 255, 255, 0.1),
          75vw 30vh 0 rgba(255, 255, 255, 0.1),
          55vw 8vh 0 rgba(255, 255, 255, 0.1),
          65vw 60vh 0 rgba(255, 255, 255, 0.1),
          80vw 10vh 0 rgba(255, 255, 255, 0.1),
          90vw 40vh 0 rgba(255, 255, 255, 0.1),
          20vw 30vh 0 rgba(255, 255, 255, 0.1),
          10vw 60vh 0 rgba(255, 255, 255, 0.1),
          40vw 80vh 0 rgba(255, 255, 255, 0.1),
          70vw 75vh 0 rgba(255, 255, 255, 0.1),
          50vw 50vh 0 rgba(255, 255, 255, 0.1);
        animation: particleAnimation 10s infinite linear;
      }
      
      .particles:after {
        box-shadow: 
          15vw 90vh 0 rgba(255, 255, 255, 0.1),
          35vw 70vh 0 rgba(255, 255, 255, 0.1),
          85vw 20vh 0 rgba(255, 255, 255, 0.1),
          45vw 15vh 0 rgba(255, 255, 255, 0.1),
          55vw 65vh 0 rgba(255, 255, 255, 0.1),
          60vw 32vh 0 rgba(255, 255, 255, 0.1),
          40vw 45vh 0 rgba(255, 255, 255, 0.1),
          30vw 85vh 0 rgba(255, 255, 255, 0.1),
          75vw 80vh 0 rgba(255, 255, 255, 0.1),
          95vw 45vh 0 rgba(255, 255, 255, 0.1);
        animation: particleAnimation 15s infinite linear reverse;
      }
      
      @keyframes particleAnimation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    ` }} />
  );
};

export default BackgroundEffect;