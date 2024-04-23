// Login Response
export type UserData = {
    "firstName": string,
    "lastName": string,
    "role": string,
    "imageUrl": string
}

// Pop-up Item
export type PopupItem = {
    "id": string,
    "type": PromptTypes,
    "message": string,
    "expiryMilliseconds": number
}

// Prompt/Informational Message Types
export enum PromptTypes {
    info = "info",
    success = "success",
    warning = "warning",
    danger = "danger"
}

// Navbar Notifications
export type NotificationItem = {
    "ticket": string,
    "type": PromptTypes,
    "message": string,
    "unread": boolean,
    "source": string,
    "date": Date
}