"use client";
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import styles from "./form.module.scss";

type Inputs = {
    firstname: string,
    lastname: string,
    email: string,
    linkedIn: string,
    interests: string[],
    info: string,
}


export default function FormComponent() {
    const [selected, setSelected] = useState<string[]>([])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    
    const handleSelectChange = (e: any) => {
        let value = e.target.value;
        let isSelected = selected.find((item: string) => item == value)
        setSelected(prevState => {
            return isSelected ? prevState.filter((element) => element !== value) : [...prevState, ...value]
        })
    }

    const options = [{ label: 'O-1', value: 'O-1' }, { label: 'EB-1A', value: 'EB-1A' }, { label: 'EB-2A NIW', value: 'EB-2A NIW' }, { label: 'I don\'t know', value: 'I don\'t know' }];

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input {...register("firstname", { required: true })} type='text' placeholder="First Name" />
            <span className={errors.firstname?.type === "required" ? styles.form_error : styles.form_hidden} role="alert">First name is required</span> 
            <input {...register("lastname", { required: true })} type='text' placeholder="Last Name" />
            <span className={errors.lastname?.type === "required" ? styles.form_error : styles.form_hidden} role="alert">First name is required</span>
            <input {...register("email", { required: true })} type='email' placeholder="Email" />
            <span className={errors.email?.type === "required" ? styles.form_error : styles.form_hidden} role="alert">First name is required</span>
            <input {...register("linkedIn", { required: true })} type='text' maxLength={150} placeholder="LinkedIn Profile" />
            <span className={errors.linkedIn?.type === "required" ? styles.form_error : styles.form_hidden} role="alert">First name is required</span>
            <p className={styles.form_title}>Visas of Interest</p>
            <select className={styles.form_select} {...register("interests")} onChange={handleSelectChange}>
                {options.map((option) => (
                    <option value={option.value} key={option.value}>{option.label}</option>
                ))}
            </select>
            <input type='file' accept='.pdf, .doc, .docx' />
            <input {...register("info")} type='textarea' placeholder="Additional Information" maxLength={1000} />
            <input type="submit"/>
        </form>
    )
}