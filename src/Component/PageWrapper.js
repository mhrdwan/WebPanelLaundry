import { Card } from 'antd';
import { Col, Row } from 'react-bootstrap';

function PageWrapper({ children }) {
    return (
        <Row>
            <Col sm={12}>
                <Card style={{ width: '100%', height: '100%', marginRight: "700px" }}>
                    <div className='mt-5'>
                        {children}

                    </div>
                </Card>
            </Col>
        </Row>
    );
}

export default PageWrapper;
