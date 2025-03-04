"use client";
import React from "react";
import { Table } from "antd";
import { useGetLeadsQuery } from "@/store/leads/leads.api";
import dayjs from "dayjs";
import styles from "./table.module.scss";

let localizedFormat = require("dayjs/plugin/localizedFormat");
let utc = require("dayjs/plugin/utc");

export default function TableComponent() {
    dayjs.extend(localizedFormat)
    dayjs.extend(utc)
    const { data } = useGetLeadsQuery();

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: true,
        },
        {
            title: 'Submitted',
            dataIndex: 'submitted',
            key: 'submitted',
            sorter: true,
            render: (record: string)  => dayjs(record).utc().format("L LT")
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            sorter: true,
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
            sorter: true,
        }
    ];

    return (
        <div className={styles.table}>
            <Table
                dataSource={data}
                columns={columns}
                rowKey={(record) => record.id}
            />
        </div>
    )

}