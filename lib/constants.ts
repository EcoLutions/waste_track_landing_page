/**
 * Central configuration constants for WasteTrack Landing Page
 */

// ============================================
// USER ROLES
// ============================================

export const ROLES = {
    SYSTEM_ADMIN: 'ROLE_SYSTEM_ADMINISTRATOR',
    MUNICIPAL_ADMIN: 'ROLE_MUNICIPAL_ADMINISTRATOR',
    DRIVER: 'ROLE_DRIVER',
    CITIZEN: 'ROLE_CITIZEN',
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

// ============================================
// LANDING PAGE SEGMENTS
// ============================================

export const SEGMENTS = {
    MUNICIPAL_ADMIN: 'municipal-admin',
    DRIVER: 'driver',
    CITIZEN: 'citizen',
} as const;

export type Segment = (typeof SEGMENTS)[keyof typeof SEGMENTS];

// ============================================
// API ENDPOINTS
// ============================================

const API_BASE_URL = 'https://waste-track-platform-production.up.railway.app/api/v1';

export const API_ENDPOINTS = {
    AUTH: {
        SET_INITIAL_PASSWORD: `${API_BASE_URL}/authentication/set-initial-password`,
        RESET_PASSWORD: `${API_BASE_URL}/authentication/reset-password`,
        FORGOT_PASSWORD: `${API_BASE_URL}/authentication/forgot-password`,
    },
} as const;

// ============================================
// REDIRECT URLS - WEB APPS
// ============================================

export const WEB_APP_URLS = {
    SYSTEM_ADMIN: 'https://waste-track-super-admin.netlify.app',
    MUNICIPAL_ADMIN: 'https://waste-track-municipal-admin.netlify.app',
} as const;

// ============================================
// DEEP LINKS - MOBILE APPS
// ============================================

export const DEEP_LINKS = {
    DRIVER: {
        LOGIN: process.env.NEXT_PUBLIC_DRIVER_DEEP_LINK_LOGIN || 'wastetrack-driver://login',
        HOME: process.env.NEXT_PUBLIC_DRIVER_DEEP_LINK_HOME || 'wastetrack-driver://home',
    },
    CITIZEN: {
        LOGIN: process.env.NEXT_PUBLIC_CITIZEN_DEEP_LINK_LOGIN || 'wastetrack-citizen://login',
        REGISTER: process.env.NEXT_PUBLIC_CITIZEN_DEEP_LINK_REGISTER || 'wastetrack-citizen://register',
        HOME: process.env.NEXT_PUBLIC_CITIZEN_DEEP_LINK_HOME || 'wastetrack-citizen://home',
    },
} as const;

// ============================================
// APP STORE URLS
// ============================================

export const APP_STORE_URLS = {
    DRIVER: {
        IOS: process.env.NEXT_PUBLIC_DRIVER_IOS_URL || 'https://apps.apple.com/app/wastetrack-driver',
        ANDROID: process.env.NEXT_PUBLIC_DRIVER_ANDROID_URL || 'https://play.google.com/store/apps/details?id=com.wastetrack.driver',
    },
    CITIZEN: {
        IOS: process.env.NEXT_PUBLIC_CITIZEN_IOS_URL || 'https://apps.apple.com/app/wastetrack-citizen',
        ANDROID: process.env.NEXT_PUBLIC_CITIZEN_ANDROID_URL || 'https://play.google.com/store/apps/details?id=com.wastetrack.citizen',
    },
} as const;

// ============================================
// APP INFORMATION
// ============================================

export const APP_INFO = {
    DRIVER: {
        appName: 'WasteTrack Driver',  // <- Cambiar "name" por "appName"
        description: 'Aplicación móvil para conductores de recolección',
        iosUrl: APP_STORE_URLS.DRIVER.IOS,
        androidUrl: APP_STORE_URLS.DRIVER.ANDROID,
    },
    CITIZEN: {
        appName: 'WasteTrack Citizen',  // <- Cambiar "name" por "appName"
        description: 'Aplicación móvil para ciudadanos',
        iosUrl: APP_STORE_URLS.CITIZEN.IOS,
        androidUrl: APP_STORE_URLS.CITIZEN.ANDROID,
    },
} as const;

// ============================================
// PASSWORD VALIDATION RULES
// ============================================

export const PASSWORD_RULES = {
    MIN_LENGTH: 8,
    REQUIRE_UPPERCASE: true,
    REQUIRE_LOWERCASE: true,
    REQUIRE_NUMBER: true,
    REQUIRE_SPECIAL_CHAR: true,
    SPECIAL_CHARS: '!@#$%^&*()_+-=[]{}|;:,.<>?',
} as const;

export const PASSWORD_ERROR_MESSAGES = {
    REQUIRED: 'La contraseña es obligatoria',
    MIN_LENGTH: `La contraseña debe tener al menos ${PASSWORD_RULES.MIN_LENGTH} caracteres`,
    UPPERCASE: 'La contraseña debe contener al menos una letra mayúscula',
    LOWERCASE: 'La contraseña debe contener al menos una letra minúscula',
    NUMBER: 'La contraseña debe contener al menos un número',
    SPECIAL_CHAR: 'La contraseña debe contener al menos un carácter especial',
    NO_MATCH: 'Las contraseñas no coinciden',
} as const;

// ============================================
// ROUTES
// ============================================

export const ROUTES = {
    HOME: '/',
    LANDING: {
        MUNICIPAL_ADMIN: '/municipal-admin',
        DRIVER: '/driver',
        CITIZEN: '/citizen',
    },
    AUTH: {
        ACTIVATE_ACCOUNT: '/activate-account',
        RESET_PASSWORD: '/reset-password',
    },
} as const;

// ============================================
// REDIRECT DELAYS (milliseconds)
// ============================================

export const REDIRECT_DELAYS = {
    SUCCESS_COUNTDOWN: 3000, // 3 seconds
    ERROR_RETRY: 5000, // 5 seconds
} as const;