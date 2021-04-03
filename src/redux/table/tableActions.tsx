import { SELECTED_ELEMENT } from './tableTypes';
import { Element } from '../../App';

interface ITableAction {
    type: typeof SELECTED_ELEMENT;
    payload: Element;
}

export const selectedElem = (elem: Element): ITableAction => {
    return {
      type: SELECTED_ELEMENT,
      payload: elem,
    };
  };