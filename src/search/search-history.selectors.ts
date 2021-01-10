
import type { ReduxState } from "../store/state.types"

export const searchHistorySelector = (state: ReduxState) => state.searchHistory;
