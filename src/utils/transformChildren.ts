import {Children, ReactNode} from "react";

export function transformChildren(children: ReactNode): ReactNode[] {
    const media: ReactNode[] = [];
    const items: ReactNode[] = Children.toArray(children);

    items.forEach((child) => {
        media.push(child)
    });

    return media;
}