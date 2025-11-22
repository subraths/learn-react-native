import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  firstName: string;
  lastName: string;
};

const schema = z.object({
  firstName: z
    .string()
    .max(10, "cant be greater than 10 chars")
    .nonempty("first name cannot be empty"),
  lastName: z
    .string()
    .max(4, "last name cant be greater than 4 bro")
    .nonempty("last name cannot be empty"),
});

export default function Index() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Box className="flex justify-center items-center h-full">
      <Text>Home screen</Text>
      <Controller
        control={control}
        name="firstName"
        rules={{ required: true }}
        render={({ field: { onBlur, onChange, value } }) => (
          <Input>
            <InputField
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="enter first name"
            />
          </Input>
        )}
      />
      {errors.firstName && <Text>{errors.firstName?.message}</Text>}
      <Controller
        control={control}
        name="lastName"
        rules={{ maxLength: 10 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input>
            <InputField
              placeholder="enter last name here"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </Input>
        )}
      />
      {errors.lastName && <Text>{errors.lastName?.message}</Text>}
      <Button onPress={onSubmit}>
        <ButtonText>Submit</ButtonText>
      </Button>
    </Box>
  );
}
