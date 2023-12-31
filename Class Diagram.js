classDiagram
  class User {
    -UserID: int
    -Username: string
    -Email: string
    -Password: string
    -ProfilePicture: string
    -FavoritesList: List<string>

    +login(): bool
    +logout(): void
  }

  class Recipe {
    -RecipeID: int
    -Title: string
    -Description: string
    -Ingredients: string
    -Instructions: string
    -NutritionalInfo: string
    -CategoryTags: List<string>

    +getDetails(): string
  }

  class Chef {
    -ChefID: int
    -Name: string
    -Bio: string
    -VideoUploads: List<string>
    -ContactInfo: string
  }

  class Doctor {
    -DoctorID: int
    -Name: string
    -Title: string
    -Headshot: string
    -ContactInfo: string

    +writeArticle(articleContent: string): void
  }

  class Testimonial {
    -TestimonialID: int
    -Content: string
    -Rating: int
    -Date: DateTime
  }

  class Inquiry {
    -InquiryID: int
    -UserID: int
    -Question: string
    -Response: string
    -Date: DateTime
  }

  class FAQ {
    -FAQID: int
    -Question: string
    -Answer: string
  }

  class Disclaimer {
    -DisclaimerID: int
    -Content: string
  }

  User "1" --> "*" Recipe : has
  Recipe "1" --> "1" Chef : prepared by
  Chef "0..1" --> "0..1" Doctor : also a doctor
  User "1" --> "*" Testimonial : writes
  User "1" --> "*" Inquiry : submits
  User "1" --> "*" FAQ : submits
  User "1" --> "0..1" Disclaimer : acknowledges
