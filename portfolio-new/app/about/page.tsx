import Container from '@/src/common/components/elements/Container';
import PageHeading from '@/src/common/components/elements/PageHeading';
import About from '@/src/modules/about';

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION =
  'Snapshots from a journey still unfolding!!!';

export default function Page(){
  return (
    <>
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About />
      </Container>
    </>
  );
};

