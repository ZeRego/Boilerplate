import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { ActionType, useApp, AppProvider } from './AppContext';

const DEFAULT_STATE_MOCK = {
  items: [
    { id: '1', detail: 'buy milk', checked: true },
    { id: '2', detail: 'book hotel', checked: false },
    { id: '3', detail: 'buy bananas', checked: true },
  ],
};

describe('<AppContext>', () => {
  it('should add tasks', async () => {
    const itemMock = { id: '1', detail: 'buy milk', checked: false };
    const item2Mock = { id: '2', detail: 'book hotel', checked: false };
    const { result } = renderHook(() => useApp(), { wrapper: AppProvider });

    act(() => {
      result.current.dispatch({
        type: ActionType.ADD_ITEM,
        payload: itemMock,
      });
    });

    expect(result.current.state.items).toEqual([itemMock]);

    act(() => {
      result.current.dispatch({
        type: ActionType.ADD_ITEM,
        payload: item2Mock,
      });
    });

    expect(result.current.state.items).toEqual([itemMock, item2Mock]);
  });
  it('should remove checked tasks', async () => {
    const { result } = renderHook(() => useApp(), {
      wrapper: AppProvider,
      initialProps: { defaultState: DEFAULT_STATE_MOCK },
    });

    act(() => {
      result.current.dispatch({
        type: ActionType.REMOVE_CHECKED_ITEMS,
      });
    });

    expect(result.current.state.items).toEqual([DEFAULT_STATE_MOCK.items[1]]);
  });
  it('should toggle task checked value', async () => {
    const { result } = renderHook(() => useApp(), {
      wrapper: AppProvider,
      initialProps: { defaultState: DEFAULT_STATE_MOCK },
    });

    act(() => {
      result.current.dispatch({
        type: ActionType.TOGGLE_ITEM,
        payload: DEFAULT_STATE_MOCK.items[1].id,
      });
    });

    expect(result.current.state.items).toHaveLength(
      DEFAULT_STATE_MOCK.items.length,
    );
    expect(result.current.state.items[1].checked).toBe(true);

    // change back to initial state
    act(() => {
      result.current.dispatch({
        type: ActionType.TOGGLE_ITEM,
        payload: DEFAULT_STATE_MOCK.items[1].id,
      });
    });

    expect(result.current.state.items).toEqual(DEFAULT_STATE_MOCK.items);
    expect(result.current.state.items[1].checked).toBe(false);
  });
});
