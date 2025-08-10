
import { OptionType } from "@/app/enum/common";
import { frunitureOptions } from "./frunitureOptions";
import { sizeOptions } from "./sizeOptions";
import { ValueType } from "@/app/enum/form";
import { designOptions } from "./designOptions";


export const trueOrFalseEnum = {
  TRUE: "是",
  FALSE: "否",
} as const;

export const generateTrueFalseOption = (type: string) => {
  return [
    {
      id: 1,
      type: type,
      name: trueOrFalseEnum.TRUE,
    },
    {
      id: 2,
      type: type,
      name: trueOrFalseEnum.FALSE,
    },
  ];
}

export const questions = [
  {
    id: 1,
    question: '裝修單位面積',
    options: sizeOptions,
    field: ValueType.sizeOptions,
    type: OptionType.SINGLE,
  },
  {
    id: 2,
    question: '裝修項目 (可多選)',
    options: designOptions,
    field: ValueType.cleanFurnitureOptions,
    type: OptionType.MULTIPLE,
  },
  {
    id: 12,
    question: '訂造傢私 (可多選)',
    options: frunitureOptions,
    field: ValueType.frunitureOptions,
    type: OptionType.MULTIPLE,
  }
];

