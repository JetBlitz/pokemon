import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query ($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      maxHP
      maxCP
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        name
      }
    }
  }
`
