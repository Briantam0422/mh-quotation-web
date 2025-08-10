import { priceTypeEnum } from "./priceItem";


export const sizeOptions = [
    {
        id: 1,
      type: priceTypeEnum.ONE_ROOM,
      name: '一房 (約 200 - 300 呎)',
    },  
    {
        id: 2,
      type: priceTypeEnum.TWO_ROOM_ONE_BATHROOM,
      name: '兩房一廁 (約 300 - 450 呎)',
    },
    {
        id: 3,
      type: priceTypeEnum.THREE_ROOM_ONE_BATHROOM,
      name: '三房一廁 (約 450 - 600 呎)',
    },
    {
        id: 4,
      type: priceTypeEnum.THREE_ROOM_TWO_BATHROOM,
      name: '三房兩廁 (約 450 - 600 呎)',
    },
  ];