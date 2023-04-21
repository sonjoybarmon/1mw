import { Box, Heading } from "@chakra-ui/react";
import cn from "clsx";
import { omit } from "lodash";
import type { ImageProps } from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import ImageWithFallback from "lib/components/ImageWithFallback";
import { currencyChanger } from "utils/currencyChanger";

import s from "./PropertyCard.module.css";
import PropertyTag from "./PropertyTag/PropertyTag";

interface IPropertyCardProps {
  property: IProperty;
  hideDetails?: boolean;
  variant?: "default" | "simple" | "slim";
  className?: string;
  imgProps?: Omit<ImageProps, "src" | "layout" | "placeholder" | "blurDataURL">;
  dark?: boolean;
}

function appendComma(text: string): string {
  if (text) {
    return `${text},`;
  }
  return text;
}

const PropertyCard: FC<IPropertyCardProps> = ({
  property,
  hideDetails = true,
  variant = "default",
  className,
  imgProps,
  dark = false,
}) => {
  const rootClassName = cn(
    s.root,
    { [s.slim]: variant === "slim", [s.simple]: variant === "simple" },
    className
  );

  const { imageSrc, imageAlt, heading, price, fallbackSrc } = useMemo(() => {
    const url = property?.Media?.[0]?.MediaURL;

    return {
      // imageSrc: (property?.Media?.[0] ? property?.Media?.[0]?.MediaURL : null) ?? "https://www.1mwmedia.com/default.png",
      imageSrc: url || "https://www.1mwmedia.com/default.png",
      imageAlt:
        property?.Media?.length < 0
          ? property?.Media?.[0]?.MediaKey
          : "Property Image",
      fallbackSrc: "https://www.1mwmedia.com/default.png",
      // heading: `${property?.StreetNumber ?? ""} ${
      //   appendComma(property?.StreetName) ?? ""
      // } ${property?.StreetNumberNumeric ?? ""} ${
      //   appendComma(property?.PostalCity) ?? ""
      // } ${property?.StateOrProvince ?? ""} ${property?.PostalCode ?? ""}`,
      // price: `${currencyChanger(property?.ListPrice)}`,
      heading: `${property?.StreetNumber ?? ""}
      ${property?.StreetDirPrefix ?? ""}
      ${property?.StreetName ?? ""}
      ${appendComma(property?.StreetSuffix) ?? ""}
      ${property?.PostalCity ??""}
      ${property?.StateOrProvince ?? ""}
      ${"  "}
      ${property?.PostalCode ?? ""}`,
      price: `${currencyChanger(property?.ListPrice)}`,
    };
  }, [property]);

  const headingRef = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(340);

  useEffect(() => {
    setContainerWidth(headingRef.current?.offsetWidth ?? 320);
  }, []);

  return (
    <Link
      href={`/property/${property.SlugUrl}`}
      className={rootClassName}
      style={{
        width: variant === "slim" ? containerWidth : "100%",
        // margin: variant === "slim" ? "0 32px" : "auto",
      }}
    >
      {variant === "slim" && (
        <Box
          background="white"
          color="black"
          maxW="400px"
          pos="relative"
          display="flex"
          w={`${containerWidth}px`}
          // bg="black"
        >
          <Box
            w="full"
            zIndex={20}
            // alignItems="center"
            // justifyContent="center"
            // display="flex"
            // p="4"
            // pos="absolute"
            // top={0}
            // bottom={0}
            // left={2}
            // marginRight={10}
            whiteSpace="nowrap"
            ref={headingRef}
          >
            <Heading
              p="4"
              size="xs"
              fontWeight=""
              w="fit-content"
              // background={dark ? "black" : "white"}
              // color={dark ? "white" : "black"}
              background="white"
              color="black"
            >
              {heading}
            </Heading>
            <Heading
              w="fit-content"
              p="2"
              size="md"
              pr="-30px"
              // background={dark ? "black" : "white"}
              // color={dark ? "white" : "black"}
              background="white"
              color="black"
            >
              {price}
            </Heading>
            {/* <div className="w-full">hello</div> */}
            {/* <PropertyTag name={heading} price={price} dark={dark} /> */}
          </Box>

          <Box
            width="320px"
            zIndex={19}
            height="320px"
            top={0}
            left={0}
            right={0}
            display="flex"
            justifyContent="center"
            bottom={0}
          >
            <ImageWithFallback
              src={imageSrc}
              alt={imageAlt}
              fill
              fallbackSrc={fallbackSrc}
              style={{
                objectFit: "cover",
                overflow: "hidden",
                objectPosition: "center",
              }}
              {...imgProps}
            />
          </Box>
        </Box>
      )}

      {variant === "simple" && (
        <>
          {!hideDetails && (
            <div className={s.header}>
              <h3 className={s.name}>
                <span>{heading}</span>
              </h3>
              <div className={s.price}>{price}</div>
            </div>
          )}
          <div
            className={s.imageContainer}
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
            }}
          >
            <ImageWithFallback
              {...omit(imgProps, ["height", "width"])}
              fallbackSrc={fallbackSrc}
              alt={imageAlt}
              className={s.productImage}
              src={imageSrc}
              fill
            />
          </div>
        </>
      )}

      {variant === "default" && (
        <>
          <PropertyTag name={heading} price={price} dark={dark} />
          <div
            className={s.imageContainer}
            style={{
              position: "relative",
              minHeight: imgProps?.height ?? "100%",
              height: "100%",
              width: "100%",
            }}
          >
            <ImageWithFallback
              {...omit(imgProps, ["height", "width"])}
              fallbackSrc={fallbackSrc}
              alt={imageAlt}
              className={s.productImage}
              src={imageSrc}
              fill
            />
          </div>
        </>
      )}
    </Link>
  );
};
export default PropertyCard;
