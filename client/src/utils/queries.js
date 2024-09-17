// Import the gql function from graphql-tag to create GraphQL queries
import gql from "graphql-tag";

// Define and export the GET_ME query to retrieve the current user's information
export const GET_ME = gql`
    {
        me {
            _id         // The user's unique ID
            username    // The user's username
            email       // The user's email address
            bookCount   // Number of books saved by the user
            savedBooks { // Array of books saved by the user
                bookId      // The unique ID of the book
                authors     // List of authors for the book
                description // A brief description of the book
                title       // The title of the book
                image       // URL of the book's cover image
                link        // External link for more information about the book
            }
        }
    }
`;
