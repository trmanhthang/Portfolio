import React from "react";

export interface MenuItem {
    title: string,
    path: string,
}

export interface SocialItem {
    title: string,
    icon: React.ElementType,
    path: string
}