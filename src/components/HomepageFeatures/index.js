import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: 'Empower Your Application with Carmentis',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Seamlessly integrate the Carmentis SDK into your application and become a pivotal operator in the network.
          Enhance your app's capabilities with robust, decentralized proof storage and display solutions,
          ensuring data integrity and trust for your users.
      </>
    ),
    button_text: 'Be an Operator',
    button_link: '/guides/be-an-operator'
  },
  {
    title: 'Strengthen the Network, Host a Node',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Join the Carmentis network by hosting a node and play a crucial role in maintaining the network's resilience and decentralization.
          Contribute to a robust infrastructure that ensures data redundancy, security,
          and uninterrupted access to proofs across the internet
      </>
    ),
    button_text: 'Host a Node',
    button_link: '/guides/host-a-node'
  },
  {
    title: 'Expand Your Reach with API Integration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Expose your API endpoints and integrate your services with Carmentis to streamline workflows.
          Leverage our platform to connect your solutions with a broad network, enhancing interoperability and creating new opportunities for innovation and growth.
      </>
    ),
    button_text: 'Integrate with API',
    button_link: '/guides/integrate-with-api'
  },
];

function Feature({Svg, title, description, button_text, button_link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
        <div className="text--center padding-horiz--md">
            <Link
                className="button button--secondary button--lg"
                to={button_link}>
                {button_text}
            </Link>
        </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
