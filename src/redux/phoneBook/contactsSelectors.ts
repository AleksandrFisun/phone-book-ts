export const selectIsItem = (state: any) => state.phonebook?.item;

export const selectIsFilter = (state: any) => state.phonebook?.filter;

export const selectIsRefreshing = (state: any) =>
  state.phonebook?.getIsFetchAnswer;
