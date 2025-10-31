import User from "../../Model/Order.model.js"

export let NewOrder = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ message: "No data Provided" })
        }
        const { Address, UserId, OrderId, Date, Orderstatus, Quantity, PaymentStatus, Price } = req.body
        if (!Address || !UserId || !OrderId || !Date || !Orderstatus || !Quantity || !PaymentStatus || !Price) {
            return res.status(400).json({ message: "All  feild required" })
        }

        const order = new User({
            address: Address,
            userId: UserId,
            orderNumber: OrderId,
            date: Date,
            orderStatus: Orderstatus,
            quantity: Quantity,
            totalPayment: Price,
            paymentStatus: PaymentStatus
        })
        await order.save()
        return res.status(201).json({ message: "Ordered" })
    } catch(err) {
        return res.status(500).json({ message: "Error!",err })
    }

}

export const CancelledOrder = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ message: "No data proved" })
        }
        const {OrderId} = req.body;
        if (!OrderId) {
            return res.status(400).json({ message: "OrderNumber required" })
        }
        const Order = await User.findOne({ orderNumber: OrderId })
        if (!Order) {
            return res.status(404).json({ messaage: "Order Not found" })
        }
        Order.orderStatus = "Cancelled";
        await Order.save();
        return res.status(201).json({ message: "Order Cancelled " })
    } catch {
        return res.status(500).json({ message: "Server Internal Error" })
    }
}


