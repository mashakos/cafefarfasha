import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useParallax, useScrollToHash } from '~/hooks';
import { useRef, useState, useEffect } from 'react';
import { clamp } from '~/utils/clamp';
import { formatDate } from '~/utils/date';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { ytParser } from '~/utils/ytparser.js';
import styles from './post.module.css';
import { Link as RouterLink, useLoaderData } from '@remix-run/react';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { postMarkdown } from '~/layouts/post/post-markdown.jsx';
import ReactDOM from "react-dom/client";

export const Post = ({ children, timecode }) => {
  const scrollToHash = useScrollToHash();
  const imageRef = useRef();
  const [dateTime, setDateTime] = useState(null);

  //Tina props and useTina for live editing
  const { props } = useLoaderData();
  const { data } = useTina(props);

  useEffect(() => {
    setDateTime(formatDate(data.post.date));
  }, [data.post.date, dateTime]);

  useParallax(0.004, value => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty('--blurOpacity', clamp(value, 0, 1));
  });

  const handleScrollIndicatorClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  // const placeholder = data.post.banner_placeholder;
  /*
  * Cloudflare image transform
  * make sure allow from other origins is checked!
  * for details see: https://developers.cloudflare.com/images/transform-images/transform-via-url/
  */
  const placeholder = `/cdn-cgi/image/width=25,quality=75/${data.post.banner}`;

  const tinaComponents = {
      // The "YoutubeEmbed" component renders YouTube urls.
    YoutubeEmbed: (props) => {
      let ytURL = props.url ? `https://www.youtube.com/embed/${ytParser(props.url)}` : "";
      return (
        <>
          <iframe
            width="740"
            height="416"
            src={ytURL}
            className={styles.ytEmbed}
            title="YouTube video player"
            allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share" allowFullScreen>
          </iframe>
        </>
      );
    },
    // fizzyMarkdown component styles MD tags as html elements
    ...postMarkdown,
  };

  return (
    <article className={styles.post}>
      <Section>
        {data.post.banner && (
          <div className={styles.banner} ref={imageRef}>
            <div className={styles.bannerImage}>
              <Image role="presentation" src={data.post.banner} placeholder={placeholder} alt="" />
            </div>
            <div className={styles.bannerImageBlur}>
              <Image
                role="presentation"
                src={placeholder}
                placeholder={placeholder}
                alt=""
              />
            </div>
          </div>
        )}
        <header className={styles.header}>
          <div className={styles.headerText}>
            <Transition in timeout={msToNum(tokens.base.durationM)}>
              {({ visible, nodeRef }) => (
                <div className={styles.date} ref={nodeRef}>
                  <Divider notchWidth="64px" notchHeight="8px" collapsed={!visible} />
                  <Text className={styles.dateText}
                        data-visible={visible}
                        data-tina-field={tinaField(data.post, "date")}
                  >
                    {dateTime}
                  </Text>
                </div>
              )}
            </Transition>
            <Heading level={2} as="h1"
                     className={styles.title}
                     aria-label={data.post.title}
                     data-tina-field={tinaField(data.post, "title")}>
              {data.post.title.split(' ').map((word, index) => (
                <span className={styles.titleWordWrapper} key={`${word}-${index}`}>
                  <span
                    className={styles.titleWord}
                    style={cssProps({ delay: numToMs(index * 100 + 100) })}
                  >
                    {word}
                    {index !== data.post.title.split(' ').length - 1 ? ' ' : ''}
                  </span>
                </span>
              ))}
            </Heading>
            <div className={styles.details}>
              <RouterLink
                to="#postContent"
                className={styles.arrow}
                aria-label="Scroll to post content"
                onClick={handleScrollIndicatorClick}
              >
                <svg
                  aria-hidden
                  stroke="currentColor"
                  width="43"
                  height="15"
                  viewBox="0 0 43 15"
                >
                  <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
                </svg>
              </RouterLink>
              <div className={styles.timecode}>{timecode}</div>
            </div>
          </div>
        </header>
      </Section>
      <Section className={styles.wrapper} id="postContent" tabIndex={-1}>
        <Text as="div"
              size="l"
              className={styles.content}
              data-tina-field={tinaField(data.post, "body")}
        >
          {/*json post object for testing*/}
          {/*{JSON.stringify(data.post, null, 2)}*/}
          {/*{console.log(JSON.stringify(data.post, null, 2))}*/}
          <TinaMarkdown content={data.post.body} components={tinaComponents} />
        </Text>
      </Section>

      <Footer />
    </article>
  );
};
