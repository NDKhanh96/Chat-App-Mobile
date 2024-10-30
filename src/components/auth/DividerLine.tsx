import { ThemedText } from '@/theme-wrapper/ThemedText';
import { ThemedView } from '@/theme-wrapper/ThemedView';
import { memo } from 'react';
import { View } from 'react-native';

type Props = {
    content: string;
};

function Divider (props: Props): JSX.Element {
    const { content } = props;

    return (
        <ThemedView className='flex flex-row items-center'>
            <View className='flex-1 h-px bg-gray-300' />
            <ThemedText className='text-typography-500 leading-1 text-center mx-4'>{content}</ThemedText>
            <View className='flex-1 h-px bg-gray-300' />
        </ThemedView>
    );
}

export const DividerLine = memo(Divider);
