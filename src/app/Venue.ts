export interface Venue {
  visible: boolean;
  title: string;
  details: {
    en: {
      title: string;
      calendarsummary: string;
      shortdescription: string;
      longdescription: string;
    }
  }
  location: {
    name: string;
    city: string;
    adress: string;
    zipcode: number;
    latitude: number;
    longitude: number;
  }
  urls: string;
  dates?: {
    startdate?: any;
  }
  media: {
    url: string;
    main: boolean;
  }[]
}
