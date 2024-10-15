//artisan.model.ts
export interface Artisan {
  id: String;
  name: String;
  specialty: String;
  note: String;
  location: String;
  about: String;
  email: String;
  website: String;
  category: String;
  top: boolean;
}

export type ArtisanModel = Artisan[];
