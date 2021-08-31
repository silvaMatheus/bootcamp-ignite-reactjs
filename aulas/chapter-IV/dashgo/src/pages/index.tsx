import { Button, Flex, Stack } from '@chakra-ui/react';
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Input } from '../components/Form/Inputs';

type SignInFormData = {
  email: string;
  password: string;

};


const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail invalido'),
  password: yup.string().required('Senha obrigatoria'),
})
export default function SignIn() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }

  const { errors } = formState;
  console.log(errors)
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center">

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
          Entrar
        </Button>

      </Flex>

    </Flex>
  )
}

//   {// isLoading={formState.isSubmitted} */}
