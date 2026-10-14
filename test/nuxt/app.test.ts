import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import App from "~/app.vue";

describe("app", () => {
  it("render", async () => {
    const wraper = await mountSuspended(App);
    expect(wraper.get("h1").text()).toBe("Hello");
  });
});
