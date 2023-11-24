sequenceDiagram
    participant User
    participant Website
    participant RecipeBrowser

    User->>Website: Open website
    activate Website
    activate User

    User->>Website: Log In(username: string, password: string): bool
    Website-->>User: Login successful

    User->>RecipeBrowser: View Recipes(userID: int): RecipeList
    activate RecipeBrowser
    RecipeBrowser->>Website: FetchRecipeList(userID: int): RecipeList
    Website-->>RecipeBrowser: Recipe data
    RecipeBrowser-->>User: Display RecipeList
    deactivate RecipeBrowser

    User->>RecipeBrowser: Select Recipe(recipeID: int): RecipeDetails
    activate RecipeBrowser
    RecipeBrowser->>Website: FetchRecipeDetails(recipeID: int): RecipeDetails
    Website-->>RecipeBrowser: Recipe details
    RecipeBrowser-->>User: Display RecipeDetails
    deactivate RecipeBrowser

    User->>Website: View Profile(userID: int): UserProfile
    Website->>Website: AuthenticateUser(userID: int)
    Website-->>User: Authentication successful

    User->>Website: Logout(userID: int): void
    deactivate Website
    deactivate User
