// We need the filesystem to write the JSON file
const fs = require("fs")

// Invoked after build has finished
exports.onPostBuild = async ({ graphql, reporter }) => {
  // Query all f1teams, message in the console if errors occur
  const result = await graphql(`
    query F1Teams {
      allFile(
        filter: { absolutePath: { regex: "/f1-teams/" }, ext: { eq: ".md" } }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              teamPrincipal
              homeBase
              logo {
                publicURL
              }
              drivers
            }
          }
        }
      }
    }
  `)
  if (result.errors) reporter.panic("🚨 F1Teams-query failed onPostBuild")

  // Destructure result as f1Teams
  const f1Teams = result.data.allFile.nodes.map(teamWithMarkdown => ({
    ...teamWithMarkdown.childMarkdownRemark.frontmatter,
  }))

  // Write the JSON file
  fs.writeFileSync("./public/f1-teams.json", JSON.stringify(f1Teams))
}
