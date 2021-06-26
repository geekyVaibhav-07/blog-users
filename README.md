# blog-users
Users services for project blog

Routes: 
    - path: /user
    - methods:
        - get: get user/users
        - post: create a new user
        - put: updated user
        - delete: delete user

    - path: /login
    - methods: 
        - post: authenticate a user
    
    - path: /me
        - get: get authenticated user
    

Schema of a post: 
    {
        id: ObjectId
        email: String
        password: String
        passwordChnagedAt: DateTime
        firstName: String
        lastName: String
        gender: String
        bio: String
        profession: String
        location: String
        contactNumber: String
        age: Int
        profilePicture: String
        pictures: List
    }

env varriables that should be set in .env file: 
    DATABASE_HOST='mongodb+srv' URIs
    DATABASE_USER=database username
    DATABASE_PASSWORD=database pasword
    DATABASE=database
    PRODUCTION_PORT=8001
    DEVELOPMENT_PORT=8000