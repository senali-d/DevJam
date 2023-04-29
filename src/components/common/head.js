import Head from "next/head";
import { company } from "../../utils/typo";

const CustomHead = ({ title, content }) => {
  content = content ? content : company.name
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
