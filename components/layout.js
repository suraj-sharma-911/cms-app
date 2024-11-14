// components/Layout.js
import React from "react";
import Header from './Header';

export default function Layout({ children }) {
    return (
        <div minH="100vh">
            <Header />
            <div p={4}>{children}</div>
        </div>
    );
}
