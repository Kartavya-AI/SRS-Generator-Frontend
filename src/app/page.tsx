"use client"

import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import VantaFog from "@/components/VantaFog";
import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import school from '../../public/images/zachary-keimig-nxJgmZfLcJI-unsplash.jpg'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Anjali Mehta",
    username: "@anjali_parent",
    body: "This platform saved us weeks of research. We found the perfect CBSE school for our daughter in minutes.",
    img: "https://avatar.vercel.sh/anjali",
  },
  {
    name: "Rahul Kapoor",
    username: "@rahul_k",
    body: "The expert counseling feature was incredibly helpful. It made understanding school boards so much easier.",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Priya Singh",
    username: "@priya_singh",
    body: "I loved how I could compare multiple schools side-by-side. It gave me the clarity I needed as a first-time parent.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "David Thomas",
    username: "@david_in_blr",
    body: "We just moved to Bangalore and had no idea where to start. This tool gave us tailored suggestions instantly!",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Sneha Reddy",
    username: "@sneha_r",
    body: "Getting admission timelines and application links all in one place was a game-changer. Highly recommend!",
    img: "https://avatar.vercel.sh/sneha",
  },
  {
    name: "Mohit Verma",
    username: "@mohit_verma",
    body: "I used this to shortlist boarding schools and the detailed school profiles were super informative.",
    img: "https://avatar.vercel.sh/mohit",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
 
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
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
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};







const steps = [
  {
    title: "Step 1: Enter Your Preferences",
    description:
      "Start by selecting your preferred board (CBSE, ICSE, IB, State), location, budget, and must-have amenities like transport, sports, or labs.",
  },
  {
    title: "Step 2: Discover Matching Schools",
    description:
      "The assistant instantly filters thousands of verified schools to show only those that fit your criteria, ranked by relevance.",
  },
  {
    title: "Step 3: Explore School Profiles",
    description:
      "View detailed pages with information on academics, infrastructure, activities, faculty, reviews, and past performance.",
  },
  {
    title: "Step 4: Compare & Shortlist",
    description:
      "Easily compare shortlisted schools side-by-side and highlight their pros and cons to make better decisions.",
  },
  {
    title: "Step 5: Get Expert Guidance",
    description:
      "Not sure what fits best? Chat with an education counselor to get personalized recommendations tailored to your child’s needs.",
  },
  {
    title: "Step 6: Track Admissions & Apply",
    description:
      "See real-time admission timelines, eligibility, and application links. Apply directly or track your status from your dashboard.",
  },
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
        "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
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
    🏫
    <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
    <AnimatedGradientText className="text-sm font-medium">
      India’s Smartest AI School Search Platform for Parents
    </AnimatedGradientText>
    <ChevronRight
      className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
    />
  </div>

  <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary mb-6">
    Find the <AuroraText>Perfect School</AuroraText> for Your Child —
    Personalized, Verified, and Hassle-Free
  </h1>

  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
    Discover, compare, and apply to top schools based on your preferences —
    from board and budget to real parent reviews and expert guidance.
  </p>

  <div className="">
    <Link href="/search">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Start Searching
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
      Discover the Best Schools Near You – Personalized Search, Reviews & Insights.
    </h2>
    <Link href="/search">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Find Schools
        </span>
      </ShimmerButton>
    </Link>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex justify-center">
    <Image
      src={school} // Replace with your actual school illustration path
      alt="School Search Illustration"
      className="w-full max-w-md h-96"
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

            <section className="px-4  md:px-36 mt-20">
  <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
    <h1 className="text-4xl font-bold">FAQ&apos;S</h1>

    <AccordionItem value="item-1">
      <AccordionTrigger>1. What is School Search Assistant?</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          School Search Assistant is an AI-powered platform that helps parents
          discover, compare, and select the ideal school for their children. It
          simplifies decision-making by filtering thousands of schools based on
          personalized preferences like curriculum, grade, location, and budget.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>2. How does the search work?</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          You simply enter preferences such as your city, preferred grade level,
          and curriculum (CBSE, ICSE, IB, State, etc.). The platform uses AI to
          match and rank schools that best fit your criteria.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>3. What types of schools are included?</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          The platform includes all types of institutions — preschools,
          day-schools, boarding schools, and pre-university colleges across
          different curricula and locations in India.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>4. Can I compare schools side-by-side?</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes, you can select multiple schools and view a side-by-side
          comparison of academics, infrastructure, co-curricular activities,
          fees, and more to help you make an informed choice.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5">
      <AccordionTrigger>
        5. Does it provide admission deadlines and application links?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Absolutely. The platform provides real-time updates on admission
          deadlines, eligibility requirements, and direct links to apply or
          inquire further with the school.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-6">
      <AccordionTrigger>6. Are the reviews verified?</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes, all reviews and ratings are verified from real parents and
          guardians, ensuring credibility and transparency in your decision-making.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-7">
      <AccordionTrigger>
        7. Can I talk to a counselor for personalized help?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes, the platform offers access to expert counselors who provide
          personalized guidance tailored to your child’s academic needs,
          learning style, and future aspirations.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-8">
      <AccordionTrigger>
        8. Is the platform free to use?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Core search and comparison features are free to use. Some premium
          services like expert counseling or application tracking may be offered
          as paid features in the future.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-9">
      <AccordionTrigger>
        9. Can I track my applications on this platform?
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Yes, once you've sent inquiries or started an application through the
          platform, you can track your application status and receive timely
          updates in one place.
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</section>



    </main>
  );
}
