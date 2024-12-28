import { Request, Response } from "express";
import Reservation from "../mongoose/schemas/reservation";

const getAll = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const filter: Record<string, any> = {};
    if (user!.role === "admin") {
      filter.customer = user!._id;
    }

    const reservation = await Reservation.find(filter);
    res.status(200).json({
      message: "Reservations fetched successfully!",
      items: reservation,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error!" });
  }
};

const create = async (req: Request, res: Response) => {
  try {
    res.status(201).json({ message: "Reservation created successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error!" });
  }
};

const reservationController = {
  getAll,
  create,
};

export default reservationController;
