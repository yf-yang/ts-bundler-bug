export interface InterFaceA {
  a?: number;
}

export type Generic<T extends InterFaceA = InterFaceA> = T & {
  something: number;
};
