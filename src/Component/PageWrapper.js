import { Card, Row, Col } from 'antd';

function PageWrapper({ children }) {
    return (
        <Row>
            <Col>
                <Card style={{ width: '100%', height: '700px', overflow: 'auto', marginRight: "700px" }}>
                    {children}
                </Card>
            </Col>
        </Row>
    );
}

export default PageWrapper;
