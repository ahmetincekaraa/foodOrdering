import { useFormik } from "formik";
import Title from "../../../components/ui/Title";
import Input from "../../../components/form/Input";
import { loginSchema } from "../../../schema/login";
import Link from "next/link";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";


const Login = () => {
 const {data: session} = useSession();
 const [showPassword, setShowPassword] = useState(false);
 const handleTogglePassword = () => setShowPassword((prev) => !prev);
 const handleToggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);
  const { push } = useRouter();
  const [currentUser, setCurrentUser] = useState()

  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    try {
      const res = await signIn("credentials", options);
      actions.resetForm();
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        setCurrentUser(
          res.data?.find((user) => user.email === session?.user?.email)
        );
        session && push("/profile/" + currentUser?._id);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [session, push, currentUser]);
  

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: showPassword ? 'text' : 'password',
      placeholder: "Şifre",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
      icon: (
        <span onClick={handleTogglePassword} className="cursor-pointer text-sm">
  {showPassword  ? (
    <i className="fa fa-eye"></i>
  ) : (
    <i className="fa fa-eye-slash"></i>
  )}
</span>
      ),
    },
  ];
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-16 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Giriş</Title>
        <div className="flex flex-col gap-y-3 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          <div className="flex flex-col w-full gap-y-2 mt-5">
            <button className="btn-primary hover:text-secondary" type="submit">
              GİRİŞ
            </button>
            <button
              className="!bg-secondary btn-primary hover:text-primary"
              type="button"
              onClick={() => signIn("github")}
            >
              <i className="fa fa-github mr-2"></i>
              GITHUB
            </button>
            <Link href="/register">
              <span className="text-sm underline cursor-pointer text-secondary">
              Hesabınız yok mu?
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  const res = await axios.get(`${process?.env.NEXT_PUBLIC_API_URL}/users`);
  const user = res.data?.find((user) => user?.email === session?.user.email);

  if (session && user) {
    return {
      redirect: {
        destination: "/profile/"+ user._id,
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default Login;
