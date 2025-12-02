/**
 * Device detection utilities
 */

// ============================================
// USER AGENT DETECTION
// ============================================

export function isMobileDevice(): boolean {
    if (typeof window === 'undefined') return false;

    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // Check for mobile devices
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileRegex.test(userAgent);
}

export function isIOS(): boolean {
    if (typeof window === 'undefined') return false;

    const userAgent = navigator.userAgent || navigator.vendor;
    return /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
}

export function isAndroid(): boolean {
    if (typeof window === 'undefined') return false;

    const userAgent = navigator.userAgent || navigator.vendor;
    return /android/i.test(userAgent);
}

// ============================================
// PLATFORM INFO
// ============================================

export interface PlatformInfo {
    isMobile: boolean;
    isIOS: boolean;
    isAndroid: boolean;
    isDesktop: boolean;
}

export function getPlatformInfo(): PlatformInfo {
    const mobile = isMobileDevice();
    const ios = isIOS();
    const android = isAndroid();

    return {
        isMobile: mobile,
        isIOS: ios,
        isAndroid: android,
        isDesktop: !mobile,
    };
}