/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example,
 * [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
    light: {
        text: '#1C1C1E',
        background: '#F2F2F2',
        tint: tintColorLight,
        icon: '#F2F2F2',
        tabIconDefault: '#687076',
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: '#E5E5E7',
        background: '#010101',
        tint: tintColorDark,
        icon: '#010101',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: tintColorDark,
    },
};
