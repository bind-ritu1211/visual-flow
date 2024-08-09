
// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const HighlightedCode = ({ images }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true
//   };

//   return (
//     <div className="carousel-container">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={image} alt={`Slide ${index}`} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HighlightedCode;
// const tags = ['JavaScript', 'webdev', 'Typescript', 'Next.js', 'UI/UX'];

// const LoopSlider = () => {
//   return (
//     <div
//       className="loop-slider"
//       style={{ '--duration': '15951ms', '--direction': 'normal' }}
//     >
//       <div className="inner">
//         {tags.map((tag, index) => (
//           <div className="tag" key={index}>
//             <span>#</span> {tag}
//           </div>
//         ))}
//         {/* Duplicated content */}
//         {tags.map((tag, index) => (
//           <div className="tag" key={`${index}-duplicate`}>
//             <span>#</span> {tag}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LoopSlider;

