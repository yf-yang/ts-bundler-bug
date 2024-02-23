import type { Generic, InterFaceB, InterFaceC } from "base";

function foo(x: Generic<InterFaceB>): number {
  return x.something;
}

function bar(): Generic<InterFaceC> {
  return {
    something: 1,
  };
}

void foo;
void bar;
