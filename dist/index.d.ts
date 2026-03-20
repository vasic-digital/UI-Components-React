import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;

interface SelectOption {
    value: string;
    label: string;
}
interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    onChange?: (value: string) => void;
    onValueChange?: (value: string) => void;
    options?: SelectOption[];
    label?: string;
    error?: string;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;

interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
}
declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const TabsList: React.ForwardRefExoticComponent<TabsListProps & React.RefAttributes<HTMLDivElement>>;
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}
declare const TabsTrigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}
declare const TabsContent: React.ForwardRefExoticComponent<TabsContentProps & React.RefAttributes<HTMLDivElement>>;

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    showLabel?: boolean;
}
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
type PresenceStatus = 'online' | 'away' | 'busy' | 'offline';
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    size?: AvatarSize;
    imageUrl?: string;
    presence?: PresenceStatus;
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;

type SpinnerSize = 'sm' | 'md' | 'lg';
interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: SpinnerSize;
    label?: string;
}
declare const LoadingSpinner: React.ForwardRefExoticComponent<LoadingSpinnerProps & React.RefAttributes<HTMLDivElement>>;

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    action?: React.ReactNode;
}
declare const EmptyState: React.ForwardRefExoticComponent<EmptyStateProps & React.RefAttributes<HTMLDivElement>>;

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
    className?: string;
}
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}
declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): React.ReactNode;
}

/**
 * Utility function for merging CSS class names.
 * Filters out falsy values and joins remaining classes with a space.
 */
declare function cn(...classes: (string | number | boolean | undefined | null)[]): string;

export { Avatar, type AvatarProps, type AvatarSize, Badge, type BadgeProps, type BadgeVariant, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, EmptyState, type EmptyStateProps, ErrorBoundary, type ErrorBoundaryProps, Input, type InputProps, LoadingSpinner, type LoadingSpinnerProps, type PresenceStatus, Progress, type ProgressProps, Select, type SelectOption, type SelectProps, type SpinnerSize, Switch, type SwitchProps, Tabs, TabsContent, type TabsContentProps, TabsList, type TabsListProps, type TabsProps, TabsTrigger, type TabsTriggerProps, Textarea, type TextareaProps, cn };
