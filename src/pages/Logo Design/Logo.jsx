import React from "react";
import HeroSection from "../../component/about/HeroSection";
import TestimonialSec from "../../component/home/TestimonialSec";
import WorkingProcess from "../../component/services/WorkingProcess";
import ShowCase from "../../component/logoDesign/ShowCase";
import StatsStrip from "../../component/services/StatsStrip";
import {
  CalendarCheck2,
  Users,
  MessageSquare,
  Rocket,
} from "lucide-react";
function Logo() {

//     const customSteps = [
//   { id: 1, title: "Discovery", description: "We learn about your brand.", icon: CalendarCheck2 },
//   { id: 2, title: "Planning", description: "We define scope & timelines.", icon: Users },
//   { id: 3, title: "Execution", description: "Design, build, iterate.", icon: MessageSquare },
//   { id: 4, title: "Launch", description: "Ship and optimize.", icon: Rocket },
// ];

  return <div>
    <HeroSection
  title="Logo Design"
  description="We have the expertise and experience to offer outstanding results, from responsive design and user experience optimization to backend programming and content management system integration"
  breadcrumbLabel="Logo Design"
/>


<WorkingProcess
  title="How We Partner With You"
  subtitle="A transparent, collaborative process from first idea to final launch."
//   steps={customSteps}
/>
<ShowCase/>
<StatsStrip/>
      <TestimonialSec />
  </div>;
}

export default Logo;