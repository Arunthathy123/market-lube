import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

function Index() {
  // Array of image paths (you can fetch these dynamically)
  const images = [
    "/src/assets/img1.png",
    "/src/assets/img4.png",
    "/src/assets/img3.png",
    "/src/assets/img2.png",
    "/src/assets/img5.png",
  ];

  const details = [
    {
      title: "Hacien",
      description: "HACIEN is a premium tequila brand supplying high-end hospitality and retail locations worldwide. They approached Phunk to undertake a comprehensive design project comprising web, packaging and marketing assets as well as 3D renders of their signature bottles.",
      buttons: ["Webflow Development", "UI/UX Design", "Webflow Training", "Graphic Design"],
    },
    {
      title: "Mobilleo",
      description: "Mobilleo is a SaaS solution making it easy for organisations to manage global business travel for their employees.  The team at Mobilleo approached Phunk to provide a range of design and illustration services, building on their existing brand, for use across their website and app.",
      buttons: ["Splash Screens", "Illustrations","Graphic Design","Lottie Animations","Webflow Training"],
    },
    {
      title: "Mannson Freight",
      description: "Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.",
      buttons: ["Webflow Development", "UI/UX Design", "Webflow Training", "Graphic Design"],
    },
    {
      title: "BOX iQ",
      description: "BOXiQ Performance Center in Dubai is a globally recognised boxing gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with Phunk, they now have a high-quality digital presence to match the prestige of their brand.",
      buttons: ["Webflow Development", "UI/UX Design", "Webflow Training", "Graphic Design"],
    },
    {
      title: "The Honest Watch Dealer",
      description: "The Honest Watch Dealer is a luxury watch expert renowned for his popular YouTube channel, as well as founding The Luxury Watch Company. Charlie (his real name) engaged Phunk to develop a brand identity for his channel, with applications across a range of merchandise.",
      buttons: ["Webflow Development", "Visual Identity", "Packaging", "Apparel & Merchandise"],
    },
  ];

  // State to control the index of the displayed image
  const [currentIndex, setCurrentIndex] = useState(0);

  // To track the last scroll time and prevent rapid state changes
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(
    (e) => {
      // Prevent the scroll action if it's still in progress
      if (isScrolling) return;

      // Debounce the scroll event
      setIsScrolling(true);

      // Scroll down: show next image and detail section
      if (e.deltaY > 0 && currentIndex < images.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
      // Scroll up: show previous image and detail section
      if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }

      // Allow scrolling again after a short delay (smooth transition time)
      setTimeout(() => setIsScrolling(false), 1000); // Adjust timeout to match your transition duration
    },
    [isScrolling, currentIndex, images.length]
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-row items-center justify-center gap-6">
        {/* Image container with scrolling effect */}
        <div
          className="w-2/5 flex flex-col gap-3 p-6"
          onWheel={handleScroll} // Add onWheel event to handle scroll
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <p className="text-[3.5rem] font-[500] text-start whitespace-nowrap">
              <span className="font-turnkey">Dive into the</span>
              <span className="font-turnkey ml-5 bg-gradient-to-r from-[#00e5d1] to-[#2577f9] text-transparent bg-clip-text">
                work.
              </span>
            </p>
            <p className="text-sm text-gray-400 mb-16">
              As creatives ourselves, we know that what you really want to see is
              the work we’ve actually put live. Here’s a showcase of some of our
              recent projects, across a range of sectors.
            </p>
          </motion.div>

          {/* Image container with stacking effect */}
          <div
            className="relative overflow-hidden w-full h-96" // Use overflow-hidden to hide images outside the container
            style={{ maxHeight: "400px" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="absolute top-0 w-full transition-transform duration-[1.5s] ease-in-out" // Adjust duration to slow down transition
                style={{
                  transform: `translateY(${(index - currentIndex) * 100}%)`, // Translate each image based on the current index
                }}
              >
                <motion.img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentIndex ? 1 : 1}}
                  transition={{ duration:1 }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description beside the image with smooth animation */}
        <div className="mt-32 w-full h-auto">
          <div className="flex flex-col items-start justify-center p-2 w-auto h-auto">
            {/* Details container with scrolling effect */}
            <div
              className="relative overflow-hidden w-full h-96"
              style={{ maxHeight: "400px" }}
              onWheel={handleScroll} // Apply same scroll effect for the details section
            >
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="absolute top-0 transition-transform duration-[1.5s] ease-in-out"
                  style={{
                    transform: `translateY(${(index - currentIndex) * 100}%)`,
                  }}
                >
                  <div className="p-6">
                    <div className="mb-12">
                      <div className="mt-6 flex flex-wrap gap-4 mb-6 w-3/4">
                        {detail.buttons.map((button, btnIndex) => (
                          <Button
                            key={btnIndex}
                            type="button"
                            className="border border-gradient-to-r from-[#01e3d2] to-[#23aff7] rounded-full px-4 py-2 text-sm"
                            text={button}
                          />
                        ))}
                      </div>
                      <p className="text-4xl font-semibold font-turnkey ">{detail.title}</p>
                      <p className="mt-4">{detail.description}</p>
                      <p className="mt-6 w-full underline mb-10">
                        See full case study 
                        <span className="mr-2">&#x279A;</span> 
                        </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
