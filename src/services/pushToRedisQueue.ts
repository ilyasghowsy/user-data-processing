import redisClient from "../configs/redisConfig";

export async function pushToRedisQueue(data: any[]): Promise<void> {
  await redisClient.set("userQueue", JSON.stringify(data));
}