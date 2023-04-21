import { Box, Button, Flex, Stack, useMediaQuery } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import type { KeenSliderInstance, KeenSliderPlugin } from "keen-slider/react";
import { useKeenSlider } from "keen-slider/react";
import type { FC, MutableRefObject } from "react";
import { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

import Image from "next/image";
import ImageWithFallback from "./ImageWithFallback";

interface IArrowProps {
  disabled: boolean;
  left?: boolean;
  onClick: () => void;
}

const Arrow: FC<IArrowProps> = ({ disabled, left, onClick }) => {
  return (
    <Button
      isDisabled={disabled}
      borderRadius="none"
      py="2"
      px="8"
      color="white"
      _hover={{ bg: "#000" }}
      fontSize="xl"
      bg="transparent"
      border="1px solid white"
      borderLeftWidth={left ? "1px" : "0.5px"}
      borderRightWidth={left ? "0.5px" : "1px"}
      onClick={onClick}
    >
      {left ? <HiOutlineArrowLeft /> : <HiOutlineArrowRight />}
    </Button>
  );
};

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

interface IPropertySliderProps {
  media: IMedia[];
}
const PropertySlider: FC<IPropertySliderProps> = ({ media }) => {
  const [isLargerThan1280] = useMediaQuery("(max-width: 1280px)");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 5,
        spacing: 0,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <Stack w="full" spacing="0">
      <Flex ref={sliderRef} className="keen-slider">
        {media.map((image) => (
          <Box
            bg="transparent"
            w="full"
            // h={isLargerThan1280 ? "60vh" : "70vh"}
            // h="44.5rem"
            key={image.MediaKey}
            className="keen-slider__slide slider_big_image"
          >
            <ImageWithFallback
              fallbackSrc={process.env.NEXT_PUBLIC_FALLBACK_IMAGE ?? ""}
              fill
              style={{
                objectFit: "cover",
                // maxHeight: "70vh",
                height: "100%",
              }}
              alt={image.MediaKey}
              src={image.MediaURL}
            />
          </Box>
        ))}

        <Flex boxShadow="xl" right="0" p="4" pos="absolute" bottom="0">
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={() => instanceRef.current?.prev()}
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={() => instanceRef.current?.next()}
                disabled={currentSlide === media.length - 1}
              />
            </>
          )}
        </Flex>
      </Flex>

      {/* <Flex
        bg="transparent"
        ref={thumbnailRef}
        className="keen-slider thumbnail"
      > */}
      <Flex
        direction="row"
        className="flex gap-0 keen-slider thumbnail"
        style={{
          height: isLargerThan1280 ? "100%" : "150px",
          overflow: "hidden",
        }}
        // style={{ height: "133px" }}
        ref={thumbnailRef}
      >
        {media.map((image) => {
          return (
            <div
              className="keen-slider__slide"
              // className="h-[fit-content] keen-slider__slide"
              style={{ minWidth: "0 !important", margin: 0 }}
            >
              <Image
                src={image?.MediaURL}
                alt={image?.MediaKey}
                width={280}
                height={180}
                referrerPolicy="no-referrer"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  padding: "0 2px",
                }}
                // className="h-[fit-content]"
              />
              {/* <img
                src={image?.MediaURL}
                alt={image?.MediaKey}
                referrerPolicy="no-referrer"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  minHeight: "100%",
                }}
              /> */}
            </div>
          );
        })}
      </Flex>
      {/* </Flex> */}
    </Stack>
  );
};
export default PropertySlider;

// import { Box, Button, Flex, Stack } from "@chakra-ui/react";
// import "keen-slider/keen-slider.min.css";
// import type { KeenSliderInstance, KeenSliderPlugin } from "keen-slider/react";
// import { useKeenSlider } from "keen-slider/react";
// import type { FC, MutableRefObject } from "react";
// import { useState } from "react";
// import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

// import ImageWithFallback from "./ImageWithFallback";

// interface IArrowProps {
//   disabled: boolean;
//   left?: boolean;
//   onClick: () => void;
// }

