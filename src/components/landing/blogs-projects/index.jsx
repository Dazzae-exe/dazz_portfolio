import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";
import { IconWriting } from "@tabler/icons-react";
import { PortfolioProvider } from "../../../context";

const caseStudies = [
  {
    title: "Arsport Nutrition Store",
    image:
      "https://www.arsportnutrition.com/assets/LOGO_ARSPORT_NUTRITION_C.A-DkLP2QuB.png",
    tags: ["React", "Tailwindcss", "Supabase", "NextJS"],
    id: "13412lk1k2j42342",
  },
  {
    title: "TBet",
    image:
      "https://betting-tanzania.ac.tz/wp-content/uploads/2020/05/tbet-logo-s.jpg",
    tags: ["Betting", "App", "JavaScript", "AngularJS", "HTML&CSS", "Svelte"],
    id: "13412lk1k2j42343",
  },
  {
    title: "Thrumyeyes",
    image:
      "https://images.unsplash.com/photo-1729465123592-113326d58c44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D",
    tags: ["Photography", "Portfolio", "NextJS", "Supabase", "Tailwindcss"],
    id: "13412lk1k2j42341",
  },
];

export default function BlogsAndProjects() {
  const { loading, loadTimeout } = React.useContext(PortfolioProvider);
  const navigate = useNavigate();

  function navigation(id) {
    navigate(`/blog-post/${id}`, {
      preventScrollReset: false,
    });

    return loadTimeout();
  }

  return (
    <div className="max-w-6xl mx-auto min-h-[50vh] px-8">
      <h2 className="flex items-center mb-6 gap-4">
        <IconWriting />
        POSTS & PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {!loading ? (
          <>
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="cursor-pointer"
                onClick={() => navigation(study.id)}
              >
                <CardContent className="p-6">
                  {study.image && (
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover mb-4 rounded-lg"
                    />
                  )}
                </CardContent>
                <CardFooter className="flex flex-col items-start p-6 pt-0">
                  <CardTitle className="text-2xl font-bold mb-4">
                    {study.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </>
        ) : (
          <>
            <Skeleton className="w-full h-[200px] rounded-lg bg-secondary" />
            <Skeleton className="w-full h-[200px] rounded-lg bg-secondary" />
            <Skeleton className="w-full h-[200px] rounded-lg bg-secondary" />
          </>
        )}
      </div>
    </div>
  );
}
