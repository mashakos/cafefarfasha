import {CodeblockTina} from '~/components/codeblockTina';
import { Code } from '~/components/code';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Link } from '~/components/link';
import { TinaLink } from '~/components/link/tinalink.jsx';
import { List, ListItem } from '~/components/list';
import { Text } from '~/components/text';
import { Children } from 'react';
import styles from './dessert-markdown.module.css';
import { Link as RouterLink } from '@remix-run/react';

const DrinkHeadingLink = ({ id }) => {
  return (
    <RouterLink className={styles.headingLink} to={`#${id}`} aria-label="Link to heading">
      <Icon icon="link" />
    </RouterLink>
  );
};

const DrinkH1 = ({ children, id, ...rest }) => (
  <Heading className={styles.heading} id={id} level={2} as="h1" {...rest}>
    <DrinkHeadingLink id={id} />
    {children}
  </Heading>
);

const DrinkH2 = ({ children, id, ...rest }) => (
  <Heading className={styles.heading} id={id} level={3} as="h2" {...rest}>
    <DrinkHeadingLink id={id} />
    {children}
  </Heading>
);

const DrinkH3 = ({ children, id, ...rest }) => (
  <Heading className={styles.heading} id={id} level={4} as="h3" {...rest}>
    <DrinkHeadingLink id={id} />
    {children}
  </Heading>
);

const DrinkH4 = ({ children, id, ...rest }) => (
  <Heading className={styles.heading} id={id} level={5} as="h4" {...rest}>
    <DrinkHeadingLink id={id} />
    {children}
  </Heading>
);

const DrinkParagraph = ({ children, ...rest }) => {
  const hasSingleChild = Children.count(children) === 1;
  const firstChild = Children.toArray(children)[0];

  // Prevent `img` being wrapped in `p`
  if (hasSingleChild && firstChild.type === DrinkImage) {
    return children;
  }

  return (
    <Text className={styles.paragraph} size="l" as="p" {...rest}>
      {children}
    </Text>
  );
};

const DrinkLink = ({ ...props }) => <Link {...props} />;

const DrinkTinaLink = ({ ...props }) => <TinaLink {...props} />;

const DrinkUl = props => {
  return <List className={styles.list} {...props} />;
};

const DrinkOl = props => {
  return <List className={styles.list} ordered {...props} />;
};

const DrinkLi = ({ children, ...props }) => {
  return <ListItem {...props}>{children}</ListItem>;
};

const DrinkCodeBlock = props => {
  return (
    <div className={styles.pre}>
      <CodeblockTina {...props} />
    </div>
  );
};

const DrinkCode = ({ children, ...rest }) => (
  <code className={styles.code} {...rest}>
    {children}
  </code>
);

const DrinkPre = props => {
  return (
    <div className={styles.pre}>
      <Code {...props} />
    </div>
  );
};

const DrinkBlockquote = props => {
  return <blockquote className={styles.blockquote} {...props} />;
};

const DrinkHr = props => {
  return <hr className={styles.hr} {...props} />;
};

const DrinkStrong = props => {
  return <strong className={styles.strong} {...props} />;
};

// changed src to url
// in DrinkImage:
// const DrinkImage = ({ src, url, alt, width, height, ...rest }) => {
//   const DrinkImage = ({ url, url, alt, width, height, ...rest }) => {
//     src={src}
//     src={url}

const DrinkImage = ({ url, alt, width, height, ...rest }) => {
  console.log(url);
  return (
    <img
      className={styles.image}
      src={url}
      loading="lazy"
      alt={alt}
      width={width}
      height={height}
      {...rest}
    />
  );
};

const Embed = ({ src }) => {
  return (
    <div className={styles.embed}>
      <iframe src={src} loading="lazy" title="Embed" />
    </div>
  );
};

export const dessertMarkdown = {
  h1: DrinkH1,
  h2: DrinkH2,
  h3: DrinkH3,
  h4: DrinkH4,
  p: DrinkParagraph,
  a: DrinkTinaLink,
  ul: DrinkUl,
  ol: DrinkOl,
  lic: DrinkLi,
  pre: DrinkPre,
  code_block: DrinkCodeBlock,
  code: DrinkCode,
  blockquote: DrinkBlockquote,
  hr: DrinkHr,
  img: DrinkImage,
  strong: DrinkStrong,
  Embed,
};
