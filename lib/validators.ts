/**
 * Password validation schemas and utilities using Zod
 */

import { z } from 'zod';
import { PASSWORD_RULES, PASSWORD_ERROR_MESSAGES } from './constants';

// ============================================
// PASSWORD VALIDATION SCHEMA
// ============================================

export const passwordSchema = z
    .string()
    .min(PASSWORD_RULES.MIN_LENGTH, PASSWORD_ERROR_MESSAGES.MIN_LENGTH)
    .regex(/[A-Z]/, PASSWORD_ERROR_MESSAGES.UPPERCASE)
    .regex(/[a-z]/, PASSWORD_ERROR_MESSAGES.LOWERCASE)
    .regex(/[0-9]/, PASSWORD_ERROR_MESSAGES.NUMBER)
    .regex(
        /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/,
        PASSWORD_ERROR_MESSAGES.SPECIAL_CHAR
    );

// ============================================
// FORM SCHEMAS
// ============================================

export const passwordFormSchema = z
    .object({
        password: passwordSchema,
        confirmPassword: z.string().min(1, PASSWORD_ERROR_MESSAGES.REQUIRED),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: PASSWORD_ERROR_MESSAGES.NO_MATCH,
        path: ['confirmPassword'],
    });

export type PasswordFormData = z.infer<typeof passwordFormSchema>;

// ============================================
// VALIDATION UTILITIES
// ============================================

export function validatePassword(password: string): {
    isValid: boolean;
    errors: string[];
} {
    const errors: string[] = [];

    if (password.length < PASSWORD_RULES.MIN_LENGTH) {
        errors.push(PASSWORD_ERROR_MESSAGES.MIN_LENGTH);
    }

    if (PASSWORD_RULES.REQUIRE_UPPERCASE && !/[A-Z]/.test(password)) {
        errors.push(PASSWORD_ERROR_MESSAGES.UPPERCASE);
    }

    if (PASSWORD_RULES.REQUIRE_LOWERCASE && !/[a-z]/.test(password)) {
        errors.push(PASSWORD_ERROR_MESSAGES.LOWERCASE);
    }

    if (PASSWORD_RULES.REQUIRE_NUMBER && !/[0-9]/.test(password)) {
        errors.push(PASSWORD_ERROR_MESSAGES.NUMBER);
    }

    if (
        PASSWORD_RULES.REQUIRE_SPECIAL_CHAR &&
        !/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)
    ) {
        errors.push(PASSWORD_ERROR_MESSAGES.SPECIAL_CHAR);
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
}

export function getPasswordStrength(password: string): {
    strength: 'weak' | 'medium' | 'strong';
    score: number;
} {
    let score = 0;

    if (password.length >= PASSWORD_RULES.MIN_LENGTH) score += 1;
    if (password.length >= 12) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) score += 1;

    let strength: 'weak' | 'medium' | 'strong';
    if (score <= 3) strength = 'weak';
    else if (score <= 5) strength = 'medium';
    else strength = 'strong';

    return { strength, score };
}