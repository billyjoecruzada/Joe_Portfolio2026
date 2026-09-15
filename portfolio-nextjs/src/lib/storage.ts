"use client";
import { defaultData } from "./data";
import type { Profile, SocialLink, ServiceItem, AIVideo, AboutInfo } from "./data";

export function loadPublicData() {
  if (typeof window === "undefined") return defaultData;
  try {
    const p = localStorage.getItem("portfolio_profile");
    const s = localStorage.getItem("portfolio_social");
    const sv = localStorage.getItem("portfolio_services");
    const av = localStorage.getItem("portfolio_aiVideos");
    const ab = localStorage.getItem("portfolio_about");
    return {
      ...defaultData,
      profile: p ? (JSON.parse(p) as Profile) : defaultData.profile,
      social: s ? (JSON.parse(s) as SocialLink) : defaultData.social,
      services: sv ? (JSON.parse(sv) as ServiceItem[]) : defaultData.services,
      aiVideos: av ? (JSON.parse(av) as AIVideo[]) : defaultData.aiVideos,
      about: ab ? (JSON.parse(ab) as AboutInfo) : defaultData.about,
    };
  } catch {
    return defaultData;
  }
}
