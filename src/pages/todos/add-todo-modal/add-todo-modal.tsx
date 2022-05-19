import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  VStack,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Field, FieldProps, Formik, FormikHandlers, FormikState } from "formik";
import TextInput from "../../../components/form/text-input";
import FormTextArea from "../../../components/form/text-area";

interface TFormTypes {
  title: string;
  description: string;
}
const initialValues = {
  title: "",
  description: "",
};
type TAddTodoModalProps = {
  children: ({ handleClick }: { handleClick: () => void }) => React.ReactNode;
  handleSubmit: (title: string, description: string) => void;
};
function AddTodoModal({ handleSubmit, children }: TAddTodoModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    isOpen ? onClose() : onOpen();
  };
  if (isOpen) {
    return (
      <AddTodoDialog
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        handleSubmit={handleSubmit}
      />
    );
  }

  return <>{children({ handleClick })}</>;
}

type TAddTodoDialogProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  handleSubmit: (title: string, description: string) => void;
};
const AddTodoDialog = ({
  isOpen,
  onOpen,
  onClose,
  handleSubmit,
}: TAddTodoDialogProps) => {
  const onSubmit = (values: TFormTypes) => {
    const { title, description } = values;
    handleSubmit(title, description);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Todo</ModalHeader>
        <ModalCloseButton />

        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({
            values,
            isSubmitting,
            handleChange,
            handleSubmit,
          }: FormikState<TFormTypes> & FormikHandlers) => {
            return (
              <form onSubmit={handleSubmit}>
                <ModalBody>
                  <VStack w="full" spacing={6}>
                    <Box w="full" my={3}>
                      <Field name="title">
                        {({ field, form, meta }: FieldProps) => {
                          return (
                            <>
                              <TextInput
                                name={field.name}
                                error={meta.error}
                                value={field.value}
                                placeholder="Title"
                                isInvalid={
                                  meta.touched && meta.error ? true : false
                                }
                                onChange={field.onChange}
                              />
                            </>
                          );
                        }}
                      </Field>
                    </Box>
                    <Box w="full" my={3}>
                      <Field name="description">
                        {({ field, form, meta }: FieldProps) => {
                          return (
                            <>
                              <FormTextArea
                                rows={7}
                                name={field.name}
                                error={meta.error}
                                value={field.value}
                                isInvalid={
                                  meta.touched && meta.error ? true : false
                                }
                                placeholder="Description"
                                onChange={field.onChange}
                              />
                            </>
                          );
                        }}
                      </Field>
                    </Box>
                  </VStack>
                </ModalBody>

                <ModalFooter>
                  <Flex w="full" justifyContent="space-around">
                    <Button
                      py={5}
                      px={9}
                      minW="45%"
                      variant="outline"
                      fontWeight={300}
                      borderRadius={20}
                      onClick={onClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      py={5}
                      px={9}
                      minW="45%"
                      type="submit"
                      colorScheme="blue"
                      fontWeight={300}
                      borderRadius={20}
                    >
                      Create
                    </Button>
                  </Flex>
                </ModalFooter>
              </form>
            );
          }}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default AddTodoModal;
