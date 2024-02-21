import type { Generic, InterFaceB } from "base";

function foo(): Generic<InterFaceB> {
  return {
    something: 1,
  };
}
