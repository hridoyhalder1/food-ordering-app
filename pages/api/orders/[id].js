import Order from "@/models/Order";
import dbConnect from "@/utilities/mongo";

const handler = async (req, res) => {
    const { method, query:{id} } = req;
    await dbConnect();

    if(method === "GET"){
        try {
            const order = await Order.findById(id);
            res.status(200).json(order);
            
        } catch (error) {
            res.status(200).json(error);
        }
    }
    if(method === "PUT"){
        try {
            const orders = await Order.findByIdAndUpdate(id, req.body, {
                new: true
            });
            res.status(200).json(orders);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
    if(method === "DELETE"){
        try {
            const order = await Order.create(req.body);
            res.status(201).json(order);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default handler;