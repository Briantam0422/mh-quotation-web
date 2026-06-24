import { priceTypeEnum } from "./priceItem";


export const frunitureOptions = [
  {
    id: 1,
    type: priceTypeEnum.FURNITURE_LIVING_ROOM,
    name: '客廳',
  },
  {
    id: 2,
    type: priceTypeEnum.FURNITURE_KITCHEN,
    name: '廚房',
  },
  {
    id: 3,
    type: priceTypeEnum.FURNITURE_MASTER_BEDROOM,
    name: '主人房',
  },
  {
    id: 4,
    type: priceTypeEnum.FURNITURE_BEDROOM,
    name: '睡房1',
    disabled: [1]
  },
  {
    id: 5,
    type: priceTypeEnum.FURNITURE_BEDROOM,
    name: '睡房2',
    disabled: [1,2,3]
  },
  {
    id: 6,
    type: priceTypeEnum.FURNITURE_BEDROOM,
    name: '睡房3',
    disabled: [1,2,3,4,5,6]
  },
  {
    id: 7,
    type: priceTypeEnum.FURNITURE_MASTER_BATHROOM,
    name: '主廁',
  },
  {
    id: 8,
    type: priceTypeEnum.FURNITURE_BATHROOM,
    name: '廁所1',
    disabled: [1,2,3,4]
  }
];