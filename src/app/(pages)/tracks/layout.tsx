import styles from "./page.module.css";

export default function TracksLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {children}
                <footer />
            </div>
        </div>
    );
}
