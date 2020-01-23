let React = import('react')
let { StaticQuery, graphql } = import('gatsby');

function test () {
  return (
    <StaticQuery
      query={graphql`
            {
              allMarkdownRemark(
                filter: { frontmatter: { status: { eq: "next" } } }
                limit: 1
              ) {
                edges { node { frontmatter {
                  venue {
                    title
                  }
                }
              } } }
            }
            `}
      render={({ allMarkdownRemark: { edges } }) => {
        const { venue } = edges[0].node.frontmatter
        return {...venue} 
      }}
    />
  )
}

let paragraphTest = document.getElementById('test')

paragraphTest.innerHTML(test())