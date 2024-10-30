import { memo } from 'react';
import type { FieldError } from 'react-hook-form';
import { StyleSheet, Text, type TextProps } from 'react-native';

export type ComponentProps = TextProps & {
    content?: FieldError;
};

function Component({
    style,
    content,
    ...rest
}: ComponentProps): JSX.Element | null {
    if (!content) {
        return null;
    }

    return (
        <Text style={[style, styles.default]} {...rest}>
            {content?.message}
        </Text>
    );
}

const styles = StyleSheet.create({
    default: {
        color: 'red',
    },
});

export const ValidateErrorText = memo(Component);
