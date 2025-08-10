import Col from 'antd/es/grid/col';
import Row from 'antd/es/grid/row';
import { Option } from '../../ToolPanel/components/Options';
import { Card } from 'antd';
import { animated, useSpring } from '@react-spring/web';

interface SingleItemProps {
  title: string;
  currentValue: Option[];
}
const SingleItem = (props: SingleItemProps) => {
  const { title, currentValue } = props;

  const [styles] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: {
        duration: 1100,
      },
    }),
    [],
  );

  return (
    <animated.div style={styles}>
      <Row gutter={[0, 10]}>
        <Col span={24}>
          <Card title={title} size="small" style={{ width: '100%', backgroundColor: '#edfae5' }}>
            {currentValue.map((currentValueItem) => {
              return (
                <p key={currentValueItem.name} className="text-xl font-bold">
                  {currentValueItem.name}
                </p>
              );
            })}
          </Card>
        </Col>
      </Row>
    </animated.div>
  );
};

export default SingleItem;
