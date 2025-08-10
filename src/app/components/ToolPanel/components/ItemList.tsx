import Card from 'antd/es/card/Card';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { useFormikContext } from 'formik';
import { Col, Row } from 'antd';
import { Option } from './Options';
import { OptionType } from '@/app/enum/common';
import { FormValues } from '@/app/interface/form';

interface ItemListProps {
  items: Option[];
  field: string;
  currentValue: Option[];
  type: 'multiple' | 'single';
}
const ItemList = (props: ItemListProps) => {
  const { items, currentValue, field, type } = props;
  const { setFieldValue } = useFormikContext<FormValues>();

  return (
    <Row gutter={[10, 10]}>
      {items.map((item) => {
        return (
          <Col key={item.id} span={24} lg={12} md={12} sm={12} xs={24}>
            <Card
              variant="borderless"
              onClick={() => {
                if (type === OptionType.SINGLE) {
                  setFieldValue(field, []);
                  setFieldValue(field, [item]);
                }

                if (type === OptionType.MULTIPLE) {
                  if (currentValue.length === 0) {
                    setFieldValue(field, [item]);
                  } else {
                    if (currentValue.some((currentValueItem) => currentValueItem.id === item.id)) {
                      setFieldValue(
                        field,
                        currentValue.filter((currentValueItem) => currentValueItem.id !== item.id),
                      );
                    } else {
                      setFieldValue(field, [...currentValue, item]);
                    }
                  }
                }
              }}
            >
              <Checkbox
                key={item.id}
                checked={currentValue.some((currentValueItem) => currentValueItem.id === item.id)}
              >
                <p className="w-full">{item.name}</p>
              </Checkbox>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ItemList;
