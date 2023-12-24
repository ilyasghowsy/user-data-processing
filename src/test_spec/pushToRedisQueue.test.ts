import { pushToRedisQueue } from "../services/pushToRedisQueue";
import redisConfig from "../configs/redisConfig";

describe("pushToRedisQueue", () => {
  it("should push data to the Redis queue", async () => {
    const mockData = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];

    const initialQueueState: any = await redisConfig.get("userQueue");

    try {
      await pushToRedisQueue(mockData);

      const updatedQueueState = await redisConfig.get("userQueue");

      expect(updatedQueueState).toEqual(JSON.stringify(mockData));
    } finally {
      await redisConfig.set("userQueue", initialQueueState);
    }
  });
});
