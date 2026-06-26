import React from 'react';

/** Visual style variant for the Button component. */
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
/** Size preset for the Button component. */
type ButtonSize = 'sm' | 'md' | 'lg';
/**
 * Props for the Button component.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style variant (default: 'primary'). */
    variant?: ButtonVariant;
    /** Size preset (default: 'md'). */
    size?: ButtonSize;
    /** Shows a spinner and disables the button when true. */
    loading?: boolean;
}
/**
 * Multi-variant button with size presets, loading state with spinner,
 * focus ring, and dark mode support.
 */
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

/**
 * Container card with rounded border, shadow, and dark mode support.
 * Compose with CardHeader, CardTitle, CardDescription, CardContent, and CardFooter.
 */
declare const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
/** Header section of a Card with vertical spacing and padding. */
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
/** Title heading within a CardHeader. */
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
/** Descriptive subtitle text within a CardHeader. */
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
/** Main content area of a Card with horizontal padding. */
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
/** Footer area of a Card with horizontal flex layout. */
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

/**
 * Props for the Input component.
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Optional label displayed above the input. */
    label?: string;
    /** Error message displayed below the input; also applies error styling. */
    error?: string;
    /** Optional icon rendered inside the input on the left. */
    icon?: React.ReactNode;
}
/**
 * Styled text input with optional label, leading icon, and error message.
 * Supports dark mode and all standard HTML input attributes.
 */
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

/** Visual style variant for the Badge component. */
type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';
/**
 * Props for the Badge component.
 */
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Visual style variant (default: 'default'). */
    variant?: BadgeVariant;
}
/**
 * Inline badge label with color-coded variants for status indicators,
 * tags, and category labels. Supports dark mode.
 */
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;

/**
 * Represents a single option within a Select dropdown.
 */
interface SelectOption {
    value: string;
    label: string;
}
/**
 * Props for the Select component.
 */
interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    /** Called with the new value when the selection changes. */
    onChange?: (value: string) => void;
    /** Alternative callback name for value changes (same behavior as onChange). */
    onValueChange?: (value: string) => void;
    /** Array of options; renders option elements automatically. */
    options?: SelectOption[];
    /** Optional label displayed above the select. */
    label?: string;
    /** Error message displayed below the select; also applies error styling. */
    error?: string;
}
/**
 * Styled dropdown select with optional label, error message, and custom
 * chevron indicator. Accepts options as a prop array or as children.
 */
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;

/**
 * Props for the Switch component.
 */
interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
    /** Whether the switch is in the on position. */
    checked?: boolean;
    /** Called with the new checked state when toggled. */
    onCheckedChange?: (checked: boolean) => void;
}
/**
 * Toggle switch control with accessible role="switch" and animated knob.
 * Supports disabled state and dark mode.
 */
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;

/**
 * Props for the Tabs root component.
 */
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Initial active tab value for uncontrolled mode. */
    defaultValue?: string;
    /** Active tab value for controlled mode. */
    value?: string;
    /** Called when the active tab changes. */
    onValueChange?: (value: string) => void;
}
/**
 * Root container for a tabbed interface. Supports both controlled and
 * uncontrolled modes. Compose with TabsList, TabsTrigger, and TabsContent.
 */
declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
/** Props for the TabsList component. */
interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
}
/** Horizontal container for TabsTrigger buttons with a shared background. */
declare const TabsList: React.ForwardRefExoticComponent<TabsListProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Props for the TabsTrigger component.
 */
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Value that identifies this tab; matched against the active tab value. */
    value: string;
}
/** Button that activates its associated TabsContent panel when clicked. */
declare const TabsTrigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>;
/**
 * Props for the TabsContent component.
 */
interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Value that identifies this panel; rendered only when it matches the active tab. */
    value: string;
}
/** Panel that renders its children only when its value matches the active tab. */
declare const TabsContent: React.ForwardRefExoticComponent<TabsContentProps & React.RefAttributes<HTMLDivElement>>;

/**
 * Props for the Progress component.
 */
interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Current progress value. */
    value: number;
    /** Maximum value (default: 100). */
    max?: number;
    /** Whether to show a percentage label above the bar. */
    showLabel?: boolean;
}
/**
 * Horizontal progress bar with optional percentage label. Uses an
 * ARIA progressbar role for accessibility.
 */
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;

/**
 * Props for the Textarea component.
 */
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Optional label displayed above the textarea. */
    label?: string;
    /** Error message displayed below the textarea; also applies error styling. */
    error?: string;
}
/**
 * Styled multi-line text input with optional label and error message.
 * Supports dark mode and all standard HTML textarea attributes.
 */
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

/** Size preset for the Avatar component. */
type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
/** Online presence indicator status. */
type PresenceStatus = 'online' | 'away' | 'busy' | 'offline';
/**
 * Props for the Avatar component.
 */
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** User's display name (used for initials fallback and alt text). */
    name: string;
    /** Size preset (default: 'md'). */
    size?: AvatarSize;
    /** Optional image URL; falls back to initials when omitted. */
    imageUrl?: string;
    /** Optional presence indicator dot displayed at the bottom-right corner. */
    presence?: PresenceStatus;
}
/**
 * Circular avatar displaying a user's photo or generated initials.
 * Supports multiple sizes and an optional colored presence indicator dot.
 */
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;

/** Size preset for the LoadingSpinner component. */
type SpinnerSize = 'sm' | 'md' | 'lg';
/**
 * Props for the LoadingSpinner component.
 */
interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Spinner size preset (default: 'md'). */
    size?: SpinnerSize;
    /** Optional visible label rendered below the spinner. */
    label?: string;
}
/**
 * Animated circular spinner with an accessible "Loading..." screen-reader label.
 * Optionally displays a visible text label below the spinner.
 */
declare const LoadingSpinner: React.ForwardRefExoticComponent<LoadingSpinnerProps & React.RefAttributes<HTMLDivElement>>;

/**
 * Props for the EmptyState component.
 */
interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Heading text for the empty state. */
    title: string;
    /** Optional descriptive text below the title. */
    description?: string;
    /** Optional icon or illustration rendered above the title. */
    icon?: React.ReactNode;
    /** Optional action element (e.g., a button) rendered below the description. */
    action?: React.ReactNode;
}
/**
 * Centered placeholder for views with no content. Displays an optional icon,
 * title, description, and call-to-action element.
 */
declare const EmptyState: React.ForwardRefExoticComponent<EmptyStateProps & React.RefAttributes<HTMLDivElement>>;

/**
 * Props for the ErrorBoundary component.
 */
interface ErrorBoundaryProps {
    /** Child components to render while no error has been caught. */
    children: React.ReactNode;
    /** Custom fallback UI to render when an error is caught. */
    fallback?: React.ReactNode;
    /** Callback invoked when an error is caught, receiving the error and component stack. */
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
    /** Optional CSS class applied to the default error alert container. */
    className?: string;
}
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}
/**
 * React class component that catches JavaScript errors in its child tree and
 * renders a fallback UI instead of crashing. Supports a custom fallback prop
 * and an onError callback for error reporting.
 */
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
