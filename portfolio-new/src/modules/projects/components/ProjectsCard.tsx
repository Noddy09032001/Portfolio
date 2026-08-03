/*import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import Tooltip from "@/src/common/components/elements/Tooltip";
import { ProjectItemProps } from "@/src/common/types/projects";
import { STACKS } from "@/src/common/constant/stacks";

interface ProjectItemFinalProps {
    project: ProjectItemProps
}

const ProjectsCard = ({ project }: ProjectItemFinalProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700">
      {project.is_featured && (
        <div className="absolute left-0 top-0 z-10 h-24 w-24 overflow-hidden">
          <div className="absolute -left-8 top-5 w-32 -rotate-45 bg-emerald-600 py-1 text-center text-[11px] font-semibold uppercase tracking-wider text-white shadow-md">
            In Progress
          </div>
        </div>
      )}

      <div className="p-8 pt-12">
        <p className="leading-8 text-neutral-700 dark:text-neutral-300 font-semibold">
          {project.title}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stacks.map((stack: string, index: number) => (
            <div key={index}>
              <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
            </div>
          ))}
        </div>

        <div className="my-6 h-px bg-neutral-200 dark:bg-neutral-800" />

        <div className="space-y-1">
          <h3 className="font-semibold">{project.title}</h3>
          <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-neutral-500">
            {project.link_demo && (
              <Link
                href={project.link_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:underline"
              >
                Live Demo
                <HiOutlineExternalLink />
              </Link>
            )}

            {project.link_github && (
              <Link
                href={project.link_github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:underline"
              >
                GitHub
                <HiOutlineExternalLink />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;*/

import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import Tooltip from "@/src/common/components/elements/Tooltip";
import { STACKS } from "@/src/common/constant/stacks";
import { ProjectItemProps } from "@/src/common/types/projects";

interface ProjectItemFinalProps {
    project: ProjectItemProps
}

const ProjectsCard = ({ project }: ProjectItemFinalProps) => {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700">
      {project.is_featured && (
        <div className="mb-5 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
          In Progress{" "}
        </div>
      )}

      <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        {project.title}
      </h3>
      
      <p className="mt-3 max-w-3xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.stacks.map((stack: string, index: number) => (
          <Tooltip key={index} title={stack}>
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 text-xl transition-all duration-200 hover:scale-105 hover:border-neutral-400 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-500 dark:hover:bg-neutral-700">
              {STACKS[stack]}
            </div>
          </Tooltip>
        ))}
      </div>

      <div className="my-8 h-px bg-neutral-200 dark:bg-neutral-800" />

      <div className="flex flex-wrap gap-3">
        {project.link_demo && (
          <Link
            href={project.link_demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 transition-all hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
          >
            Live Demo
            <HiOutlineExternalLink className="text-base" />
          </Link>
        )}

        {project.link_github && (
          <Link
            href={project.link_github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-800 transition-all hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
          >
            GitHub
            <HiOutlineExternalLink className="text-base" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
