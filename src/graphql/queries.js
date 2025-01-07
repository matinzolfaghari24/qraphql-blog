import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      title
      slug
      id
      coverPicture {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;
const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      name
      field
      description {
        html
      }
      post {
        slug
        title
        id
        coverPicture {
          url
        }
      }
    }
  }
`;

const GET_BLOG_INFO = gql`
  query getBlogInfo($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        slug
        name
        field
        avatar {
          url
        }
      }
      title
      coverPicture {
        url
      }
      content {
        html
      }
    }
  }
`;

const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      text
      name
      id
    }
  }
`;

export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_INFO,
  GET_BLOG_INFO,
  GET_POST_COMMENTS,
};
