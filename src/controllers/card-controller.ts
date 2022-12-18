import { Request, Response } from "express";
import Card from "../schemas/card-model";

const findCard = async (req: Request, res: Response) => {
  try {
    const { cardId } = req.params

    const card = await Card.findOne({ id: cardId })
    
    if (!card) {
      return res.status(400).send({
        message: '해당하는 카드를 찾을 수 없습니다.',
      });
    }

    res.status(200).json({
      card,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send({
      message: '카드 조회 실패',
    });
  }
};

const createCard = async (req: Request, res: Response) => {
  try {
    const { to, content, from } = req.body

    const card = await Card.create({ to, content, from })
    console.log(card)

    res.status(200).json({
      card,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send({
      message: '카드 작성 실패',
    });
  }
};

export { findCard, createCard };
