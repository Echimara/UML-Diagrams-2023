stateDiagram
    [*] --> NotLoggedIn: Start
    NotLoggedIn --> LoggedIn: Log In
    LoggedIn --> BrowseRecipes: View Recipes
    LoggedIn --> UserProfile: View Profile
    BrowseRecipes --> RecipeDetails: View Recipe Details
    UserProfile --> EditProfile: Edit Profile
    RecipeDetails --> Like: Like Recipe
    RecipeDetails --> SaveToCollection: Save to Collection
    SaveToCollection --> BrowseCollections: View Collections
    EditProfile --> ChangePassword: Change Password
    LoggedIn --> Logout: Log Out
    Logout --> NotLoggedIn: Logout Complete
