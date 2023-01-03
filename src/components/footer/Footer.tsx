import Link from "next/link";
import { useRouter } from "next/router";
import { tableContentArray } from "../../data/tableOfContent";

import styles from "../../styles/components/Footer.module.css";

const Footer = () => {
  // get current route
  const { pathname } = useRouter();

  const prevTopic =
    tableContentArray.findIndex((item) => item.path === pathname) - 1;
  const nextTopic =
    tableContentArray.findIndex((item) => item.path === pathname) + 1;

  return (
    <footer className={styles.footerWrapper}>
      {(prevTopic >= 0 || nextTopic > 0) && (
        <div className={styles.footerNav}>
          {prevTopic >= 0 && (
            <Link
              className={styles.footerNavLink}
              href={tableContentArray[prevTopic].path}
            >
              ← {tableContentArray[prevTopic].title}
            </Link>
          )}
          {nextTopic < tableContentArray.length && (
            <Link
              className={styles.footerNavLink}
              href={tableContentArray[nextTopic].path}
            >
              {tableContentArray[nextTopic].title} →
            </Link>
          )}
        </div>
      )}

      <section className={styles.footerSection}>
        <Link
          className={styles.socialLink}
          href="https://www.linkedin.com/in/vishav-ranta-964964194/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </Link>
        <Link
          className={styles.socialLink}
          href="https://github.com/rantavishav"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
