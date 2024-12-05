import LoginScreen from 'src/app/(auth)/login';
import { renderWithProviders } from '~/test';

describe('<LoginScreen/>', () => {
    test('Text renders correctly on HomeScreen', () => {
        const { getByText } = renderWithProviders(<LoginScreen />);

        getByText('Email');
    });
});

