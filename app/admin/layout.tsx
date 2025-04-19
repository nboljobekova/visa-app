import AdminPage from "./page";
import NavBarComponent from "@/components/NavBar/NavBar";
import styles from "./layout.module.scss"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.admin}>
      <NavBarComponent />
      <AdminPage />
    </div>
  );
}
