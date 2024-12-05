import { load } from '@expo/env';

load(process.cwd());

process.env.EXPO_PUBLIC_API_URL = 'http://localhost:8080/api/';
