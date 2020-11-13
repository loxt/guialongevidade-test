export interface IList {
  id: string;
  name: string;
  slug: string;
  address: string;
  location: string;
  photos: [
    {
      height: number;
      html_attributions: string[];
      photo_reference: string;
      width: number;
    },
  ];
  rating: number;
}
