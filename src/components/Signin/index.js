import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, Span1 } from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">app</Icon>
          <FormContent>
            <Span1>This form is only here for styling purposes!</Span1>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
