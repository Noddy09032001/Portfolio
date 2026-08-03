export async function fetchLeetCodeData(
  username: string,
) {
  const query = `
    query userProfile($username: String!) {
      matchedUser(username: $username) {
        username

        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }

        profile {
          ranking
          reputation
        }

        userCalendar {
          submissionCalendar
        }
      }

      recentSubmissionList(
        username: $username
        limit: 10
      ) {
        title
        titleSlug
        timestamp
        statusDisplay
        lang
      }
    }
  `;

  try {
    const response = await fetch(
      'https://leetcode.com/graphql',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          Referer: 'https://leetcode.com',
          'User-Agent': 'Mozilla/5.0',
        },

        body: JSON.stringify({
          query,
          variables: { username },
        }),

        next: {
          revalidate: 3600,
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `LeetCode API error: ${response.status}`,
      );
    }

    const json = await response.json();

    return {
      ...json?.data?.matchedUser,

      recentSubmissionList:
        json?.data?.recentSubmissionList || [],
    };
  } catch (error) {
    console.error(
      'Failed to fetch LeetCode data:',
      error,
    );

    return null;
  }
}