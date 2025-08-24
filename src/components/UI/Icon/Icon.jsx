import React, { useState } from "react";
import spriteUrl from "assets/svg/icons.svg";

export default function Icon({ name, hoverName, className = "", width = 24, height = 24, title }) {
    const [isHovered, setIsHovered] = useState(false);

    const hasHover = Boolean(hoverName);

    return (
        <div
            className={`icon-wrapper ${className}`}
            style={{ aspectRatio: width / height, width: "auto", height: "inherit" }}
            onMouseEnter={() => hasHover && setIsHovered(true)}
            onMouseLeave={() => hasHover && setIsHovered(false)}>
            <svg
                className={`icon-layer ${!hasHover || !isHovered ? "visible" : "hidden"}`}
                style={{ width: "inherit", height: "inherit" }}
                aria-hidden={title ? "false" : "true"}
                role="img">
                {title && <title>{title}</title>}
                <use href={`${spriteUrl}#${name}`} />
            </svg>

            {hasHover && (
                <svg
                    className={`icon-layer ${isHovered ? "visible" : "hidden"}`}
                    width={width}
                    height={height}
                    aria-hidden="true">
                    <use href={`${spriteUrl}#${hoverName}`} />
                </svg>
            )}
        </div>
    );
}
