import Product from "@/models/Product";
import dbConnect from "@/utilities/mongo";

export default async function handler(req, res) {
    const { method,
        query: { id }
    } = req;
    dbConnect();

    if (method === 'GET') {
        try {
            const product = await Product.findById(id);
            res.status(200).json(product);

        } catch (error) {
            res.status(500).json(error);
        }
    }
    if (method === 'PUT') {
        try {
            const products = await Product.find();
            res.status(200).json(products);

        } catch (error) {
            res.status(500).json(error);
        }
    }

    if (method === 'DELETE') {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);

        } catch (error) {
            res.status(500).json(error);
        }
    }
}