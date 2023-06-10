import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Category from './screens/Categories';

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <Category />
        </>
    );
}

const styles = StyleSheet.create({
    container: {}
});
