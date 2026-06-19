import Container from "@/src/common/components/elements/Container";
import PageHeading from "@/src/common/components/elements/PageHeading";
import Dashboard from "@/src/modules/dashboard";

import { SiLeetcode } from 'react-icons/si';

const PAGE_TITLE = 'Leetcode Dashboard';
const PAGE_DESCRIPTION ='My personal leetcode dashboard, built with Next.js API routes deployed as serverless functions.';

export default function Page(){
    return(
        <div>
            <Container data-aos="fade-up">
                <div className='mb-6 flex items-center gap-3'>
                    <SiLeetcode className='text-3xl text-[#FFA116]' />
                    <div className="w-full">
                        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION}/>
                    </div>
                </div>
                <Dashboard></Dashboard>
            </Container>
        </div>
    )
}