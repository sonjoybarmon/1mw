declare interface IProperty {
  Basement: any;
  Cooling: ReactNode;
  GarageSpaces: ReactNode;
  StreetSuffix: string;
  StreetDirPrefix: string;
  NST_SqFtTotal: any;
  BathroomsTotalInteger: number;
  BedroomsTotal: number;
  YearBuilt: any;
  SlugUrl: any;
  _id: string;
  "@odata.id": string;
  LotSizeArea: number;
  NST_AgentOwner: string;
  InternetAutomatedValuationDisplayYN: boolean;
  InternetConsumerCommentYN: boolean;
  NST_AssessmentPending: string;
  AssociationYN: boolean;
  AssociationFee: number;
  NST_BuilderRestrict: string;
  BuyerAgencyCompensation: string;
  BuyerAgencyCompensationType: string;
  City: string;
  PropertyType: string;
  PropertySubType: string;
  Contingency: string;
  CountyOrParish: string;
  DaysOnMarket: number;
  CumulativeDaysOnMarket: number;
  DevelopmentStatus: string[];
  Directions: string;
  InternetAddressDisplayYN: boolean;
  InternetEntireListingDisplayYN: boolean;
  TransactionBrokerCompensation: string;
  TransactionBrokerCompensationType: string;
  NST_ForeclosureStatus: string;
  NST_FractionalOwnershipYN: string;
  RoadFrontageType: string[];
  NST_Improvements: string;
  OriginalEntryTimestamp: string;
  NST_LakeAcres: string;
  NST_LakeChain: string;
  NST_LakeDepth: string;
  WaterfrontFeatures: string[];
  LotSizeDimensions: string;
  Inclusions: string;
  LandLeaseAmount: number;
  LandLeaseYN: boolean;
  NST_LastUpdateDate: string;
  Latitude: number;
  NST_LenderOwned: string;
  ListAgentKey: string;
  ListAgentMlsId: string;
  ListingContractDate: string;
  ListOfficeKey: string;
  ListOfficeName: string;
  ListOfficeMlsId: string;
  ListPrice: number;
  Longitude: number;
  LotSizeUnits: string;
  ListingId: string;
  SourceSystemName: string;
  MapCoordinateSource: string;
  AdditionalParcelsYN: boolean;
  NST_OfficeBoard: string;
  ParcelNumber: string;
  PhotosCount: number;
  PostalCity: string;
  PostalCode: string;
  NST_PotentialShortSale: string;
  PublicRemarks: string;
  NST_RentalLicenseYN: string;
  NST_Restrictions: string;
  HighSchoolDistrict: string;
  NST_SchoolDistrictNumber: string;
  NST_SchoolDistrictPhone: string;
  StateOrProvince: string;
  StandardStatus: string;
  StreetName: string;
  StreetNumber: string;
  StreetNumberNumeric: number;
  SubAgencyCompensation: string;
  SubAgencyCompensationType: string;
  SubdivisionName: string;
  NST_TaxWithAssessments: string;
  TaxYear: number;
  TaxAnnualAmount: number;
  Topography: string;
  Utilities: string[];
  WaterfrontYN: boolean;
  NST_WaterfrontFeet: string;
  WaterBodyName: string;
  NST_WaterfrontNum: string;
  ZoningDescription: string;
  NST_BonusYN: string;
  ListingKey: string;
  OriginatingSystemName: string;
  ModificationTimestamp: string;
  Media: IMedia[];
  PhotosChangeTimestamp: string;
  MlgCanView: boolean;
  MlgCanUse: string[];
  SlugUrl: string;
}

declare interface IMedia {
  Order: number;
  MediaObjectID: string;
  ImageWidth: number;
  ImageHeight: number;
  ImageSizeDescription: string;
  MediaURL: string;
  MediaModificationTimestamp: string;
  MediaKey: string;
}

declare interface GetProperty {
  data: {
    properties: IProperty[];
    totalProperties: number;
    totalProperty: number;
  };
  message: "success" | "error";
}
declare interface GetPropertyById {
  data: {
    propertyDetail: IProperty;
  };
  message: string;
}

declare interface IError {
  message: string;
}
