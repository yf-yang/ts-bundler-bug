import { InterFaceB } from "./nested";
import { Generic, InterFaceA } from "./types";

export * from "./types";
export * from "./nested";

export interface InterFaceC extends InterFaceA {
  c?: number;
}

function foo(): Generic<InterFaceB> {
  return {
    something: 1,
  };
}

function bar(): Generic<InterFaceC> {
  return {
    something: 1,
  };
}
