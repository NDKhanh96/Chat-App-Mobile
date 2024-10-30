import { DividerLine } from '@/auth/DividerLine';
import { ValidateErrorText } from '@/common/ValidateErrorText';
import { ThemedView } from '@/theme-wrapper/ThemedView';
import { Button, ButtonText } from '@/ui/button';
import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@/ui/checkbox';
import { Heading } from '@/ui/heading';
import { CheckIcon } from '@/ui/icon';
import { Input, InputField, InputSlot } from '@/ui/input';
import { AntDesign, Feather } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, useColorScheme, type ColorSchemeName } from 'react-native';
import { z } from 'zod';
import { Colors } from '~/constants/Colors';
import { loginSchema } from '~/form-schema';

export default function LoginScreen(): React.JSX.Element {
    const colorScheme: ColorSchemeName = useColorScheme();
    const themedColorIcon: string = Colors[colorScheme ?? 'light'].icon;
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<z.infer<typeof loginSchema>>({ resolver: zodResolver(loginSchema) });

    const handleShowPassword = (): void => {
        setShowPassword((showState: boolean): boolean => {
            return !showState;
        });
    };

    const handleLogin = async (data: z.infer<typeof loginSchema>) => {
        await new Promise((resolve) => setTimeout(resolve, 10000));
        console.log(data);
    };

    return (
        <ThemedView className='flex flex-1 justify-center items-center mx-5'>
            <ThemedView className='flex-col w-full gap-y-4'>
                <Heading className='text-typography-500 leading-3 pt-3 text-center mb-8'>Login to your account</Heading>

                <ThemedView className='gap-y-5'>
                    <ThemedView className='flex-col gap-y-1'>
                        <Text className="text-typography-500 leading-1">Email</Text>
                        <Input isDisabled={isSubmitting} className='w-full' size='xl'>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputField
                                        onBlur={onBlur}
                                        value={value}
                                        onChangeText={(value: string) => onChange(value)}
                                        type="text"
                                        editable={!isSubmitting}
                                    />
                                )}
                                name='email'
                                rules={{ required: true }}
                            />
                        </Input>
                        <ValidateErrorText content={errors.email} />
                    </ThemedView>

                    <ThemedView className='flex-col gap-y-1'>
                        <Text className='text-typography-500 leading-1'>Password</Text>
                        <Input isDisabled={isSubmitting} className='w-full' size='xl'>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputField
                                        onBlur={onBlur}
                                        value={value}
                                        onChangeText={(value: string) => onChange(value)}
                                        type={showPassword ? 'text' : 'password'}
                                        editable={!isSubmitting}
                                    />
                                )}
                                name='password'
                                rules={{ required: true }}
                            />
                            <InputSlot className='pr-3' onPress={handleShowPassword}>
                                <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color='gray' />
                            </InputSlot>
                        </Input>
                        <ValidateErrorText content={errors.password} />
                    </ThemedView>
                </ThemedView>

                <ThemedView className='flex-row justify-between'>
                    <Checkbox size="md" isInvalid={false} isDisabled={false} value={''}>
                        <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                        </CheckboxIndicator>
                        <CheckboxLabel size='md'>Remember me</CheckboxLabel>
                    </Checkbox>

                    <Button variant='link' onPress={() => router.navigate('/forgotPassword')}>
                        <ButtonText size='md' className='text-typography-500 leading-1 text-center'>Forgot password?</ButtonText>
                    </Button>
                </ThemedView>

                <Button disabled={isSubmitting} size='xl' onPress={handleSubmit(handleLogin)}>
                    <ButtonText>Login</ButtonText>
                </Button>

                <DividerLine content="DON'T HAVE AN ACCOUNT?" />

                <Button variant='outline' size='xl' onPress={() => router.navigate('/register')}>
                    <ButtonText>Register</ButtonText>
                </Button>

                <DividerLine content="OR CONTINUE WITH?" />

                <ThemedView className='flex-row gap-x-2'>
                    <Button className='flex-1' variant='solid' size='xl'>
                        <AntDesign name="twitter" size={24} color={themedColorIcon} />
                    </Button>

                    <Button className='flex-1' variant='solid' size='xl'>
                        <AntDesign name="google" size={24} color={themedColorIcon} />
                    </Button>

                    <Button className='flex-1' variant='solid' size='xl'>
                        <AntDesign name="github" size={24} color={themedColorIcon} />
                    </Button>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    );
}
