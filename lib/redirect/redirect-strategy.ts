/**
 * Redirect logic based on user roles and device
 */

import { ROLES, WEB_APP_URLS, DEEP_LINKS, APP_INFO } from '../constants';
import { hasWebAccess, hasMobileAccess } from '../api/types';
import { isMobileDevice } from './device-detection';

// ============================================
// REDIRECT STRATEGY TYPE
// ============================================

export interface RedirectStrategy {
    shouldRedirect: boolean;
    url?: string;
    message: string;
    requiresMobileApp?: boolean;
    appInfo?: {
        appName: string;
        description: string;
        iosUrl: string;
        androidUrl: string;
    };
}

// ============================================
// GET REDIRECT URL BY ROLE
// ============================================

function getRedirectUrlByRole(role: string): string | null {
    switch (role) {
        case ROLES.SYSTEM_ADMIN:
            return WEB_APP_URLS.SYSTEM_ADMIN;
        case ROLES.MUNICIPAL_ADMIN:
            return WEB_APP_URLS.MUNICIPAL_ADMIN;
        case ROLES.DRIVER:
            return DEEP_LINKS.DRIVER.HOME;
        case ROLES.CITIZEN:
            return DEEP_LINKS.CITIZEN.HOME;
        default:
            return null;
    }
}

function getAppInfoByRole(role: string): {
    appName: string;
    description: string;
    iosUrl: string;
    androidUrl: string;
} | null {
    switch (role) {
        case ROLES.DRIVER:
            return {
                appName: APP_INFO.DRIVER.appName,
                description: APP_INFO.DRIVER.description,
                iosUrl: APP_INFO.DRIVER.iosUrl,
                androidUrl: APP_INFO.DRIVER.androidUrl,
            };
        case ROLES.CITIZEN:
            return {
                appName: APP_INFO.CITIZEN.appName,
                description: APP_INFO.CITIZEN.description,
                iosUrl: APP_INFO.CITIZEN.iosUrl,
                androidUrl: APP_INFO.CITIZEN.androidUrl,
            };
        default:
            return null;
    }
}

// ============================================
// MAIN REDIRECT STRATEGY
// ============================================

export function getRedirectStrategy(roles: string[]): RedirectStrategy {
    if (!roles || roles.length === 0) {
        return {
            shouldRedirect: false,
            message: 'No se pudo determinar tu rol de usuario',
        };
    }

    const primaryRole = roles[0]; // Use first role as primary

    // Users with web access (System Admin, Municipal Admin)
    if (hasWebAccess(roles)) {
        const url = getRedirectUrlByRole(primaryRole);
        return {
            shouldRedirect: true,
            url: url!,
            message: 'Redirigiendo a tu panel de administración...',
        };
    }

    // Users with mobile access (Driver, Citizen)
    if (hasMobileAccess(roles)) {
        const isMobile = isMobileDevice();

        if (isMobile) {
            // On mobile device → redirect to deep link
            const url = getRedirectUrlByRole(primaryRole);
            return {
                shouldRedirect: true,
                url: url!,
                message: 'Abriendo la aplicación móvil...',
            };
        } else {
            // On desktop → show app download warning
            const appInfo = getAppInfoByRole(primaryRole);

            if (!appInfo) {
                return {
                    shouldRedirect: false,
                    message: 'No se pudo determinar la información de la aplicación',
                };
            }

            return {
                shouldRedirect: false,
                message: 'Para continuar, descarga la aplicación móvil',
                requiresMobileApp: true,
                appInfo: appInfo,
            };
        }
    }

    return {
        shouldRedirect: false,
        message: 'No se pudo determinar la redirección apropiada',
    };
}

// ============================================
// EXECUTE REDIRECT
// ============================================

export async function executeRedirect(
    url: string,
    delayMs: number = 3000
): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            window.location.href = url;
            resolve();
        }, delayMs);
    });
}