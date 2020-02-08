import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Container maxWidth="lg">
                    <Typography component="div" style={{height: '100vh'}}>
                        Coming soon..
                    </Typography>
                </Container>
            </React.Fragment>
        );
    }
}

export default About;
