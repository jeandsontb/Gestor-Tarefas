import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { db } from "../../../database";
import { Entry, IEntry } from "../../../models";

type Data = { message: string } | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "ID informado não é válido" + id });
  }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);
    default:
      return res.status(400).json({ message: "Método não existe" });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();
  const toUpdate = await Entry.findById(id);

  if (!toUpdate) {
    await db.disconnect();
    return res
      .status(400)
      .json({ message: "Não foi possível localizar essa tarefa " + id });
  }

  const { description = toUpdate.description, status = toUpdate.status } =
    req.body;

  const updateEntry = await Entry.findByIdAndUpdate(
    id,
    { description, status },
    { runValidators: true, new: true }
  );

  res.status(200).json(updateEntry!);
};
