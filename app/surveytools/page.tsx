import type { Metadata } from "next";
import SurveyToolsClient from "./SurveyToolsClient";

export const metadata: Metadata = {
  title: "SurveyTools — Africa's Research Data Platform | Omega Digital",
  description:
    "SurveyTools connects Nigerian researchers with verified respondents and delivers cleaned, analysis-ready data. Join the waitlist for early access. Launching September 2026.",
  alternates: {
    canonical: "/surveytools",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SurveyTools — Africa's Research Data Platform",
    description:
      "Fast, verified survey data collection for Nigerian researchers. Built by students, for researchers.",
    url: "/surveytools",
    images: [
      {
        // TODO: replace with final OG image asset
        url: "/og/surveytools-og.png",
        width: 1200,
        height: 630,
        alt: "SurveyTools — Africa's Research Data Platform",
      },
    ],
  },
};

export default function SurveyToolsPage() {
  return <SurveyToolsClient />;
}
