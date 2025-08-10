'use client';
import Col from 'antd/es/grid/col';
import Row from 'antd/es/grid/row';
import ToolPanel from './components/ToolPanel/ToolPanel';
import ResultReviewPanel from './components/ResultReviewPanel/ResultReviewPanel';
import { Formik } from 'formik';
import styles from './styles.module.css';
import { Option } from './components/ToolPanel/components/Options';
import { initialValues } from './interface/form';

export default function Home() {
  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Row gutter={16} style={{ width: '100%', height: '100%' }}>
          <Col
            order={1}
            sm={24}
            md={24}
            lg={24}
            xl={12}
            style={{
              backgroundImage: 'url(/Love.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="p-5 sm:p-5 md:p-5 lg:p-5 xl:p-10" style={{ height: '100%' }}>
              <Row gutter={[16, 16]} justify="center" align="middle" style={{ height: '100%' }}>
                <Col span={24}>
                  <ResultReviewPanel />
                </Col>
              </Row>
            </div>
          </Col>
          <Col order={0} sm={24} md={24} lg={24} xl={12} className="p-20">
            <div
              className="p-5 sm:p-5 md:p-5 lg:p-5 xl:p-10"
              style={{ maxHeight: '85vh', overflow: 'auto' }}
            >
              <ToolPanel />
            </div>
          </Col>
        </Row>
      </Formik>
    </div>
  );
}
