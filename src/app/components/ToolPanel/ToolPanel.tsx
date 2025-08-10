'use client';
import { useFormikContext } from 'formik';
import Row from 'antd/es/grid/row';
import Col from 'antd/es/grid/col';
import Options from './components/Options';
import { FormValues } from '@/app/page';
import { questions } from './Config/config';

const ToolPanel = () => {
  const { values } = useFormikContext<FormValues>();
  return (
    <Row gutter={[0, 30]}>
      {questions.map((question) => {
        return (
          <Col span={24} key={question.id}>
            <Options
              title={question.question}
              options={question.options}
              field={question.field}
              currentValue={values[question.field]}
              type={question.type}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default ToolPanel;
