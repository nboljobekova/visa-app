"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import styles from "./navbar.module.scss"

export default function NavBarComponent() {
    const pathname = usePathname()
    return (
        <div className={styles.nav}>
            <div className={styles.nav_head}>alma logo</div>
            <nav className={styles.nav_list}>
                <Link href="#" className={`${styles.nav_list_item} ${pathname === '/admin' ? `${styles.nav_list_active}` : ''}`}>Leads</Link>
                <Link href="#" className={styles.nav_list_item}>Settings</Link>
            </nav>
            <div className={styles.nav_foot}>
                <span className={styles.nav_foot_icon}>A</span>
                <span>Admin</span>
            </div>
        </div>
    )

}