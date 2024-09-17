// Import the gql function to create GraphQL queries and mutations
import gql from "graphql-tag";

// Define and export the LOGIN_USER mutation for user authentication
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token  // The token received after successful login
            user { // The logged-in user's information
                _id     // User ID
                username // User's username
            }
        }
    }
`;

// Define and export the SAVE_BOOK mutation to save a book to the user's profile
export const SAVE_BOOK = gql`
    mutation saveBook($book: SavedBookInput!) {
        saveBook(book: $book) { // Save the book details to the user's saved books
            username  // The user's username
            email     // The user's email
            bookCount // The number of books saved by the user
            savedBooks { // The details of the saved books
                authors      // The book's authors
                description  // A brief description of the book
                bookId       // The unique ID of the book
                image        // The book's cover image
                link         // A link to more information or purchase the book
                title        // The book's title
            }
        }
    }
`;

// Define and export the REMOVE_BOOK mutation to remove a book from the user's saved books
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) { // Remove a book by its ID
            username   // The user's username
            email      // The user's email
            bookCount  // The updated count of saved books
            savedBooks { // The remaining saved books after removal
                authors      // The book's authors
                description  // A brief description of the book
                bookId       // The unique ID of the book
                image        // The book's cover image
                link         // A link to more information or purchase the book
                title        // The book's title
            }
        }
    }
`;
