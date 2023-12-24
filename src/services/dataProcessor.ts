import UserModel from "../models/user.model";
import redisClient from "../configs/redisConfig";

export async function dataProcessor(): Promise<void> {
  try {
    const userDataString: any = await redisClient.get("userQueue");

    const userData = JSON.parse(userDataString);

    const processedData = userData.map((item: any) => ({
      insertOne: {
        document: {
          gender: item.gender,
          name: {
            title: item.name.title,
            first: item.name.first,
            last: item.name.last,
          },
          location: item.location.city,
          email: item.email,
          phone: item.phone,
          isProcessed: true,
        },
      },
    }));

    try {
      const result = await UserModel.bulkWrite(processedData);
    } catch (error: any) {
      console.error("Error saving students:", error.message);
    }
  } catch (error: any) {
    console.error("Error processing and storing data:", error.message);
    throw error;
  }
}
