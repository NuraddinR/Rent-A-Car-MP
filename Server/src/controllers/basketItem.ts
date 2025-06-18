// import { Request, Response } from "express";
// import BasketItem from "../mongoose/schemas/basketItem";

// const getAll = async (req: Request, res: Response) => {
//   try {
//     const basketItems = await BasketItem.find()
//       .populate("rent")
//       .populate("basket");
//     res.status(200).json(basketItems);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch basket items", error });
//   }
// };

// const create = async (req: Request, res: Response) => {
//   const { rent, basket, totalPrice, checkInDate, checkOutDate, rooms } =
//     req.body;

//   if (
//     !rent ||
//     !basket ||
//     !totalPrice ||
//     !checkInDate ||
//     !checkOutDate ||
//     !rooms
//   ) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const newBasketItem = new BasketItem({
//       rent,
//       basket,
//       totalPrice,
//       checkInDate,
//       checkOutDate,
//       rooms,
//     });

//     const savedBasketItem = await newBasketItem.save();
//     res.status(201).json(savedBasketItem);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to create basket item", error });
//   }
// };

// const basketItemController = {
//   getAll,
//   create,
// };

// export default basketItemController;
