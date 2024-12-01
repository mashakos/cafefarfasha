import { RefinementList } from 'react-instantsearch';
import style from './SearchAndFilter.module.css';

export const links = () => [{ rel: 'stylesheet', href: style }];

export default function SearchAndFilter() {
  return (
    <aside className='SearchAndFilter'>
      <h3>Key</h3>
      <RefinementList
        attribute='title'
        sortBy={['title']}
        showMore
        limit={7}
        showMoreLimit={100}
      />
      <h3>Suffix</h3>
      <RefinementList
        attribute='body'
        showMore
        limit={8}
        showMoreLimit={100}
        searchable
        searchablePlaceholder='Fizzy suffixes...'
      />
      <h3>Capo</h3>
      <RefinementList attribute='slug' />
    </aside>
  );
}