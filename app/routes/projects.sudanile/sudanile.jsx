// import sudanileInnerLarge from '~/assets/sudanile-inner-large.jpg';
import sudanileInnerPlaceholder from '~/assets/sudanile-inner-placeholder.jpg';
import sudanileInner from '~/assets/sudanile-inner.webp';

import genericBackgroundLarge from '~/assets/generic-background-large.webp';
import genericBackgroundPlaceholder from '~/assets/generic-background-placeholder.jpg';
import genericBackground from '~/assets/generic-background.webp';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { List, ListItem } from '~/components/list/index.js';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './sudanile.module.css';

import innerText from 'react-innertext';


const title = 'Sudanile News';
const description = 'Sudanile is a Sudanese electronic non-profit press organization. Sudanile upholds the highest standards of press freedom, editorial independence, and journalistic integrity. Sudanile\'s diverse team of writers weaves a rich tapestry of perspectives, reflecting the vibrant spectrum of Sudanese society.';
  '              from the ground up to serve as the most accurate reporting hub for the Sudanese public. The old platform was built in Joomla, and was beset by severe hacking and doxxing attacks that resulted in a corrupted joomla CMS build with no viable backups - save a single MySQL database dump. Further, there were a number of user experience problems to solve in the process of\n' +
  '              moving the platform to a new UX paradigm. SEO was another challenge as the platform was set to transition to an ad revenue model. The primary goals for the project were to secure the site&lsquo;s legacy content, port it over to a modern platform, overhaul the design and ensure that the site is search based, mobile first and tuned for SEO. Achievements: - Recovered the old website’s corrupted joomla database, containing more than 200,000 records over a period of 20 years. Immense undertaking requiring thorough knowledge of MySQL and PL/SQL. - Led the re-launch of the website after successful recovery of the website’s database content. - Implemented powerful site wide search via the Typesense search API. - Successfully developed and implemented custom WordPress theme, including bespoke frontend plugins and web hooks. The website now has a modern responsive UI with social media integration.';
const abstract ='Overhauling and porting Sudan\'s first online news portal, sudanile.com';
const textureLarge = 'sudanile-large.webp';
const texturePlaceholder = 'sudanile-placeholder.jpg';
const texture = 'sudanile.webp';
const texture2 = '';
const texture2Large = '';
const texture2Placeholder = '';
const roles = [
  'UX and UI Design',
  'Full Stack Development',
  'Fizzy Engine Back End Development',
  'Fizzy Engine Optimisation',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

const ProjHTML = (
  <>
    <ProjectSection padding="top">
      <ProjectSectionContent>
        <ProjectImage
          srcSet={`/static/project-assets/${texture} 375w, /static/project-assets/${textureLarge} 1920w`}
          width={375}
          height={814}
          placeholder={`/static/project-assets/${texturePlaceholder}`}
          alt="The sudanile.com homepage."
          sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
        />
      </ProjectSectionContent>
    </ProjectSection>


    <ProjectSection>
      <ProjectTextRow>
        <ProjectSectionHeading>The problem</ProjectSectionHeading>
        <ProjectSectionText>
          In 2001, Sudanile&lsquo;s founder began a project to build an entirely new platform
          from the ground up to serve as the most accurate reporting hub for the Sudanese public. The old platform was built in Joomla, and was beset by severe hacking and doxxing attacks that resulted in a corrupted joomla CMS build with no viable backups - save a single MySQL database dump. Further, there were a number of user experience problems to solve in the process of
          moving the platform to a new UX paradigm. SEO was another challenge as the platform was set to transition to an ad revenue model. The primary goals for the project were to secure the site&lsquo;s legacy content, port it over to a modern platform, overhaul the design and ensure that the site is search based, mobile first and tuned for SEO.
        </ProjectSectionText>
      </ProjectTextRow>
    </ProjectSection>
    <ProjectSection light>
      <ProjectSectionContent>
        <Image
          src={sudanileInner}
          width={940}
          height={500}
          placeholder={sudanileInnerPlaceholder}
          alt="sudanile.com inner page."
        />
        <ProjectTextRow>
          <ProjectSectionHeading>Achievements</ProjectSectionHeading>
          <ProjectSectionText>
            <List>
              <ListItem>Recovered the old website’s corrupted joomla database, containing
                more than 200,000 records over a period of 20 years. Immense
                undertaking requiring thorough knowledge of MySQL and PL/SQL</ListItem>
              <ListItem>Led the re-launch of the website after successful recovery of the
                website’s database content.</ListItem>
              <ListItem>Implemented powerful site wide search via the Typesense search API</ListItem>
              <ListItem>Successfully developed and implemented custom WordPress theme,
                including bespoke frontend plugins and web hooks. The website now has
                a modern responsive UI with social media integration.</ListItem>
            </List>
          </ProjectSectionText>
        </ProjectTextRow>
      </ProjectSectionContent>
    </ProjectSection>
  </>
);

function ProjContent() {
  return ProjHTML;
}

const bodytext =  innerText(ProjHTML);


export const Sudanile = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.upc}>
        <ProjectBackground
          src={genericBackground}
          srcSet={`${genericBackground} 1280w, ${genericBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={genericBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url={"https://www.sudanile.com"}
          roles={roles}
          bodytext={bodytext}
          abstract={abstract}
          texture={texture}
          textureLarge={textureLarge}
          texturePlaceholder={texturePlaceholder}
          texture2={texture2}
          texture2Large={texture2Large}
          texture2Placeholder={texture2Placeholder}
        />

        <ProjContent />

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
