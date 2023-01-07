import { NextPage } from "next";
import { ReactElement } from "react";
import DashboardLayout from "../components/layouts/dashboard.layout";
import { NextPagewithLayout } from "./_app";

const Page: NextPagewithLayout = () => {
    return (
        <>
        <h1>Dashboard</h1>
        </>
    );
};

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    );
};

export default Page;