import Container from '@/src/common/components/elements/Container';
import PageHeading from '@/src/common/components/elements/PageHeading';
import Contact from '@/src/modules/contact';

const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION =
  "Feel free to get in touch and let's have a discussion about how we can work together.";

export default function Page(){
    return (
    <>
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Contact />
      </Container>
    </>
  );
}