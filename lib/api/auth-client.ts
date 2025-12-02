/**
 * HTTP client for authentication endpoints
 */

import { API_ENDPOINTS } from '../constants';
import type {
    SetInitialPasswordRequest,
    SetInitialPasswordResponse,
    ResetPasswordRequest,
    ResetPasswordResponse,
    ApiError,
} from './types';

// ============================================
// BASE FETCH CONFIGURATION
// ============================================

const defaultHeaders = {
    'Content-Type': 'application/json',
};

async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const error: ApiError = await response.json();
        throw new Error(error.message || 'Error en la solicitud');
    }

    // Handle 204 No Content
    if (response.status === 204) {
        return {} as T;
    }

    return response.json();
}

// ============================================
// AUTHENTICATION API CLIENT
// ============================================

export const authClient = {
    /**
     * Set initial password for new users
     */
    async setInitialPassword(
        token: string,
        password: string
    ): Promise<SetInitialPasswordResponse> {
        const request: SetInitialPasswordRequest = {
            activationToken: token,
            password,
        };

        const response = await fetch(API_ENDPOINTS.AUTH.SET_INITIAL_PASSWORD, {
            method: 'POST',
            headers: defaultHeaders,
            body: JSON.stringify(request),
        });

        return handleResponse<SetInitialPasswordResponse>(response);
    },

    /**
     * Reset password for existing users
     */
    async resetPassword(
        token: string,
        newPassword: string
    ): Promise<ResetPasswordResponse> {
        const request: ResetPasswordRequest = {
            resetToken: token,
            newPassword,
        };

        const response = await fetch(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
            method: 'POST',
            headers: defaultHeaders,
            body: JSON.stringify(request),
        });

        return handleResponse<ResetPasswordResponse>(response);
    },

    /**
     * Request password reset email
     */
    async forgotPassword(email: string): Promise<void> {
        const response = await fetch(
            `${API_ENDPOINTS.AUTH.FORGOT_PASSWORD}?email=${encodeURIComponent(email)}`,
            {
                method: 'POST',
                headers: defaultHeaders,
            }
        );

        return handleResponse<void>(response);
    },
};