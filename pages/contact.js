import { translate } from "react-i18next";
import i18n from "../i18n";
import i18nConfig from "../i18nConfig";

import Layout from "../components/Layout";
import Contact from "../components/Contact";

import "../scss/app.scss";

const ContactPage = () => (
  <Layout title="Projects" currentPage="/projects">
    <Contact />
  </Layout>
);

const Extended = translate(i18nConfig.ns, { i18n, wait: process.browser })(
  ContactPage
);

Extended.getInitialProps = async ({ req }) =>
  req && !process.browser ? i18n.getInitialProps(req, i18nConfig.ns) : {};

export default Extended;