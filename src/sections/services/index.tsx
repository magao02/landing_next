import CardImages from '../../components/cardImage'

import {Container, Form, Input, Service, Title,Button } from './styles'

export default function Services(){

    return(
        <Service id='service'>
            <Container>
            <CardImages image='/photo1.png' name='Mark' year='2016' ></CardImages>
            <CardImages image='/photo5.png' name='Camile' year='2012' ></CardImages>
            <CardImages image='/photo6.png' name='Elayne' year='2018' ></CardImages>
            </Container>
            <Title>Learn how others are reaching their <br></br> audience easier than ever before.</Title>
            <Form>
                <Input type='text' id='email' name='email' placeholder='enter yout e-mail'></Input>
                <Button>Join our List</Button>
            </Form>


        </Service>


    )
}
