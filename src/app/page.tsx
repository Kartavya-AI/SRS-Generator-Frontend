"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import VantaFog from "@/components/VantaFog";
import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import srsIllustration from "../../public/images/Screenshot 2025-08-16 100427.png";
import { CardContent, CardHeader } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import profile from '../../public/images/profile.jpg'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Rahul Mehta",
        username: "@rahul_pm",
        body: "The SRS Generator saved me countless hours. Instead of manually writing requirement docs, I had a polished draft ready in minutes."
    },
    {
        name: "Ananya Sharma",
        username: "@ananya_dev",
        body: "The clarity and structure of the generated SRS was impressive. It helped our dev team avoid confusion and start building faster."
    },
    {
        name: "Mohammed Ali",
        username: "@ali_product",
        body: "As a product manager, I loved how the platform captured both functional and non-functional requirements with precision."
    },
    {
        name: "Priya Nair",
        username: "@priyanair_uiux",
        body: "The auto-generated diagrams and well-defined scope made client presentations so much easier. It feels like having a BA on the team."
    },
    {
        name: "Siddharth Jain",
        username: "@sid_jain",
        body: "Earlier, drafting an SRS would take us weeks. With this platform, we can generate detailed requirement docs within a day."
    },
    {
        name: "Emily Rodriguez",
        username: "@emily_rodriguez",
        body: "The AI suggestions for edge cases and constraints were spot-on. It made our document far more comprehensive than manual drafting."
    }
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    username,
    body,
}: {
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={profile}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const steps = [
    {
        title: "Step 1: Enter Project Details",
        description:
            "Provide the project title, description, and basic information. This sets the foundation for generating your tailored SRS document."
    },
    {
        title: "Step 2: Define Functional Requirements",
        description:
            "List the core features, modules, and system behaviors you expect. The platform structures these into formal functional requirements."
    },
    {
        title: "Step 3: Specify Non-Functional Requirements",
        description:
            "Add constraints like performance, security, usability, and scalability — ensuring your SRS covers all quality attributes."
    },
    {
        title: "Step 4: Identify System Users & Roles",
        description:
            "Outline different user types (e.g., admin, customer, staff) and their expected interactions with the system."
    },
    {
        title: "Step 5: Generate Diagrams & Models",
        description:
            "Automatically create use-case diagrams, data flow diagrams, and other visuals to enhance clarity in your SRS."
    },
    {
        title: "Step 6: Review & Export SRS",
        description:
            "Preview the complete document, make edits if needed, and export it in professional formats like PDF or DOCX."
    }
];



export default function Home() {
    const { theme } = useTheme();
    return (
        <main className="mx-auto">
            <VantaFog />
          <section className="mt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
  <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
    <span
      className={cn(
        "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#40c9ff]/50 via-[#9c40ff]/50 to-[#40c9ff]/50 bg-[length:300%_100%] p-[1px]"
      )}
      style={{
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "destination-out",
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "subtract",
        WebkitClipPath: "padding-box",
      }}
    />
    📑
    <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
    <AnimatedGradientText className="text-sm font-medium">
      AI-Powered SRS Generator for Developers & Teams
    </AnimatedGradientText>
    <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
  </div>

  <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary mb-6">
    Create <AuroraText>SRS Documents</AuroraText>{" "}  
    in Minutes, Not Days
  </h1>

  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
    Automatically generate comprehensive Software Requirement Specification (SRS) 
    documents tailored to your project — from functional requirements and system 
    features to diagrams and structured reports.
  </p>

  <div>
    <Link href="/generate">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Generate My SRS
        </span>
      </ShimmerButton>
    </Link>
  </div>
</section>


            <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    How It Works
                    {/* <AuroraText>How It Works</AuroraText> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <MagicCard
                            key={index}
                            gradientColor={
                                theme === "dark" ? "#262626" : "#D9D9D955"
                            }
                            className="rounded-xl px-5 py-4 bg-background shadow-md border border-border min-h-[180px] h-full"
                        >
                            <CardHeader className="p-0">
                                <h3 className="text-lg font-semibold text-primary">
                                    {step.title}
                                </h3>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                <p className="text-muted-foreground text-sm leading-snug">
                                    {step.description}
                                </p>
                            </CardContent>
                        </MagicCard>
                    ))}
                </div>
            </section>

         <section className="flex mt-10 flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
  {/* Text Section */}
  <div className="md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-1">
    <h2 className="text-3xl md:text-5xl font-bold text-primary">
      Generate High-Quality SRS Documents — Instantly with AI.
    </h2>
    <p className="text-lg text-muted-foreground">
      Our SRS Generation Platform helps you create precise, well-structured, and
      professional Software Requirement Specifications in minutes — saving time
      and ensuring clarity for your development team and stakeholders.
    </p>
    <Link href="/generate">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Generate My SRS
        </span>
      </ShimmerButton>
    </Link>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex justify-center">
    <Image
      src={srsIllustration} // Replace with your SRS illustration path
      alt="AI-Powered SRS Generation"
      className="w-full max-w-md h-96 object-cover"
      width={10}
      height={10}
      unoptimized
    />
  </div>
</section>



            <section className="mx-4 mt-20 md:mx-36">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
            </section>

           <section className="px-4 md:px-36 mt-20">
  <Accordion
    type="single"
    collapsible
    className="w-full"
    defaultValue="item-1"
  >
    <h1 className="text-4xl font-bold">FAQ&apos;S</h1>

    <AccordionItem value="item-1">
      <AccordionTrigger>
        1. What is the SRS Generation Platform?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          The SRS Generation Platform is an AI-powered tool that helps you
          create professional Software Requirement Specification (SRS) documents
          instantly. It ensures your requirements are clear, structured, and
          ready for developers and stakeholders.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>
        2. How does it work?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          You simply provide project details, functional and non-functional
          requirements, and user roles. The platform organizes this information
          into a complete, industry-standard SRS document with diagrams and
          models if needed.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>
        3. Who can use it?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          It’s designed for software developers, product managers, startups,
          freelancers, and enterprises who need clear documentation before
          starting development. Students and educators can also use it for
          academic projects.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>
        4. Does it include diagrams and visuals?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes. The platform can automatically generate use-case diagrams, data
          flow diagrams, and system models to enhance clarity and improve
          communication with your team.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5">
      <AccordionTrigger>
        5. Can I customize the generated SRS?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Absolutely. You can edit, refine, and update any part of the generated
          document to ensure it matches your exact requirements.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-6">
      <AccordionTrigger>
        6. In what formats can I export the SRS?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          You can export your SRS in professional formats like PDF and DOCX.
          This makes it easy to share with your team, clients, or professors.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-7">
      <AccordionTrigger>
        7. Does it support both functional and non-functional requirements?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes. The platform covers everything from system features and user
          interactions to performance, security, scalability, and usability
          requirements.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-8">
      <AccordionTrigger>
        8. Is it only for large projects?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Not at all. Whether you’re documenting a small app, a university
          project, or an enterprise system, the platform adapts to your project
          size and complexity.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-9">
      <AccordionTrigger>
        9. Is there a free version?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes. You can generate basic SRS documents for free. Advanced features
          like auto-generated diagrams, collaboration tools, and premium export
          options may require a paid subscription.
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</section>


        </main>
    );
}
