import { useEffect, useState } from 'react';
import {
  Configure,
  InstantSearch,
  Highlight,
  InfiniteHits,
  SearchBox,
  useSearchBox,
  useHits,
  Index,
} from 'react-instantsearch';
import { typesenseInstantsearchAdapter } from '~/utils/typesense.js';
import { classes, cssProps, msToNum, numToMs } from '~/utils/style';
import styles from './SearchAndFilter.module.css';
import SearchAndFilter from '~/components/search/SearchAndFilter.jsx';
import { Link as RouterLink, useActionData, useNavigation } from '@remix-run/react';
import { Button } from '~/components/button/index.js';
import { Transition } from '~/components/transition';
import { Heading } from '~/components/heading/index.js';
import { Divider } from '~/components/divider/index.js';
import * as PropTypes from 'prop-types';
import { tokens } from '~/components/theme-provider/theme.js';
import { Input } from '~/components/input/index.js';
import { Section } from '~/components/section/index.js';
import { useFormInput } from '~/hooks/index.js';
import { formatDate } from '~/utils/date.js';
import { Image } from '~/components/image';
import { media } from '~/utils/style';

export const Text = ({
                       children,
                       size = 'm',
                       as: Component = 'span',
                       align = 'auto',
                       weight = 'auto',
                       secondary,
                       className,
                       ...rest
                     }) => {
  return (
    <Component
      className={classes(styles.text, className)}
      data-align={align}
      data-size={size}
      data-weight={weight}
      data-secondary={secondary}
      {...rest}
    >
      {children}
    </Component>
  );
};




function CustomHits(props) {
  const { hits } = useHits(props);

  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  //string to test whether it's an article or project
  const projectUrlFragment = "projects";

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    [
      <>
        {hits.length > 0 &&
          <>
            <div className={styles.searchGroupContainer}>
          <span className={styles.searchGroupLeftBorder}>
                  <span className={styles.searchGroupIcon}></span>
        <span className={styles.searchGroupLine}></span>

        </span>
              <Heading as='h2' level={4} className={styles.searchGroupHeading}>
                {(hits.length > 0) ? (hits[0].slug.indexOf('drinks') >= 0 ? `drinks & cocktails` : hits[0].slug.indexOf('hotbeverage') >= 0 ? `hot beverages` : `hookas & extras`) : ``}
                {/*{(hits) ? hits[0].slug.indexOf("drinks") >= 0 ? `drinks & cocktails` : hits[0].slug.indexOf("hotbeverage") >= 0 ? `hot beverages` : `hookas & extras` : `` }*/}
              </Heading>
              <span className={styles.searchGroupRightBorder}>
        <span className={styles.searchGroupIcon}></span>
                  <span className={styles.searchGroupLine}></span>
        </span>
            </div>
          </>
        }
      </>,
      hits.map((hit, index) => (
        <article
          className={styles.post}
          style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
          // style={undefined}
        >
          <div className={styles.postDetails}>
            <div className={styles.hitContainer}>
              <Image
                className={styles.hitImage}
                srcSet={`${encodeURI(hit.banner)} 350w, ${encodeURI(hit.banner)} 700w`}
                width={109}
                height={109}
                placeholder={encodeURI(hit.banner)}
                alt="Internet Explorer 7."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <div className={styles.hitTitleWrapper}>
                {/*Inside auto layout */}
                {/* Title auto layout */}
                {/* Title */}
                <div className={styles.hitTitleContainer}>
                  <Heading as="h2" level={4} className={styles.hitTitle}>
                    <Highlight attribute="title" hit={hit} />
                    {/*{hit.title}*/}
                  </Heading>
                </div>
                {/* Dots */}
                <div className={styles.hitTitleDotsContainer}>
                  {/* Dots */}
                  <div className={styles.hitTitleDots}>
                  </div>
                </div>
                {/* Price */}
                <div className={styles.hitTitlePriceContainer}>
                  <div className={styles.hitTitlePrice}>
                    <Heading as="h3" level={4}>
                      {hit.price}
                    </Heading>
                  </div>
                </div>

              </div>
              <div className={styles.hitAbstractContainer}>
                <Text size={'s'} as="p">
                  {hit.abstract &&
                    <Highlight attribute="abstract" hit={hit} />
                  }
                  {hit.description &&
                    <Highlight attribute="description" hit={hit} />
                  }
                  {/*{hit.abstract}*/}
                </Text>
              </div>
            </div>
          </div>
        </article>
      )),
    ]
  );
}


function CustomSearchBox({ queries, ...props }) {
  const {
    query,
    refine,
    clear,
    // Deprecated
    isSearchStalled,
  } = useSearchBox(props);


  const MAX_MESSAGE_LENGTH = 4096;
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();

  return (
    <Section className={styles.search}>
      <Transition unmount in={!actionData?.success} timeout={1600}>
        {({ status, nodeRef }) => (
          <Input
            required
            multiline
            className={styles.input}
            data-status={status}
            style={getDelay(tokens.base.durationS, initDelay)}
            autoComplete="off"
            label="SEARCH"
            name="search"
            type="search"
            maxLength={MAX_MESSAGE_LENGTH}
            value={query}
            onChange={event => refine(event.currentTarget.value)}
          />

          // <Button
          //       className={styles.button}
          //       key={query}
          //       onClick={() => refine(query)}
          //       // style={getDelay(tokens.base.durationM, initDelay)}
          //       // disabled={sending}
          //       // loading={sending}
          //       loadingText="Searching..."
          //       icon="search"
          //       type="button"
          //     >
          //       Look for "${query}"
          // </Button>

        )}
      </Transition>
    </Section>
  );
}


export const TextSearch = () => {
  const [searchAdapter, setSearchAdapter] = useState();

  useEffect(() => {
    setSearchAdapter(typesenseInstantsearchAdapter);
  }, []);

  if (searchAdapter) {
    return (
      <InstantSearch
        className={styles.form}
        indexName='hookah'
        searchClient={searchAdapter.searchClient}
        future={{ preserveSharedStateOnUnmount: true }}
      >
        <Configure hitsPerPage={12} />
        {/*<SearchAndFilter />*/}
        <CustomSearchBox className={styles.input} />
        <CustomHits />
      </InstantSearch>
    );
  } else {
    return <div>Loading...</div>;
  }
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
