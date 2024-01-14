import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    title: {
        type: String,
    },
    work: {
        type: String,
    },
    cost: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Order = model("Order", orderSchema)

export default Order;