import React, { Component } from 'react'
import {
    Card, CardImg, ListGroup, ListGroupItem, CardBody,
    CardTitle
} from 'reactstrap';

class Homes extends Component {

    state = {
        suku: [{
            nama: 'Batak',
            detail: 'Suku Batak merupakan salah satu suku bla bla bla'
        }, {
            nama: 'Padang',
            detail: 'Suku Padang merupakan salah satu suku bla bla bla'
        }, {
            nama: 'Jawa',
            detail: 'Suku Jawa merupakan salah satu suku bla bla bla'
        }, {
            nama: 'Madura',
            detail: 'Suku Madura merupakan salah satu suku bla bla bla'
        }, {
            nama: 'Dayak',
            detail: 'Suku Dayak merupakan salah satu suku bla bla bla'
        }, {
            nama: 'Sasak',
            detail: 'Suku Sasak merupakan salah satu suku bla bla bla'
        }, {
            nama: 'Badui',
            detail: 'Suku Badui merupakan salah satu suku bla bla bla'
        }]
    }

    render() {
        const { suku } = this.state
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src="https://i.pinimg.com/originals/56/7c/e5/567ce59bb032960448baa9ee44ee8da3.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Suku dan Budaya Indonesia</CardTitle>
                        <ListGroup>
                            {suku.map((values, indeks) => {
                                return <ListGroupItem>Suku dan Budaya {values.nama}</ListGroupItem>
                            })}


                        </ListGroup>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Homes