import { priceTypeEnum } from "./priceItem";


export const sizeOptions = [
    {
        id: 1,
      type: priceTypeEnum.ONE_ROOM,
      name: '一房 (約 200 - 350 呎)',
    },
    {
        id: 2,
      type: priceTypeEnum.TWO_ROOM_ONE_BATHROOM_SMALL,
      name: '兩房一廁 (約 200 - 350 呎)',
    },
    {
        id: 3,
      type: priceTypeEnum.TWO_ROOM_ONE_BATHROOM,
      name: '兩房一廁 (約 350 - 500 呎)',
    },
    {
        id: 4,
      type: priceTypeEnum.THREE_ROOM_ONE_BATHROOM,
      name: '三房一廁 (約 500 - 650 呎)',
    },
    {
        id: 5,
      type: priceTypeEnum.THREE_ROOM_TWO_BATHROOM,
      name: '三房兩廁 (約 500 - 650 呎)',
    },
    {
        id: 6,
      type: priceTypeEnum.THREE_ROOM_TWO_BATHROOM_LARGE,
      name: '三房兩廁 (約 650 - 800 呎)',
    },
    {
        id: 7,
      type: priceTypeEnum.FOUR_ROOM_TWO_BATHROOM,
      name: '四房兩廁 (約 800 - 1000 呎)',
    },
  ];