// const Arrow: FC<IArrowProps> = ({ disabled, left, onClick }) => {
//   return (
//     <Button
//       isDisabled={disabled}
//       borderRadius="none"
//       py="2"
//       px="8"
//       color="white"
//       _hover={{ bg: "blue.600" }}
//       fontSize="xl"
//       bg="blue"
//       border="1px solid white"
//       borderLeftWidth={left ? "1px" : "0.5px"}
//       borderRightWidth={left ? "0.5px" : "1px"}
//       onClick={onClick}
//     >
//       {left ? <HiOutlineArrowLeft /> : <HiOutlineArrowRight />}
//     </Button>
//   );
// };

// function ThumbnailPlugin(
//   mainRef: MutableRefObject<KeenSliderInstance | null>
// ): KeenSliderPlugin {
//   return (slider) => {
//     function removeActive() {
//       slider.slides.forEach((slide) => {
//         slide.classList.remove("active");
//       });
//     }
//     function addActive(idx: number) {
//       slider.slides[idx].classList.add("active");
//     }

//     function addClickEvents() {
//       slider.slides.forEach((slide, idx) => {
//         slide.addEventListener("click", () => {
//           if (mainRef.current) mainRef.current.moveToIdx(idx);
//         });
//       });
//     }

//     slider.on("created", () => {
//       if (!mainRef.current) return;
//       addActive(slider.track.details.rel);
//       addClickEvents();
//       mainRef.current.on("animationStarted", (main) => {
//         removeActive();
//         const next = main.animator.targetIdx || 0;
//         addActive(main.track.absToRel(next));
//         slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
//       });
//     });
//   };
// }

// interface IPropertySliderProps {
//   media: IMedia[];
// }
// const PropertySlider: FC<IPropertySliderProps> = ({ media }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [loaded, setLoaded] = useState(false);
//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//     initial: 0,
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel);
//     },
//     created() {
//       setLoaded(true);
//     },
//   });
//   const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
//     {
//       initial: 0,
//       slides: {
//         perView: 4,
//         spacing: 10,
//       },
//     },
//     [ThumbnailPlugin(instanceRef)]
//   );

//   return (
//     <Stack w="full" spacing="0">
//       <Flex ref={sliderRef} className="keen-slider">
//         {media.map((image) => (
//           <Box
//             bg="blue"
//             w="full"
//             h="37.5rem"
//             // height="fit-content"
//             key={image.MediaKey}
//             className="keen-slider__slide "
//           >
//             <ImageWithFallback
//               fallbackSrc={process.env.NEXT_PUBLIC_FALLBACK_IMAGE ?? ""}
//               fill
//               style={{ objectFit: "cover" }}
//               alt={image.MediaKey}
//               src={image.MediaURL}
//             />
//           </Box>
//         ))}

//         <Flex boxShadow="xl" right="0" p="4" pos="absolute" bottom="0">
//           {loaded && instanceRef.current && (
//             <>
//               <Arrow
//                 left
//                 onClick={() => instanceRef.current?.prev()}
//                 disabled={currentSlide === 0}
//               />

//               <Arrow
//                 onClick={() => instanceRef.current?.next()}
//                 disabled={currentSlide === media.length - 1}
//               />
//             </>
//           )}
//         </Flex>
//       </Flex>

//       <Flex bg="blue" ref={thumbnailRef} className="keen-slider thumbnail">
//         {media.map((image) => (
//           <Box
//             height="6.25rem"
//             key={image.MediaKey}
//             className="keen-slider__slide "
//           >
//             <ImageWithFallback
//               fallbackSrc={process.env.NEXT_PUBLIC_FALLBACK_IMAGE ?? ""}
//               fill
//               style={{ objectFit: "cover" }}
//               alt={image.MediaKey}
//               src={image.MediaURL}
//             />
//           </Box>
//         ))}
//       </Flex>
//     </Stack>
//   );
// };
// export default PropertySlider;
