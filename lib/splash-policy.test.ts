import assert from "node:assert/strict";
import test from "node:test";
import { claimAutomaticSplash } from "./splash-policy";

function session() {
  const values = new Map<string, string>();
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => { values.set(key, value); },
  };
}

test("automatic introduction runs once per session", () => {
  const storage = session();
  assert.equal(claimAutomaticSplash(storage, false), true);
  assert.equal(claimAutomaticSplash(storage, false), false);
});

test("reduced motion skips the introduction and prevents a later automatic replay", () => {
  const storage = session();
  assert.equal(claimAutomaticSplash(storage, true), false);
  assert.equal(claimAutomaticSplash(storage, false), false);
});

test("unavailable session storage does not block page access", () => {
  assert.equal(claimAutomaticSplash({
    getItem: () => { throw new Error("Storage unavailable"); },
    setItem: () => {},
  }, false), false);
});
