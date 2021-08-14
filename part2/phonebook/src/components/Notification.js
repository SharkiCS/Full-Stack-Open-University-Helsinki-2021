const NotificationSucessful = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="successful">
            {message}
        </div>
    )
}

const NotificationError = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="error">
            {message}
        </div>
    )
}

export { NotificationError, NotificationSucessful}