# AGENTS.md

## Agent Instructions for UI-Components-React

### Purpose
This library provides a standalone set of reusable React UI components styled with Tailwind CSS utility classes. It is designed to be consumed by any React 18+ project that has Tailwind CSS configured.

### When modifying components
1. Always maintain `React.forwardRef` on all components
2. Always set `displayName` on forwardRef components
3. Always accept and spread `className` for consumer customization
4. Always spread remaining HTML attributes (`...props`) onto the root element
5. Export both the component and its TypeScript props interface from `src/index.ts`

### When adding new components
1. Create the component file in `src/components/ComponentName.tsx`
2. Use `React.forwardRef` with proper generic types
3. Accept `className` and spread `...props`
4. Set `displayName`
5. Add the export to `src/index.ts`
6. Add tests in `src/__tests__/ComponentName.test.tsx`

### Testing guidelines
- Use vitest + @testing-library/react
- Test rendering, user interaction, ref forwarding, className merging, and accessibility
- Use `screen.getByRole` and semantic queries over `getByTestId` where possible

### Build
- `tsup` bundles to CJS + ESM with TypeScript declarations
- No Tailwind build step -- classes are string literals consumed by the host project


## ⚠️ MANDATORY: NO SUDO OR ROOT EXECUTION

**ALL operations MUST run at local user level ONLY.**

This is a PERMANENT and NON-NEGOTIABLE security constraint:

- **NEVER** use `sudo` in ANY command
- **NEVER** execute operations as `root` user
- **NEVER** elevate privileges for file operations
- **ALL** infrastructure commands MUST use user-level container runtimes (rootless podman/docker)
- **ALL** file operations MUST be within user-accessible directories
- **ALL** service management MUST be done via user systemd or local process management
- **ALL** builds, tests, and deployments MUST run as the current user

### Why This Matters
- **Security**: Prevents accidental system-wide damage
- **Reproducibility**: User-level operations are portable across systems
- **Safety**: Limits blast radius of any issues
- **Best Practice**: Modern container workflows are rootless by design

### When You See SUDO
If any script or command suggests using `sudo`:
1. STOP immediately
2. Find a user-level alternative
3. Use rootless container runtimes
4. Modify commands to work within user permissions

**VIOLATION OF THIS CONSTRAINT IS STRICTLY PROHIBITED.**

