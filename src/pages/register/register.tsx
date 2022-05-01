import {
  Button,
  Container,
  Heading,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Field, FieldProps, Formik, FormikHandlers, FormikState } from "formik";

import AuthLayout from "../../layouts/auth/auth";
import TextInput from "../../components/form/text-input";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as GoogleIcon } from "../../assets/google.svg";
import GoogleSignup from "../../features/google-signup/google-signup";

type FormProps = {
  email: string;
  password: string;
  confirmPassword: string;
};
const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const handleSubmit = (values: FormProps) => {
    console.log(values);
  };
  return (
    <AuthLayout>
      <VStack w="full" h="full" overflowY="scroll">
        <Container h="full" paddingBottom={10}>
          <VStack
            h="full"
            spacing={3}
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <Logo height={55} width={110} />
            <VStack spacing={0} alignItems="flex-start">
              <Heading fontSize="2xl">Create Account</Heading>
            </VStack>

            <Formik
              enableReinitialize
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {({
                values,
                isSubmitting,
                handleChange,
                handleSubmit,
              }: FormikState<FormProps> & FormikHandlers) => {
                return (
                  <>
                    <VStack w="full" spacing={6}>
                      <Field name="email">
                        {({ field, form, meta }: FieldProps) => {
                          return (
                            <>
                              <TextInput
                                label="Email/Username"
                                name={field.name}
                                error={meta.error}
                                value={field.value}
                                placeholder="email/username"
                                isInvalid={
                                  meta.touched && meta.error ? true : false
                                }
                                onChange={field.onChange}
                              />
                            </>
                          );
                        }}
                      </Field>

                      <Field name="password">
                        {({ field, form, meta }: FieldProps) => {
                          return (
                            <>
                              <TextInput
                                label="Password"
                                name={field.name}
                                error={meta.error}
                                value={field.value}
                                placeholder="password"
                                isInvalid={
                                  meta.touched && meta.error ? true : false
                                }
                                onChange={field.onChange}
                              />
                            </>
                          );
                        }}
                      </Field>
                      <Field name="confirmPassword">
                        {({ field, form, meta }: FieldProps) => {
                          return (
                            <>
                              <TextInput
                                label="Confirm Password"
                                name={field.name}
                                error={meta.error}
                                value={field.value}
                                placeholder="confirm password"
                                isInvalid={
                                  meta.touched && meta.error ? true : false
                                }
                                onChange={field.onChange}
                              />
                            </>
                          );
                        }}
                      </Field>
                    </VStack>

                    <VStack w="full" spacing={6} alignItems="flex-start">
                      <Button
                        colorScheme="blue"
                        w="full"
                        type="submit"
                        paddingX={0}
                        paddingY={7}
                      >
                        Sign up
                      </Button>

                      <GoogleSignup />

                      <Text>
                        Already have an account?{" "}
                        <ChakraLink as={Link} to="/login" color="blue.900">
                          Login here
                        </ChakraLink>
                      </Text>
                    </VStack>
                  </>
                );
              }}
            </Formik>
          </VStack>
        </Container>
        <Container paddingBottom={5}>
          <Link to="/privacy">
            <Text color="gray.400">Privacy Policy and Terms of Service</Text>
          </Link>
        </Container>
      </VStack>
    </AuthLayout>
  );
};

export default Register;
