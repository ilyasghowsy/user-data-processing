import { Schema, model, Document } from "mongoose";

interface ILog extends Document {
  request: {
    time: Date;
    url: string;
    method: string;
  };
  data: [];
  totalTimeMS: number;
}

const logSchema = new Schema<ILog>({
  request: {
    time: Date,
    url: String,
    method: String,
  },
  data: Array,
  totalTimeMS: Number,
});

const LogModel = model<ILog>("Logs", logSchema);

export default LogModel;
