import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Image, ImageBackground } from 'react-native';
import { styles } from './style/style';
import { useRouter } from 'expo-router';
import { EyeIcon, EyeOffIcon } from './style/style';

const AirlinePanelLoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        // TODO: wire up authentication logic
        console.log('Airline Panel Login:', { username, password });
    };

    const handleForgotPassword = () => {
        // TODO: navigate to forgot-password flow
    };

    const handleSwitchToReceiver = () => {
        router.push('/receiver-login');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('@/assets/images/login-background.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
                imageStyle={styles.backgroundPhoto}
            >
                <View pointerEvents="none" style={styles.backgroundOverlay} />
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

                <KeyboardAvoidingView
                    style={[styles.flex, styles.contentLayer]}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
                >
                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                    >
                        {/* ── Header / Branding ── */}
                        <View style={styles.header}>
                            <View style={styles.logoFrame}>
                                <Image
                                    source={require('@/assets/images/dial-logo.png')}
                                    style={styles.brandLogo}
                                    resizeMode="contain"
                                    accessibilityLabel="Delhi Indira Gandhi International Airport"
                                />
                            </View>
                        </View>

                        <View style={styles.headerSpacer} />

                        {/* ── Login Card ── */}
                        <View style={styles.card}>
                            {/* Card header text */}
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>ILHBS Portal</Text>
                                <Text style={styles.cardSubtitle}>
                                    Airline Panel Login
                                </Text>
                            </View>

                            {/* Username */}
                            <View style={styles.fieldGroup}>
                                <Text style={styles.label}>Username</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your username"
                                    placeholderTextColor="#94A3B8"
                                    value={username}
                                    onChangeText={setUsername}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    textContentType="username"
                                />
                            </View>

                            {/* Password */}
                            <View style={styles.fieldGroup}>
                                <Text style={styles.label}>Password</Text>
                                <View style={styles.passwordWrapper}>
                                    <TextInput
                                        style={styles.inputPassword}
                                        placeholder="Enter your password"
                                        placeholderTextColor="#94A3B8"
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry={!isPasswordVisible}
                                        returnKeyType="done"
                                        onSubmitEditing={handleLogin}
                                        textContentType="password"
                                    />
                                    <TouchableOpacity
                                        style={styles.eyeButton}
                                        onPress={() => setIsPasswordVisible(prev => !prev)}
                                        activeOpacity={0.7}
                                        accessibilityLabel={isPasswordVisible ? 'Hide password' : 'Show password'}
                                    >
                                        {isPasswordVisible
                                            ? <EyeIcon color="#64748B" size={20} />
                                            : <EyeOffIcon color="#64748B" size={20} />
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Forgot password */}
                            <TouchableOpacity
                                style={styles.forgotPasswordContainer}
                                onPress={handleForgotPassword}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                            </TouchableOpacity>

                            {/* Sign In button */}
                            <TouchableOpacity
                                style={styles.primaryButton}
                                onPress={handleLogin}
                                activeOpacity={0.85}
                                accessibilityRole="button"
                                accessibilityLabel="Sign In"
                            >
                                <Text style={styles.primaryButtonText}>Sign In</Text>
                            </TouchableOpacity>

                            {/* Switch portal */}
                            <TouchableOpacity
                                style={styles.switchContainer}
                                onPress={handleSwitchToReceiver}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.switchText}>Switch to Receiver Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default AirlinePanelLoginScreen;
