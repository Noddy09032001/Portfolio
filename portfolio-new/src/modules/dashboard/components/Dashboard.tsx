import { GoGitCommit as ContribIcon } from 'react-icons/go';
import { FaGithub as GithubIcon } from 'react-icons/fa';
import { SiLeetcode as LeetcodeIcon} from 'react-icons/si';

import SectionHeading from '@/src/common/components/elements/SectionHeading';
import SectionSubHeading from '@/src/common/components/elements/SectionSubHeading';

import ContributionCalendar from './ContributionCalendar';
import ContributionOverview from './ContributionOverview';

import { fetchLeetCodeData } from '@/src/services/leetcode';
import { transformLeetCodeCalendar } from '@/src/services/Leetcode/leetcodeCalendar';
import { getGithubUser } from '@/src/services/github';

const Dashboard = async () => {
  const leetcodeData = await fetchLeetCodeData('Nod22');
  const githubData = await getGithubUser('personal')

  const contributionCalendar = leetcodeData?.userCalendar?.submissionCalendar ? transformLeetCodeCalendar(
          leetcodeData.userCalendar.submissionCalendar) : null;
  
  const githubContributionCalendar = githubData?.data?.contributionsCollection?.contributionCalendar;

  return (
    <div className='space-y-10'>
      <section className='space-y-5'>
        <div className='space-y-2'>
          <SectionHeading
            title='Leetcode Contributions'
            icon={<LeetcodeIcon />}
          />

          <SectionSubHeading>
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Snapshots of my problem solving journey - one submission at a time.
            </p>
          </SectionSubHeading>
        </div>

        {contributionCalendar ? (
          <div className='space-y-4'>
            <ContributionOverview
              data={contributionCalendar}
            />

            <ContributionCalendar
              data={contributionCalendar}
            />
          </div>
        ) : (
          <div className='rounded-xl border border-dashed border-neutral-300 px-6 py-10 text-center dark:border-neutral-700'>
            <p className='text-sm text-neutral-500'>
              Unable to load Leetcode contribution data.
            </p>
          </div>
        )}
      </section>

      <section className='space-y-5'>
        <div className='space-y-2'>
          <SectionHeading
            title='Github Contributions'
            icon={<ContribIcon />}
          />

          <SectionSubHeading>
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Snapshots of my project development journey - one contribution at a time.
            </p>
          </SectionSubHeading>
        </div>

        {githubContributionCalendar ? (
          <div className='space-y-4'>
            <ContributionOverview
              data={githubContributionCalendar}
            />

            <ContributionCalendar
              data={githubContributionCalendar}
            />
          </div>
        ) : (
          <div className='rounded-xl border border-dashed border-neutral-300 px-6 py-10 text-center dark:border-neutral-700'>
            <p className='text-sm text-neutral-500'>
              Unable to load Github contribution data.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;