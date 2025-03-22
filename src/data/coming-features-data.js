import bell from "../assets/bell.svg";
import chat from "../assets/chat.svg";
import edit from "../assets/edit.svg";
import plus from "../assets/plus-link.svg";
import tick from "../assets/tick.svg";

export const ComingFeatures = [
  {
    id: 1,
    icon: bell,
    title: "Timely Reminders",
    description: "Schedule reminders to nudge your loved ones",
  },
  {
    id: 2,
    icon: chat,
    title: "Natural Language Q&A",
    description: "Ask about your calendar, get instant answers",
  },
  {
    id: 3,
    icon: edit,
    title: "Journaling",
    description: "Add notes to past events and revisit past moments",
  },
];

export const planningList = [
  {
    id: 1,
    icon: tick,
    text: "Integration with Google & Apple Calendar",
    isLink: false,
  },
  {
    id: 2,
    icon: tick,
    text: "Integration with Work Calendar",
    isLink: false,
  },
  {
    id: 3,
    icon: tick,
    text: "Support for iPad, Apple Watch, Mac, and more",
    isLink: false,
  },
  {
    id: 4,
    icon: plus,
    text: "Tell us which features and be the first to know!",
    isLink: true,
    link: "#",
  },
];
