import * as React from 'react';
import { FormEvent, ChangeEvent } from 'react';

export interface Props {
  search: string;
  onSearchChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

function SearchForm(props: Props) {
  return (
    <form onSubmit={props.onSearchSubmit}>
      <label>
        <input placeholder="Search" type="text" value={props.search} onChange={props.onSearchChange}/>
      </label>
      <input type="submit" value="Search"/>
    </form>
  );
}

export default SearchForm;
