// src/components/Button.tsx
import React from "react";

// src/lib/utils.ts
function cn(...classes) {
  return classes.filter((c) => typeof c === "string" && c.length > 0).join(" ");
}

// src/components/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var variantClasses = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
  outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
  ghost: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white",
  destructive: "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl"
};
var sizeClasses = {
  sm: "h-9 rounded-md px-3 text-sm",
  md: "h-10 px-4 py-2 text-sm",
  lg: "h-11 rounded-md px-8 text-base"
};
var baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
var Button = React.forwardRef(
  ({ className, variant = "primary", size = "md", loading, children, disabled, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        className: cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        ),
        ref,
        disabled: disabled || loading,
        ...props,
        children: [
          loading && /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "mr-2 h-4 w-4 animate-spin",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "data-testid": "loading-spinner",
              children: [
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ]
            }
          ),
          children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Card.tsx
import React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "h3",
  {
    ref,
    className: cn(
      "font-semibold leading-none tracking-tight text-gray-900 dark:text-white",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "p",
  {
    ref,
    className: cn("text-sm text-gray-600 dark:text-gray-400", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/Input.tsx
import React3 from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Input = React3.forwardRef(
  ({ className, type, label, error, icon, ...props }, ref) => {
    return /* @__PURE__ */ jsxs2("div", { className: "space-y-2", children: [
      label && /* @__PURE__ */ jsx3("label", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: label }),
      /* @__PURE__ */ jsxs2("div", { className: "relative", children: [
        icon && /* @__PURE__ */ jsx3("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", children: icon }),
        /* @__PURE__ */ jsx3(
          "input",
          {
            type,
            className: cn(
              "flex h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:ring-offset-gray-800 dark:placeholder:text-gray-400 dark:focus-visible:ring-blue-400",
              icon && "pl-10",
              error && "border-red-500 focus-visible:ring-red-500",
              className
            ),
            ref,
            ...props
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx3("p", { className: "text-sm text-red-600 dark:text-red-400", children: error })
    ] });
  }
);
Input.displayName = "Input";

// src/components/Badge.tsx
import React4 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var variantClasses2 = {
  default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  secondary: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  destructive: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  outline: "border border-gray-300 text-gray-800 bg-transparent dark:border-gray-600 dark:text-gray-300"
};
var baseClasses2 = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
var Badge = React4.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return /* @__PURE__ */ jsx4(
      "span",
      {
        ref,
        className: cn(baseClasses2, variantClasses2[variant], className),
        ...props
      }
    );
  }
);
Badge.displayName = "Badge";

// src/components/Select.tsx
import React5 from "react";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var Select = React5.forwardRef(
  ({ className, children, options, onChange, onValueChange, label, error, ...props }, ref) => {
    const handleChange = (e) => {
      const newValue = e.target.value;
      onChange?.(newValue);
      onValueChange?.(newValue);
    };
    const optionsChildren = options?.map((option) => /* @__PURE__ */ jsx5("option", { value: option.value, children: option.label }, option.value));
    return /* @__PURE__ */ jsxs3("div", { className: "space-y-2", children: [
      label && /* @__PURE__ */ jsx5("label", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: label }),
      /* @__PURE__ */ jsxs3("div", { className: "relative", children: [
        /* @__PURE__ */ jsx5(
          "select",
          {
            ref,
            onChange: handleChange,
            className: cn(
              "w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              "pr-8 appearance-none cursor-pointer text-sm",
              "text-gray-900",
              "dark:bg-gray-800 dark:border-gray-600 dark:text-white",
              "disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-red-500 focus:ring-red-500",
              className
            ),
            ...props,
            children: options ? optionsChildren : children
          }
        ),
        /* @__PURE__ */ jsx5("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none", children: /* @__PURE__ */ jsx5(
          "svg",
          {
            className: "h-4 w-4 text-gray-400",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx5(
              "path",
              {
                fillRule: "evenodd",
                d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
                clipRule: "evenodd"
              }
            )
          }
        ) })
      ] }),
      error && /* @__PURE__ */ jsx5("p", { className: "text-sm text-red-600 dark:text-red-400", children: error })
    ] });
  }
);
Select.displayName = "Select";

// src/components/Switch.tsx
import React6 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Switch = React6.forwardRef(
  ({ className, checked = false, onCheckedChange, disabled, ...props }, ref) => {
    const handleToggle = () => {
      if (!disabled) {
        onCheckedChange?.(!checked);
      }
    };
    return /* @__PURE__ */ jsx6(
      "button",
      {
        type: "button",
        role: "switch",
        "aria-checked": checked,
        ref,
        disabled,
        onClick: handleToggle,
        className: cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          checked ? "bg-blue-600 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-700",
          disabled && "opacity-50 cursor-not-allowed",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsx6(
          "span",
          {
            className: cn(
              "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
              checked ? "translate-x-6" : "translate-x-1"
            )
          }
        )
      }
    );
  }
);
Switch.displayName = "Switch";

// src/components/Tabs.tsx
import React7 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var TabsContext = React7.createContext({});
var Tabs = React7.forwardRef(
  ({ className, defaultValue, value: controlledValue, onValueChange, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React7.useState(defaultValue ?? "");
    const isControlled = controlledValue !== void 0;
    const currentValue = isControlled ? controlledValue : internalValue;
    const handleValueChange = React7.useCallback(
      (newValue) => {
        if (!isControlled) {
          setInternalValue(newValue);
        }
        onValueChange?.(newValue);
      },
      [isControlled, onValueChange]
    );
    return /* @__PURE__ */ jsx7(TabsContext.Provider, { value: { value: currentValue, onValueChange: handleValueChange }, children: /* @__PURE__ */ jsx7("div", { ref, className, ...props, children }) });
  }
);
Tabs.displayName = "Tabs";
var TabsList = React7.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx7(
    "div",
    {
      ref,
      role: "tablist",
      className: cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 p-1 text-gray-600 dark:text-gray-400",
        className
      ),
      ...props,
      children
    }
  )
);
TabsList.displayName = "TabsList";
var TabsTrigger = React7.forwardRef(
  ({ className, value, children, onClick, ...props }, ref) => {
    const context = React7.useContext(TabsContext);
    const isActive = context.value === value;
    const handleClick = (e) => {
      context.onValueChange?.(value);
      onClick?.(e);
    };
    return /* @__PURE__ */ jsx7(
      "button",
      {
        ref,
        role: "tab",
        "aria-selected": isActive,
        "data-state": isActive ? "active" : "inactive",
        className: cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          isActive ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
          className
        ),
        onClick: handleClick,
        ...props,
        children
      }
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";
var TabsContent = React7.forwardRef(
  ({ className, value, children, ...props }, ref) => {
    const context = React7.useContext(TabsContext);
    const isActive = context.value === value;
    if (!isActive) return null;
    return /* @__PURE__ */ jsx7(
      "div",
      {
        ref,
        role: "tabpanel",
        "data-state": isActive ? "active" : "inactive",
        className: cn("mt-2", className),
        ...props,
        children
      }
    );
  }
);
TabsContent.displayName = "TabsContent";

// src/components/Progress.tsx
import React8 from "react";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var Progress = React8.forwardRef(
  ({ className, value, max = 100, showLabel = false, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, value / max * 100));
    return /* @__PURE__ */ jsxs4("div", { ref, className: cn("w-full", className), ...props, children: [
      showLabel && /* @__PURE__ */ jsxs4("div", { className: "flex justify-between text-sm mb-1", children: [
        /* @__PURE__ */ jsx8("span", { children: "Progress" }),
        /* @__PURE__ */ jsxs4("span", { children: [
          Math.round(percentage),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx8(
        "div",
        {
          className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2",
          role: "progressbar",
          "aria-valuenow": value,
          "aria-valuemin": 0,
          "aria-valuemax": max,
          children: /* @__PURE__ */ jsx8(
            "div",
            {
              className: "bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out",
              style: { width: `${percentage}%` }
            }
          )
        }
      )
    ] });
  }
);
Progress.displayName = "Progress";

// src/components/Textarea.tsx
import React9 from "react";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
var Textarea = React9.forwardRef(
  ({ className, label, error, disabled, ...props }, ref) => {
    return /* @__PURE__ */ jsxs5("div", { className: "space-y-2", children: [
      label && /* @__PURE__ */ jsx9("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: label }),
      /* @__PURE__ */ jsx9(
        "textarea",
        {
          ref,
          disabled,
          className: cn(
            "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            "bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm",
            "placeholder:text-gray-500 dark:placeholder:text-gray-400",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus:ring-red-500",
            className
          ),
          ...props
        }
      ),
      error && /* @__PURE__ */ jsx9("p", { className: "text-sm text-red-600 dark:text-red-400", children: error })
    ] });
  }
);
Textarea.displayName = "Textarea";

// src/components/Avatar.tsx
import React10 from "react";
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
var sizeClasses2 = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg"
};
var presenceClasses = {
  online: "bg-green-500",
  away: "bg-yellow-500",
  busy: "bg-red-500",
  offline: "bg-gray-400"
};
var presenceSizeClasses = {
  sm: "h-2 w-2 ring-1",
  md: "h-2.5 w-2.5 ring-2",
  lg: "h-3 w-3 ring-2",
  xl: "h-3.5 w-3.5 ring-2"
};
function getInitials(name) {
  return name.split(" ").map((part) => part.charAt(0)).join("").substring(0, 2).toUpperCase();
}
var Avatar = React10.forwardRef(
  ({ name, size = "md", imageUrl, presence, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs6(
      "div",
      {
        ref,
        className: cn(
          "relative inline-flex items-center justify-center rounded-full bg-blue-100 font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200",
          sizeClasses2[size],
          className
        ),
        ...props,
        children: [
          imageUrl ? /* @__PURE__ */ jsx10(
            "img",
            {
              src: imageUrl,
              alt: name,
              className: "h-full w-full rounded-full object-cover"
            }
          ) : /* @__PURE__ */ jsx10("span", { children: getInitials(name) }),
          presence && /* @__PURE__ */ jsx10(
            "span",
            {
              className: cn(
                "absolute bottom-0 right-0 rounded-full ring-white dark:ring-gray-900",
                presenceClasses[presence],
                presenceSizeClasses[size]
              )
            }
          )
        ]
      }
    );
  }
);
Avatar.displayName = "Avatar";

// src/components/LoadingSpinner.tsx
import React11 from "react";
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var sizeClasses3 = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-3"
};
var LoadingSpinner = React11.forwardRef(
  ({ size = "md", label, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs7(
      "div",
      {
        ref,
        role: "status",
        className: cn("flex flex-col items-center justify-center gap-2", className),
        ...props,
        children: [
          /* @__PURE__ */ jsx11(
            "div",
            {
              className: cn(
                "animate-spin rounded-full border-blue-600 border-t-transparent",
                sizeClasses3[size]
              )
            }
          ),
          label && /* @__PURE__ */ jsx11("span", { className: "text-sm text-gray-500 dark:text-gray-400", children: label }),
          /* @__PURE__ */ jsx11("span", { className: "sr-only", children: "Loading..." })
        ]
      }
    );
  }
);
LoadingSpinner.displayName = "LoadingSpinner";

// src/components/EmptyState.tsx
import React12 from "react";
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
var EmptyState = React12.forwardRef(
  ({ title, description, icon, action, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs8(
      "div",
      {
        ref,
        className: cn(
          "flex flex-col items-center justify-center py-12 text-center",
          className
        ),
        ...props,
        children: [
          icon && /* @__PURE__ */ jsx12("div", { className: "mb-4 text-gray-400 dark:text-gray-500", children: icon }),
          /* @__PURE__ */ jsx12("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: title }),
          description && /* @__PURE__ */ jsx12("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: description }),
          action && /* @__PURE__ */ jsx12("div", { className: "mt-4", children: action })
        ]
      }
    );
  }
);
EmptyState.displayName = "EmptyState";

// src/components/ErrorBoundary.tsx
import React13 from "react";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
var ErrorBoundary = class extends React13.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    this.props.onError?.(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return /* @__PURE__ */ jsxs9(
        "div",
        {
          className: cn(
            "rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950",
            this.props.className
          ),
          role: "alert",
          children: [
            /* @__PURE__ */ jsx13("h3", { className: "text-sm font-semibold text-red-800 dark:text-red-200", children: "Something went wrong" }),
            /* @__PURE__ */ jsx13("p", { className: "mt-1 text-sm text-red-700 dark:text-red-300", children: this.state.error?.message || "An unexpected error occurred" })
          ]
        }
      );
    }
    return this.props.children;
  }
};
export {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  EmptyState,
  ErrorBoundary,
  Input,
  LoadingSpinner,
  Progress,
  Select,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  cn
};
