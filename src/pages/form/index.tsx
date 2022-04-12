import React, { useContext, useState } from "react";

import UserContext from "../../context/user";

import { Container, ParentComponent, Form } from "./styles";

import ChildrenOne from "../../components/childrenOne";
import ChildrenTwo from "../../components/childrenTwo";
import ChildrenThree from "../../components/ChildrenThree";

const FormData: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const { setState: setGlobalState } = useContext(UserContext);

  function handleSubmit() {
    setGlobalState({ email, lastName, name });
  }

  return (
    <Container>
      <ParentComponent>
        <Form>
          <h2>Informe seus Dados</h2>
          <input
            type="text"
            placeholder="nome"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="sobrenome"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="button" onClick={handleSubmit}>
            Enviar
          </button>
        </Form>
        <h1>Componente Pai</h1>
        <div id="childrens">
          <ChildrenOne />
          <ChildrenTwo />
          <ChildrenThree />
        </div>
      </ParentComponent>
    </Container>
  );
};

export default FormData;
