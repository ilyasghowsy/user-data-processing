import { fetchUserData } from "../services/fetchUserData";

describe("fetchUserData", () => {
  test("should fetch user data", async () => {
    const userData = await fetchUserData();
    expect(userData).toBeDefined();
  }, 30000);
});
