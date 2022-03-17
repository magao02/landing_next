import Card from "../../components/card";
import { CardBottom, Container, ContainerText, Text, Title } from "./style";





export default function Price(){

    return(
        <Container id='pricing'>
        <Card image='/price1.png' text="Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end." ></Card>
        <CardBottom image='/price2.png' text="Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools." ></CardBottom>

        <ContainerText>
            <Title>The source for proven, engaging email campaigns</Title>
            <Text>Whether you’re a startup, small business, e-commerce store, or want to promote your app, NinjaMail has the feature set tailored for your business. </Text>
        </ContainerText>

        </Container>


    )
}
