import axios from "axios";
import LogModel from "../models/log.model";

export async function fetchUserData(): Promise<any[]> {
  try {
    const startTime = new Date();

    const response = await axios.get("https://randomuser.me/api/?results=10");

    const endTime = new Date();
    const totalTimeMS = endTime.getTime() - startTime.getTime();

    const logData = {
      request: {
        time: startTime,
        url: response.request._redirectable._currentUrl,
        method:  response.request.method,
      },
      data: response.data.results,
      totalTimeMS,
    };

    try {
      const logs = new LogModel(logData);
      await logs.save();
    } catch (error: any) {
      console.error("Error saving students:", error.message);
    }

    return response.data.results;
  } catch (error: any) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
}
