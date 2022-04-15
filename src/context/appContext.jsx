import React from "react"
export const AppContext = React.createContext({
    handlePostLike: () => {},
    handleDeletePost: () => {},
    handleSendNewAvatar: () => {},
    handleSendNewAuthor: () => {},
    handleCreateNewPost: () => {},
    handleSendEditPost: () => {},
    isLoading: false,
})
AppContext.displayName = "AppContext";