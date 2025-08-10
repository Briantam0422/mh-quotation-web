export const priceTypeEnum = {
    ONE_ROOM: "ONE_ROOM",
    TWO_ROOM_ONE_BATHROOM: "TWO_ROOM_ONE_BATHROOM",
    THREE_ROOM_ONE_BATHROOM: "THREE_ROOM_ONE_BATHROOM",
    THREE_ROOM_TWO_BATHROOM: "THREE_ROOM_TWO_BATHROOM",
    CLEAN_FURNITURE: "CLEAN_FURNITURE",
    CEMENT: "CEMENT",
    PAINT: "PAINT",
    FALSE_CEILING: "FALSE_CEILING",
    WOOD_DOOR: "WOOD_DOOR",
    BASE_BOARD: "BASE_BOARD",
    CLEANING_INSTALLATION: "CLEANING_INSTALLATION",
    SHOWER_SCREEN: "SHOWER_SCREEN",
    ELECTRICAL: "ELECTRICAL",
    PIPING: "PIPING",
    FURNITURE_LIVING_ROOM: "FURNITURE_LIVING_ROOM",
    FURNITURE_BEDROOM: "FURNITURE_BEDROOM",
    FURNITURE_MASTER_BEDROOM: "FURNITURE_MASTER_BEDROOM",
    FURNITURE_KITCHEN: "FURNITURE_KITCHEN",
    FURNITURE_MASTER_BATHROOM: "FURNITURE_MASTER_BATHROOM",
    FURNITURE_BATHROOM: "FURNITURE_BATHROOM",
  } as const;

export const priceItems = [
    {
      type: priceTypeEnum.CLEAN_FURNITURE,
      prices: {
        [priceTypeEnum.ONE_ROOM]: 38000,
        [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 45000,
        [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 58000,
        [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 63000,
      }
    },
    {
        type: priceTypeEnum.CEMENT,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 81000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 107000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 136000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 171000,
        }   
    },
    {
        type: priceTypeEnum.PAINT,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 37000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 50000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 71000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 71000,
        }
    },
    {
        type: priceTypeEnum.FALSE_CEILING,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 6000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 8000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 13000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 13000,
        }
    },
    {
        type: priceTypeEnum.WOOD_DOOR,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 35000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 43000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 51000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 59000,
        }
    },
    {
        type: priceTypeEnum.BASE_BOARD,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 5000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 6000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 9000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 9000,
        }
    },
    {
        type: priceTypeEnum.CLEANING_INSTALLATION,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 10000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 15000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 15000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 28000,
        }
    },
    {
        type: priceTypeEnum.SHOWER_SCREEN,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 5000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 5000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 5000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 10000,
        }
    },
    {
        type: priceTypeEnum.ELECTRICAL,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 48000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 60000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 81000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 81000,
        }
    },
    {
        type: priceTypeEnum.PIPING,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 31000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 31000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 31000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 46000,
        }
    },
    {
        type: priceTypeEnum.FURNITURE_LIVING_ROOM,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 26000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 26000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 38000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 38000,
        }
    },
    {
        type: priceTypeEnum.FURNITURE_BATHROOM,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 25000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 25000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 25000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 25000,
        }
    },
    {
        type: priceTypeEnum.FURNITURE_BEDROOM,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 28000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 28000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 28000 * 2,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 28000 * 2,
        }
    },
    {
        type: priceTypeEnum.FURNITURE_KITCHEN,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 48000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 48000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 59000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 59000,
        }
    },
    {
        type: priceTypeEnum.FURNITURE_MASTER_BATHROOM,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 25000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 25000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 25000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 25000,
        }
    },
    {
        type: priceTypeEnum.FURNITURE_MASTER_BEDROOM,
        prices: {
            [priceTypeEnum.ONE_ROOM]: 35000,
            [priceTypeEnum.TWO_ROOM_ONE_BATHROOM]: 35000,
            [priceTypeEnum.THREE_ROOM_ONE_BATHROOM]: 35000,
            [priceTypeEnum.THREE_ROOM_TWO_BATHROOM]: 35000,
        }
    },
  ];
  