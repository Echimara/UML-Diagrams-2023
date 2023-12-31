stateDiagram
    [*] --> NotLoggedIn: Start
    NotLoggedIn --> LoggedIn: Log In
    LoggedIn --> BrowseRecipes: View Recipes
    LoggedIn --> UserProfile: View Profile
    BrowseRecipes --> RecipeDetails: View Recipe Details
    UserProfile --> EditProfile: Edit Profile
    RecipeDetails --> Like: Like Recipe
    RecipeDetails --> Share: Share Recipe
    EditProfile --> UserProfile: Save Changes
    Like --> RecipeDetails: Unlike Recipe
    Share --> RecipeDetails: Close Share Dialog

