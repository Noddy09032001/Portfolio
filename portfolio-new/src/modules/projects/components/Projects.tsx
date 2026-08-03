'use client';

import { useMemo, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import { PROJECTSLIST } from '@/src/common/constant/projects';
import { ProjectItemProps } from '@/src/common/types/projects';

const ITEMS_PER_PAGE = 3;

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(PROJECTSLIST.projects.length / ITEMS_PER_PAGE);

  const currentProjects: ProjectItemProps[] = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return PROJECTSLIST.projects.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <div className="space-y-6">
      {currentProjects.map((project) => (
        <ProjectsCard key={project.slug} project={project} />
      ))}

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="rounded-lg border px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-sm text-neutral-500">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="rounded-lg border px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;