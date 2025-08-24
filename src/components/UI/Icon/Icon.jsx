import React, { useState } from "react";
import spriteUrl from "assets/svg/icons.svg";

export default function Icon({ name, className = "", width = 24, height = 24, title }) {
    return (
        <div
            className={`icon-wrapper ${className}`}
            style={{ aspectRatio: width / height, width: "auto", height: "inherit" }}>
            <svg
                className={`icon-layer`}
                style={{ width: "inherit", height: "inherit" }}
                aria-hidden={title ? "false" : "true"}
                role="img">
                {title && <title>{title}</title>}
                <use href={`${spriteUrl}#${name}`} />
            </svg>
        </div>
    );
}
