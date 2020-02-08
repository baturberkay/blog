import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Mail from './mail.png'
import GitHub from './github.png'
import LinkedIn from './linkedin.png'
import Typography from "@material-ui/core/Typography";

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Container maxWidth="lg">
                    <Typography component="div" style={{height: '100vh'}}>
                        <div align="left">
                            <Row>
                                <Col>
                                    <img src={LinkedIn}
                                         alt={'logo'}
                                         style={{width: 22, height: 22}}/>
                                    <a href="https://www.linkedin.com/in/batur-berkay-dumanay-54ab768b"> Batur Berkay
                                        DUMANAY</a>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
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
                        </div>
                    </Typography>
                </Container>
            </React.Fragment>
        )
    }
}

export default Contact;
