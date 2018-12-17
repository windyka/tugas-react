import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';


class Details extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src="https://i.pinimg.com/originals/56/7c/e5/567ce59bb032960448baa9ee44ee8da3.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Suku dan Budaya Indonesia</CardTitle>
                        <CardSubtitle>Suku Batak</CardSubtitle>
                        <CardText>Suku Batak merupakan salah satu suku bla bla bla</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Details