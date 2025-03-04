"use client";
import Form from 'next/form';
import styles from "./form.module.scss";
import Link from 'next/link'

export default function FormComponent() {
    const handleSubmit = () => {
        console.log("Submit")
    }

    return (
        <Form action="" className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.form_input} name="firstname" type='text' placeholder="First Name" />
            <input className={styles.form_input} name="lastname" type='text' placeholder="Last Name" />
            <input className={styles.form_input} name="email" type='email' placeholder="Email" />
            <input className={styles.form_input} name="linkedIn" type='text' maxLength={150} placeholder="LinkedIn Profile" />
            <p className={styles.form_title}>Visas of Interest</p>
            <div>
                <input className={styles.form_input} name="interests" type='radio' />
                <label className={styles.form_label} htmlFor="interests">O-1</label>
            </div>
            <div>
                <input className={styles.form_input} name="interests" type='radio' />
                <label className={styles.form_label} htmlFor="interests">EB-1A</label>
            </div>
            <div>
                <input className={styles.form_input} name="interests" type='radio' />
                <label className={styles.form_label} htmlFor="interests">EB-2A NIW</label>
            </div>
            <div>
                <input className={styles.form_input} name="interests" type='radio' />
                <label className={styles.form_label} htmlFor="interests">I don't know</label>
            </div>
            <div className={styles.form_block}>
                <label className={styles.form_label} htmlFor="cv">Resume/CV Upload</label>
                <input className={styles.form_input} name="cv" type='file' placeholder="Resume/CV Upload" />
            </div>
            <input className={styles.form_input} name="info" type='textarea' placeholder="Additional Information" maxLength={1000} />
            <Link href="/success">
                <button type="submit">Submit</button>
            </Link>
        </Form>
    )
}