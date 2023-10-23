import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise;

const TicketSchema = new Schema(
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        status: String,
        progress: Number,
        active: Boolean,
    },
    {
        timestamps: true,
    }
)

const Ticket = mongoose.model.Ticket || mongoose.model("Ticket", TicketSchema);
export default Ticket;