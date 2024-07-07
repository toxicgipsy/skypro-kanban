import { GlobalStyle, Wrapper } from "../components/Global/Global.styled";
import Signup from "../components/Signup/Signup";

function SignUpPage() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Signup />
      </Wrapper>
    </>
  );
}

export default SignUpPage;
