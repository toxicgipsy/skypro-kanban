import { GlobalStyle, Wrapper } from "../components/Global/Global.styled";
import Signin from "../components/Signin/Signin";

function SignInPage() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Signin />
      </Wrapper>
    </>
  );
}

export default SignInPage;
