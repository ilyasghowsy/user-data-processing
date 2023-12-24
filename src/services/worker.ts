import cron from "node-cron";
import { fetchUserData } from "./fetchUserData";
import { pushToRedisQueue } from "./pushToRedisQueue";
import { dataProcessor } from "./dataProcessor";

async function work(): Promise<void> {
  try {
    const userData = await fetchUserData();
    if (userData.length) {
      await pushToRedisQueue(userData);
      await dataProcessor();
    } else console.log("No data found");
  } catch (error: any) {
    console.error("Error in worker process:", error.message);
  }
}

cron.schedule("30 */3 * * * *", async () => {
  await work();
});

work();
