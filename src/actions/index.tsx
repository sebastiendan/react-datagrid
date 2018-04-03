import { SearchAction } from './Search';
import { TracksAction } from './Tracks';
import { GridAction } from './Grid';
import { ColumnAction } from './Column';
import { FilterAction } from './Filter';

export type ReactDataGridActions = SearchAction | TracksAction | GridAction | ColumnAction | FilterAction;