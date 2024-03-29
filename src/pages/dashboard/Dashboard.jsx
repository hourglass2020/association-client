import { Col, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

export default function Dashboard() {
    return (
        <Row style={{ margin: 0, padding: 0 }}>
            <Col xs={0}
                sm={0}
                md={3}
                lg={2}
                xl={2}
                style={{
                    backgroundColor: "#6600ff",
                    height: '100vh',
                    display: {
                        xs: 'none',
                        md: 'block'
                    },
                    scrollbarWidth: 0,
                    padding: 0,
                    borderRight: "1px solid #C5C5C5",
                    boxShadow: "0px 4px 7px -1px rgba(0, 0, 0, 0.25)"
                }}>

                <div className='card card-box bg-warning m-3 p-3 d-flex'>
                    <FaUserCircle className="mx-1" size={"2rem"} />
                    پوریا اقدم پور
                </div>

            </Col>

            <Col xs={12}
                sm={12}
                md={9}
                lg={10}
                xl={10}
                style={{
                    p: 0,
                    height: '100vh',
                    overflow: 'auto',
                }}>
                <Outlet />
            </Col>
        </Row>
    )
}
