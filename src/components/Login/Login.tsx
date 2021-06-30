import {
  Container,
  Content,
  Description,
  LoginLogoOne,
  LoginLogoTwo,
  LoginActionButton,
} from "./Login.style";
const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <LoginLogoOne>
          <img src="/images/cta-logo-one.svg" alt="Logo one" />
        </LoginLogoOne>
        <LoginActionButton>Get All There</LoginActionButton>
        <Description>
          ​Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <LoginLogoTwo>
          <img src="/images/cta-logo-two.png" alt="Logo Two" />
        </LoginLogoTwo>
      </Content>
    </Container>
  );
};
export default Login;
