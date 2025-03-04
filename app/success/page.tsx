"use client";
import React from 'react';
import styles from "./success.module.scss";
import Link from 'next/link'


export default function Success() {
    return (
        <div className={styles.success}>
            <h2>Thank you</h2>
            <p>Your information was submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai.</p>
            <Link href="/">
                <button>Go Back to Homepage</button>
            </Link>
        </div>

    )
}