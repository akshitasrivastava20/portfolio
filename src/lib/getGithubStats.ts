interface GitHubData {
  followers: number
  following: number
  totalStars: number
  totalPRs: number
  totalIssues: number
}

interface RepositoryNode {
  pullRequests: {
    totalCount: number
    nodes: { merged: boolean }[]
  }
  issues: {
    totalCount: number
  }
  stargazers: {
    totalCount: number
  }
}

const fetchGitHubData = async (): Promise<GitHubData> => {
  const fallbackData: GitHubData = {
    followers: 0,
    following: 0,
    totalStars: 0,
    totalPRs: 0,
    totalIssues: 0,
  }

  const query = `
    query ($username: String!) {
      user(login: $username) {
        followers {
          totalCount
        }
        following {
          totalCount
        }
        starredRepositories {
          totalCount
        }
        pullRequests(first: 100) {
          totalCount
          nodes {
            merged
          }
        }
        issues {
          totalCount
        }
        repositories(first: 100) {
          totalCount
          nodes {
            pullRequests(first: 100) {
              totalCount
              nodes {
                merged
              }
            }
            issues {
              totalCount
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  `

  const variables = { username: 'akshitasrivastava20' }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${process.env.GITHUB_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
      signal: AbortSignal.timeout(8000),
      next: { revalidate: 21600 },
    })

    if (!response.ok) {
      console.error(`GitHub API request failed with status: ${response.status}`)
      return fallbackData
    }

    const data = await response.json()
    if (data.errors || !data?.data?.user) {
      console.error('GitHub API returned invalid response payload')
      return fallbackData
    }

    let totalPRs = data.data.user.pullRequests.totalCount
    let totalIssues = data.data.user.issues.totalCount
    let totalStars = 0

    data.data.user.repositories.nodes.forEach((repo: RepositoryNode) => {
      totalPRs += repo.pullRequests.totalCount
      totalIssues += repo.issues.totalCount
      totalStars += repo.stargazers.totalCount
    })

    return {
      followers: data.data.user.followers.totalCount,
      following: data.data.user.following.totalCount,
      totalStars,
      totalPRs,
      totalIssues,
    }
  } catch (error) {
    console.error('Failed to fetch GitHub data:', error)
    return fallbackData
  }
}

export { fetchGitHubData as getGitHubStats }
