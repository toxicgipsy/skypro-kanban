import { AuthForm } from "./AuthForm";

function SignIn({ setIsAuth }) {
  return <AuthForm setIsAuth={setIsAuth} isSignUp={false} />;
}

export default SignIn;
