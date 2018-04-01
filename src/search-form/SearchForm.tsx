import * as React from 'react';
import { FormEvent, ChangeEvent } from 'react';

export interface Props {
  search: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

class SearchForm extends React.Component<Props, object> {
  render() {
    return (
      <form onSubmit={this.props.onSearchSubmit}>
        <label>
          Name:
          <input type="text" value={this.props.search} onChange={this.props.onSearchChange}/>
        </label>
        <input type="submit" value="Search"/>
      </form>
    );
  }
}

export default SearchForm;
