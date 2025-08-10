import { FormValues, initialValues } from '@/app/page';
import Card from 'antd/es/card/Card';
import Col from 'antd/es/col';
import Row from 'antd/es/grid/row';
import { useFormikContext } from 'formik';
import Flex from 'antd/es/flex';
import SingleItem from './components/SingleItem';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { questions } from '../ToolPanel/Config/config';
import { ValueType } from '@/app/enum/form';
import { priceItems } from '../ToolPanel/Config/priceItem';
import { useEffect, useState } from 'react';

const ResultReviewPanel = () => {
  const [finalPrice, setFinalPrice] = useState(0);
  const router = useRouter();
  const { values, setValues } = useFormikContext<FormValues>();

  useEffect(() => {
    calcualtePrice();
  }, [values]);

  const checkIsEmpty = () => {
    let isEmpty = true;
    Object.keys(values).some((key) => {
      if (values[key as keyof FormValues].length != 0) {
        isEmpty = false;
      }
    });

    return isEmpty;
  };

  const checkIsSizeSelected = () => {
    return values[ValueType.sizeOptions].length != 0;
  };

  const checkIsNeededResetFinalPrice = () => {
    let isNeededReset = true;
    Object.keys(values).some((key) => {
      if (key != ValueType.sizeOptions && values[key as keyof FormValues].length != 0) {
        isNeededReset = false;
      }
    });
    return isNeededReset;
  };

  const reset = () => {
    setValues(initialValues);
  };

  const calcualtePrice = () => {
    if (checkIsNeededResetFinalPrice()) {
      setFinalPrice(0);
      return;
    }

    const size = values[ValueType.sizeOptions][0];
    if (size == null) {
      setFinalPrice(0);
      return;
    }

    let finalPrice = 0;
    Object.keys(values).map((key) => {
      const items = values[key as keyof FormValues];
      if (items.length == 0) {
        return;
      }

      items.forEach((item) => {
        const priceItem = priceItems.find((priceItem) => priceItem.type === item.type);
        if (priceItem == null) {
          return;
        }
        const price = priceItem.prices[size.type as keyof typeof priceItem.prices];
        finalPrice += price;
        setFinalPrice(finalPrice);
      });
    });
    console.log(finalPrice);
  };

  return (
    <Row gutter={[16, 20]}>
      <Col span={24}>
        <Flex gap={10} justify="end">
          <Button
            type="default"
            size="large"
            onClick={() => {
              router.push('/landing');
            }}
          >
            返回
          </Button>
          <Button
            type="primary"
            size="large"
            style={{ backgroundColor: '#f3c326' }}
            onClick={reset}
          >
            重置選項
          </Button>
        </Flex>
      </Col>
      <Col span={24} style={{ maxHeight: '70vh', overflow: 'auto' }}>
        <Card title="報價結果預覽" style={{ minHeight: '70vh' }}>
          {checkIsEmpty() && <p>請選擇您的需求</p>}
          {!checkIsEmpty() && (
            <Row gutter={[20, 20]}>
              {Object.keys(values).map((key) => {
                return (
                  values[key as keyof FormValues][0] != null && (
                    <Col key={key} span={24}>
                      <SingleItem
                        title={questions.find((question) => question.field === key)?.question || ''}
                        currentValue={values[key as keyof FormValues]}
                      />
                    </Col>
                  )
                );
              })}
            </Row>
          )}
        </Card>
      </Col>
      <Col span={24}>
        <Card>
          <Flex justify="space-between">
            <p className="text-2xl font-bold">總數</p>
            {checkIsEmpty() && !checkIsSizeSelected() && (
              <p className="text-2xl font-bold">請先選擇您的需求</p>
            )}
            {!checkIsEmpty() && !checkIsSizeSelected() && (
              <p className="text-2xl font-bold">請先選擇您的裝修單位面積</p>
            )}
            {!checkIsEmpty() && checkIsSizeSelected() && finalPrice === 0 && (
              <p className="text-2xl font-bold font-stretch-110%">$0</p>
            )}
            {!checkIsEmpty() && finalPrice !== 0 && checkIsSizeSelected() && (
              <p className="text-2xl font-bold font-stretch-110%">
                ${Math.round(finalPrice * (1 - 0.05))} - ${Math.round(finalPrice * (1 + 0.05))}
              </p>
            )}
          </Flex>
        </Card>
      </Col>
    </Row>
  );
};

export default ResultReviewPanel;
