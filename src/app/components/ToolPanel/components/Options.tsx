import Row from 'antd/es/grid/row';
import Col from 'antd/es/grid/col';
import ItemList from './ItemList';

interface OptionsPros {
  title: string;
  options: Option[];
  field: string;
  currentValue: Option[];
  type: 'multiple' | 'single';
}

export interface Option {
  id: number;
  type: string;
  name: string;
}

const Options = (props: OptionsPros) => {
  const { title, options, field, currentValue, type } = props;
  return (
    <Row gutter={[0, 10]}>
      <Col span={24}>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
      </Col>
      <Col span={24}>
        <ItemList items={options} field={field} currentValue={currentValue} type={type} />
      </Col>
    </Row>
  );
};

export default Options;
