import Container from "@/src/common/components/elements/Container"
import PageHeading from "@/src/common/components/elements/PageHeading"
import Projects from "@/src/modules/projects"

const PAGE_TITLE = "Projects"
const PAGE_DESCRIPTION = "Summary of the projects I am currently working on"

export default function Page(){
    return(
        <div>
            <Container data-aos="fade-up">
                <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION}></PageHeading>
                <Projects></Projects>
            </Container>
        </div>
    )
}