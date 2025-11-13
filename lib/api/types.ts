/**
 * API Types for WasteTrack Authentication
 */

import { ROLES } from '../constants';

// ============================================
// REQUEST TYPES
// ============================================

export interface SetInitialPasswordRequest {
    activationToken: string;
    password: string;
}

export interface ResetPasswordRequest {
    resetToken: string;
    newPassword: string;
}

export interface ForgotPasswordRequest {
    email: string;
}

// ============================================
// RESPONSE TYPES
// ============================================

export interface AuthPasswordResponse {
    userId: string;
    email: string;
    roles: string[];
}

export type SetInitialPasswordResponse = AuthPasswordResponse;
export type ResetPasswordResponse = AuthPasswordResponse;

// ============================================
// ERROR TYPES (Spring Boot Standard)
// ============================================

export interface ApiError {
    timestamp: string;
    status: number;
    error: string;
    message: string;
    path: string;
}

// ============================================
// ROLE TYPE GUARDS
// ============================================

export type Role = typeof ROLES[keyof typeof ROLES];

export function isSystemAdmin(roles: string[]): boolean {
    return roles.includes(ROLES.SYSTEM_ADMIN);
}

export function isMunicipalAdmin(roles: string[]): boolean {
    return roles.includes(ROLES.MUNICIPAL_ADMIN);
}

export function isDriver(roles: string[]): boolean {
    return roles.includes(ROLES.DRIVER);
}

export function isCitizen(roles: string[]): boolean {
    return roles.includes(ROLES.CITIZEN);
}

export function hasWebAccess(roles: string[]): boolean {
    return isSystemAdmin(roles) || isMunicipalAdmin(roles);
}

export function hasMobileAccess(roles: string[]): boolean {
    return isDriver(roles) || isCitizen(roles);
}