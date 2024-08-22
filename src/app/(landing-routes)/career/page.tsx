"use client";

import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import CareerCardParent from "~/components/common/CareerCard";
import { Job } from "~/components/common/CareerCard/Jobs";
import Heading from "~/components/layouts/heading";
import Pagination from "~/components/layouts/pagination/Pagination";
import JobSkeleton from "~/components/skeleton/jobskeleton";
import { useToast } from "~/components/ui/use-toast";
import Nojobs from "./Nojobs";

export default function Career() {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const router = useRouter();
  const { toast } = useToast();
  const locale = getCookie("NEXT_LOCALE") || "en";

  useEffect(() => {
    const fetchCarrers = async () => {
      try {
        const apiUrl = await getApiUrl();
        const response = await axios.get(`${apiUrl}/api/v1/jobs`, {
          headers: {
            ...(locale ? { "Accept-Language": locale } : {}),
          },
        });
        setAllJobs(response.data.data);
      } catch {
        toast({
          title: "Error",
          description: "Failed to fetch Jobs",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCarrers();
  }, [locale, toast]);

  useEffect(() => {
    // Calculate the jobs to display based on the current page
    const startIndex = (currentPage - 1) * pageSize;
    const newDisplayedJobs = allJobs.slice(startIndex, startIndex + pageSize);
    setDisplayedJobs(newDisplayedJobs);
  }, [allJobs, currentPage]);

  const handleViewDetails = (job: Job) => {
    const parameters = new URLSearchParams({
      id: job.id.toString(),
      title: job.title,
      company: job.company_name,
      location: job.location,
      description: job.description,
      amount: job.salary_range,
      job_type: job.job_type,
      job_mode: job.job_mode,
      deadline: job.deadline,
    });
    router.push(`/career/details?${parameters.toString()}`);
  };

  return (
    <div className="mx-auto max-w-7xl bg-white px-5 py-5 sm:bg-transparent md:px-10 lg:px-10 xl:px-10">
      <Heading
        tag={`${
          locale === "es" ? "Carrera" : locale === "fr" ? "Carrière" : "Career"
        }`}
        title={`${
          locale === "es"
            ? "Ofertas de Empleo Disponibles en Nuestra Empresa"
            : locale === "fr"
              ? "Offres d'Emploi Disponibles dans Notre Entreprise"
              : "Available Jobs in Our Company"
        }`}
        content={`${
          locale === "es"
            ? "Explora oportunidades laborales en diversos campos que se ajustan a tus habilidades y aspiraciones profesionales."
            : locale === "fr"
              ? "Découvrez des opportunités d'emploi dans divers domaines qui correspondent à vos compétences et aspirations professionnelles."
              : "Explore job opportunities across various fields that fit your skills and career aspirations."
        }`}
      />

      <div className="flex w-full items-center justify-center">
        {loading ? (
          <JobSkeleton />
        ) : (
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {displayedJobs.map((job) => (
              <CareerCardParent
                key={job.id}
                job={job}
                location={job.location}
                description={job.description}
                amount={job.salary_range}
                company={job.company_name}
                onViewDetails={() => handleViewDetails(job)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-center">
        {!loading && allJobs?.length === 0 && <Nojobs />}
      </div>

      <div className="text-1xl my-5 text-right">
        {displayedJobs.length > 0 &&
          `Showing ${(currentPage - 1) * pageSize + displayedJobs.length} of ${allJobs.length}`}
      </div>

      <div className="my-20">
        {allJobs?.length > pageSize && (
          <Pagination
            total={allJobs.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  );
}
