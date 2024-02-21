import { InterFaceB } from "./nested";
import { Generic } from "./types";

export * from "./types";
export * from "./nested";

function foo(): Generic<InterFaceB> {
  return {
    something: 1,
  };
}
