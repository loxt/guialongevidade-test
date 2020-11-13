export interface IList {
  location: string;
  initialPlaces: [
    {
      id: string;
      name: string;
      slug: string;
      address: string;
      photos: [
        {
          height: number;
          html_attributions: string[];
          photo_reference: string;
          width: number;
        },
      ];
      rating: number;
    },
  ];
}
