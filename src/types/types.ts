export type Hora = string;

export type PlaceProps = {
  title: string;
  adress: string;
};
export type SuggestionProps = {
  title: string;
  image: ReturnType<typeof require>;
};
export type PlansProps = {
  title: string;
  image: ReturnType<typeof require>;
  description: string;
  arrow: boolean;
};
