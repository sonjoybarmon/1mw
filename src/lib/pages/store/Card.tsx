import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useMemo } from "react";

import { currencyChanger } from "utils/currencyChanger";

interface IPropertyCardProps {
  property: IProperty;
  variant?: "default" | "simple" | "slim";
}
function appendComma(text: string): string {
  if (text) {
    return `${text},`;
  }
  return text;
}
const PropertyCard: FC<IPropertyCardProps> = ({
  property,
  variant = "default",
}) => {
  const { heading, price } = useMemo(() => {
    const url = property?.Media?.[0]?.MediaURL;

    return {
      // imageSrc: (property?.Media?.[0] ? property?.Media?.[0]?.MediaURL : null) ?? "https://www.1mwmedia.com/default.png",
      imageSrc: url || "https://www.1mwmedia.com/default.png",
      imageAlt:
        property?.Media?.length < 0
          ? property?.Media?.[0]?.MediaKey
          : "Property Image",
      fallbackSrc: "https://www.1mwmedia.com/default.png",
      // heading: `${property?.StreetNumber ?? ""} ${property?.StreetName ?? ""} ${
      //   property?.StreetNumberNumeric ?? ""
      // } ${property?.PostalCity ?? ""} ${property?.StateOrProvince ?? ""} ${
      //   property?.PostalCode ?? ""
      // }`,
      heading: `${property?.StreetNumber ?? ""}
      ${property?.StreetDirPrefix ?? ""}
      ${property?.StreetName ?? ""}
      ${appendComma(property?.StreetSuffix) ?? ""}
      ${property?.PostalCity ??""}
      ${property?.StateOrProvince ?? ""}
      ${"  "}
      ${property?.PostalCode ?? ""}`,
      price: `${
        property?.ListPrice
          ? currencyChanger(property?.ListPrice)
          : property?.ListPrice
      }`,
    };
  }, [property]);

  return (
    <Link href={`/property/${property._id}`} className="w-full">
      {variant === "default" && (
        <>
          <Image
            src={property?.Media?.[0]?.MediaURL}
            alt=""
            width={600}
            height={400}
            className="h-[fit-content]"
          />
          <div className="mt-2">
            <span className="font-bold text-lg mr-2">{price}</span>
            {heading}
          </div>
        </>
      )}
    </Link>
  );
};
export default PropertyCard;
