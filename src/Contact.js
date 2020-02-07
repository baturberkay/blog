import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Mail from './mail.png'
import GitHub from './github.png'
import Steam from './steam.png'
import LinkedIn from './linkedin.png'

class Contact extends Component {
    render() {
        return (
            <Container>
                <div align="left">
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <Col >
                            <img src={LinkedIn}
                                 alt={'logo'}
                                 style={{width: 22, height: 22}}/>
                            <a href="https://www.linkedin.com/in/batur-berkay-dumanay-54ab768b"> Batur Berkay
                                DUMANAY</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} xsOffset={6}>
                            <img src={Mail}
                                 alt={'logo'}
                                 style={{width: 22, height: 22}}/>
                            <a href="mailto: baturberkay@gmail.com"> baturberkay</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={GitHub}
                                 alt={'logo'}
                                 style={{width: 22, height: 22}}/>
                            <a href="https://www.github.com/baturberkay"> baturberkay</a>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <img src={Steam}
                                 alt={'logo'}
                                 style={{width: 22, height: 22}}/>
                            <a href="https://steamcommunity.com/id/thestarrynight/"> /home/bb</a>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default Contact;
