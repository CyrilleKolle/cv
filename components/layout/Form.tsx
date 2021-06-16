import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

const FormZ = () => {
  const [status, setStatus] = useState("Send");
  const [userEmail, setUserEmail] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  var service_id = "default_service";
  var template_id = "template_3ss6fdp";
  var user_id = "user_EXucibMI1tlzwFnLGdHke";
  var template_params = {
    userEmail: userEmail,
    subject: title,
    title: title,
    message: msg,
  };
  var Emailjs = require("emailjs-com");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    Emailjs.send(service_id, template_id, template_params, user_id).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Sent");
      },
      function (err) {
        console.log("FAILED...", err);
        setStatus("error in form");
      }
    );
  };

  return (
    <>
      <TitleContainer>
        <Title>Contact Form To Cyrille</Title>
      </TitleContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <InputField
            type="text"
            id="name"
            placeholder={"Name"}
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <InputField
            type="text"
            id="title"
            placeholder={"Subject"}
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <InputField
            type="email"
            id="email"
            placeholder={"Email"}
            required
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
          />
        </div>
        <div>
          <InputArea
            id="message"
            required
            placeholder={"Message"}
            value={msg}
            onChange={(event) => setMsg(event.target.value)}
          />
        </div>
        <ButtonContainer>
          <Button color="white" type="submit">
            {status}
          </Button>
        </ButtonContainer>
      </form>
    </>
  );
};
const TitleContainer = styled.div`
  ${tw`w-full`}
`;
const Title = styled.div`
  ${tw`mx-auto text-2xl flex justify-self-center place-self-center text-yellow-400 font-extrabold`}
`;
const InputField = styled.input`
  ${tw`self-center my-2 rounded-lg w-full`}
`;
const InputArea = styled.textarea`
  ${tw`self-center my-5 rounded-lg w-full h-32`}
`;
const Button = styled.button`
  ${tw`self-center my-5 bg-green-300 px-6 py-3 rounded-xl place-self-center flex justify-self-center mx-auto`}
`;
const ButtonContainer = styled.div`
  ${tw`w-full`}
`;
export default FormZ;
