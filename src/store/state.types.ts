export type ReduxState = {
    repositories: Array<{ description: string; full_name: string; id: string; language: string }>,
    searchHistory: Array<string>,
    ui: {
        isLoading: boolean,
        message: string
    }
}