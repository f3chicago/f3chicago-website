"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

import Header from '../_components/Header';
import Footer from '../_components/Footer';
import DetailsBar from '../_components/DetailsBar';

const FormContainer = styled.div`
  width: 70%;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: 70vh;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 50px;
`;

const InputWrapper = styled.div`
  border: 2px solid transparent;
  width: 90%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  color: #333;
  width: 100%;
  font-size: 15px;
  padding: 8px;
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  outline: 0px transparent !important;
`;

const MessageInput = styled.textarea`
  width: 100%;
  color: #333;
  font-size: 15px;
  padding: 10px;
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  outline: 0px transparent !important;
`;

function FormPage() {
  const [state, handleSubmit] = useForm("mdknepkq");

  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }
  const href = '/ContactUsForm'
  return (
    <>
      <Header href={href} />
      <PageWrapper>
        <FormContainer>
          <DetailsBar />
          <form style={{ height: "auto", paddingBottom: 100 + "px", position: "relative", padding: "10px 10px 100px 10px" }} onSubmit={handleSubmit}>
            <InputWrapper>
              <label htmlFor="name">Name</label>
              <Input type="text" name="name" placeholder="Name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="email">Email Address</label>
              <Input type="email" name="email" placeholder="Email Address" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="message">Message</label>
              <MessageInput name="message" placeholder="Write your message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </InputWrapper>
            <button style={{ position: "absolute", bottom: 20 + "px", right: 20 + "px", padding: 10 + "px", backgroundColor: "rgb(8, 8, 63)", color: "#fff", border: "none", borderRadius: 5 + "px", cursor: "pointer" }} type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </FormContainer>
      </PageWrapper >
      <Footer /></>
  );
}

export default FormPage;