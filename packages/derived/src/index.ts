import type { Generic, InterFaceB, InterFaceC } from "base";

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
