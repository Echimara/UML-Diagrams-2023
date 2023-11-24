# for managing media shared over the site

sequenceDiagram
    participant User
    participant System
    participant ChefCathy

    User->>System: Log In(username: string, password: string): bool
    activate System

    User->>System: View Recipes(userID: int): RecipeList
    activate System

    User->>System: View Profile(userID: int): UserProfile
    activate System

    User->>System: Log Out(userID: int): void
    deactivate System

    User->>ChefCathy: UploadCookingVideo(userID: int, video: Video): bool
    activate ChefCathy
    ChefCathy-->>System: SaveCookingVideo(userID: int, video: Video): bool
    ChefCathy-->>System: UpdateUserActivity(userID: int): bool
    deactivate ChefCathy

    User->>ChefCathy: ShareArticle(userID: int, article: Article): bool
    activate ChefCathy
    ChefCathy-->>System: SaveArticle(userID: int, article: Article): bool
    ChefCathy-->>System: UpdateUserActivity(userID: int): bool
    deactivate ChefCathy
