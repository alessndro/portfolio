import React, { useEffect, useRef } from 'react';

function MyComponent() {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const handleWheel = (event) => {
      event.preventDefault();
      element.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      });
    };

    if (element) {
      element.addEventListener('wheel', handleWheel);
    }

    // Clean up
    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className='flex container-class'>
        <div className='w-full'>
            <h1>TEST</h1>
        </div>
        <div className='w-full'>
            <h1>TEST</h1>
        </div>
        <div className='w-full'>
            <h1>TEST</h1>
        </div>
        <div className='w-full'>
            <h1>TEST</h1>
        </div>
    </div>
  );
}

export default MyComponent;
