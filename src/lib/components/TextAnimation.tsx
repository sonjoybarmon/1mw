import { Heading } from "@chakra-ui/react";

export default function TextAnimation() {
  const linksList = [
    "1MW.com",
    "NONMLS.com",
    "LakeMinnetonkaRentals.com",
    "LakeMinnetonkaTownHomes.com",
    "LakevilleHouses.com",
    "MaplePlainRealEstate.com",
    "MikeWilen.com",
    "MikeWilenGroup.com",
    "MikeWilenRealEstate.com",
    "MinneapolisCondoGroup.com",
    "MinneapolisForeclosures.com",
    "MinneapolisNorthloop.com",
    "MinnesotaForeclosures.com",
    "MinnesotaHomesRealEstate.com",
    "MinnetristaHomes.com",
    "MNHomesRealEstate.com",
    "MNRealEstateHomes.com",
    "MWilen.com",
    "NetworkSaga.com",
    "NONMLSNetwork.com",
    "NONMLSRealEstate.com",
    "RichfieldTownHomes.com",
    "SaintAnthonyHomes.com",
    "SaintLouisParkHouses.com",
    "SaintPaulForeclosures.com",
    "ShakopeeHouses.com",
    "LakeMinnetonkaHouses.com",
    "SpringLakeParkHomes.com",
    "SpringLakeParkRealEstate.com",
    "WickerParkTownHomes.com",
    "WilenHomes.com",
    "WilenRealEstate.com",
    "LakeMichiganChicago.com",
    "1LuxuryPlace.com",
    "1MNRealty.com",
    "1MWStrategy.com",
    "1MWRealEstate.com",
    "BlaineCondos.com",
    "BloomingtonTownHomes.com",
    "BurnsvilleCondos.com",
    "BurnsvilleHouses.com",
    "BurnsvilleTownHomes.com",
    "ChicagoCondoTeam.com",
    "ChicagoCondoViews.com",
    "ChicagoHomePartners.com",
    "ChicagoHomesRealEstate.com",
    "ChicagoRealEstateHomes.com",
    "ChicagoRealetatecapital.com",
    "ChicagoRealtyCapital.com",
    "DeephavenHomes.com",
    "DiscoverSaga.com",
    "EaganCondos.com",
    "GoldenValleyTownHomes.com",
    "ILCondoTeam.com",
    "ILHomesRealEstate.com",
    "IllinoisHomesRealEstate.com",
    "IllinoisRealEstateGroup.com",
    "IllinoisRealEstateHomes.com",
    "IllinoisRealEstateTeam.com",
    "IllinoisTeam.com",
    "IllinoisTownHomes.com",
    "ILRealEstateHomes.com",
    "ILRealEstateTeam.com",
    "ILRET.com",
    "ILRETeam.com",
    "LakeMinnetonkaGroup.com",
  ];

  return (
    <div className="slider">
      <div className="slide">
        {linksList.map((item) => (
          <Heading as="h4" size="lg" key={item}>
            {item}
          </Heading>
        ))}
      </div>
      <div className="slide">
        {linksList.map((item) => (
          <h4 key={item}>{item}</h4>
        ))}
      </div>
    </div>
  );
}
