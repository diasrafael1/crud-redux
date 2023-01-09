import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

const EditUser: NextPage = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  function changeValues(e: ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleAddUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(values);
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Editar Usuário</title>
      </Head>

      <form
        className="mt-10 max-w-xl mx-auto"
        onSubmit={(e) => handleAddUser(e)}
      >
        <TextField
          label="Nome"
          inputProps={{ type: "text", placeholder: "John Doe" }}
          name="name"
          value={values.name}
          onChange={changeValues}
        />
        <br />
        <TextField
          label="E-mail"
          inputProps={{ type: "email", placeholder: "johndoe@mail.com" }}
          name="email"
          value={values.email}
          onChange={changeValues}
        />
        <Button onClick={() => {}}>Submit</Button>
      </form>
    </>
  );
};

export default EditUser;
