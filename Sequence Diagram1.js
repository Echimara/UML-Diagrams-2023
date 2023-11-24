For Subscription

sequenceDiagram
    participant User
    participant System
    participant SubscriptionService

    User->>System: Log In(username: string, password: string): bool
    activate System

    User->>SubscriptionService: Subscribe(userID: int, subscriptionType: string): bool
    SubscriptionService-->>System: Confirm Subscription(userID: int, subscriptionType: string): bool
    deactivate System

    User->>System: View Recipes(userID: int): RecipeList
    activate System

    User->>System: View Profile(userID: int): UserProfile
    activate System

    User->>SubscriptionService: Unsubscribe(userID: int): bool
    SubscriptionService-->>System: Confirm Unsubscription(userID: int): bool
    deactivate System

    User->>System: Log Out(userID: int): void
    deactivate System
