import styles from "./Footer.module.css"

const Footer = () => {


  // <footer style={{ backgroundColor: "#d43030ff", padding: "10px",
                     //textAlign: "center", marginTop: "20px" }}>
  return (
    <footer className={styles.estiloGeneral}>
      <p>&copy; 2025 EzeDevelopment. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
