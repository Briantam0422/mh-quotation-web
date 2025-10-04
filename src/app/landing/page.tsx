'use client';
import * as React from 'react';
import { useSpring, config } from '@react-spring/web';
import styles from './styles.module.css';
import { Button, Card, Col, Flex, Row, Skeleton } from 'antd';
import PhotoGrid from './components/photoGrid/PhotoGrid';
import { useRouter } from 'next/navigation';

const mockData = [
  {
    name: '客廳',
    color: '#e2fadf',
  },
  {
    name: '臥室',
    color: '#f8efd1',
  },
  {
    name: '廚房',
    color: '#e1e3f8',
  },
  {
    name: '浴室',
    color: '#f5def5',
  },
  {
    name: '其他',
    color: '#d1e9f4',
  },
];

export default function App() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Row gutter={16} style={{ width: '100%', height: '100%' }}>
        <Col
          sm={24}
          md={24}
          lg={24}
          xl={12}
          style={{
            backgroundImage: 'url(/A05.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="p-5 sm:p-5 md:p-5 lg:p-5 xl:p-10" style={{ height: '100%' }}>
            <Row gutter={[16, 16]} justify="center" align="middle" style={{ height: '100%' }}>
              <Col span={24}>
                <Card variant="borderless">
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <p className="mb-5 text-4xl font-bold">意居 - Mood & Home Interior Design</p>
                      {/* <p className="mb-5 text-4xl font-bold">免費即時報價</p> */}
                      <p className="text-gray-60 mb-5 text-lg font-light">
                        我們提供免費諮詢服務，讓您了解我們的設計理念和報價。
                      </p>
                    </Col>
                    {mockData.map((item) => (
                      <Col key={item.name} span={24}>
                        <Card size="small" style={{ width: '100%', backgroundColor: item.color }}>
                          <Flex justify="space-between" align="center">
                            <p className="text-lg font-bold">{item.name}</p>
                            <p className="text-lg font-bold">$ xxx</p>
                          </Flex>
                        </Card>
                      </Col>
                    ))}
                    <Col span={24}>
                      <Button
                        type="primary"
                        size="large"
                        className="mt-5"
                        style={{ width: '100%', backgroundColor: '#fdcd1c' }}
                        onClick={() => {
                          router.push('/');
                        }}
                      >
                        線上報價
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          sm={24}
          md={24}
          lg={24}
          xl={12}
          className="hidden p-5 sm:block sm:p-5 md:p-5 lg:p-5 xl:p-10"
        >
          <PhotoGrid />
        </Col>
      </Row>
    </div>
  );
}
