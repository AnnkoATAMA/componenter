export function getComponentPath(pathname: string): string[] {
    return pathname.replace(/^\/components\/?/, '').split('/').filter(Boolean);
}

export function findMatchKey(
    modules: Record<string, () => Promise<{ default: React.ComponentType<any> }>>,
    route: string
): string | undefined {
    return Object.keys(modules).find((file) =>
        file.replace('../components/', '').replace('.tsx', '').toLowerCase() === route.toLowerCase()
    );
}
