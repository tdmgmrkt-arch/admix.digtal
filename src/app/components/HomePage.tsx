'use client';

import { Hero } from '../components/Hero';
import { ValueProposition } from '../components/ValueProposition';
import { CaseStudies } from '../components/CaseStudies';
import { Services } from '../components/Services';
import { Industries } from '../components/Industries';
import { Testimonials } from '../components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero backgroundImage="https://images.unsplash.com/photo-1667369018454-3f2fa8a923fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1lY3VsYSUyMGNpdHklMjBzdW5zZXR8ZW58MXx8fHwxNzYwNzI5NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
      <ValueProposition />
      <CaseStudies
        image1="https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NjA3MDYzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        image2="https://images.unsplash.com/photo-1696564006617-1a85ba3a8f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwdHJhaW5lcnxlbnwxfHx8fDE3NjA3Mjk1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />
      <Services />
      <Industries
        plumberImage="https://images.unsplash.com/photo-1635221798248-8a3452ad07cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDY1OTkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        fitnessImage="https://images.unsplash.com/photo-1696564006617-1a85ba3a8f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwdHJhaW5lcnxlbnwxfHx8fDE3NjA3Mjk1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />
      <Testimonials
        portrait1="https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDYyMDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        portrait2="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDcyNTM4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        portrait3="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDY0OTA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />
    </>
  );
}

