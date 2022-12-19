import { Request, Response } from "express";
import Card from "../schemas/card-model";

const findCard = async (req: Request, res: Response) => {
  try {
    const { cardId } = req.params;

    const existCard = await Card.findOne({ _id: cardId });

    if (!existCard) {
      return res.status(400).send({
        message: "해당하는 카드를 찾을 수 없습니다.",
      });
    }

    const card = {
      cardId: existCard._id,
      to: existCard.to,
      content: existCard.content,
      from: existCard.from,
    };

    res.status(200).json({
      card,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send({
      message: "카드 조회 실패",
    });
  }
};

const createCard = async (req: Request, res: Response) => {
  try {
    const { to, content, from } = req.body;

    const newCard = await Card.create({ to, content, from });

    const card = {
      cardId: newCard._id,
      to: newCard.to,
      content: newCard.content,
      from: newCard.from,
    };

    res.status(200).json({
      card,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send({
      message: "카드 작성 실패",
    });
  }
};

export { findCard, createCard };
