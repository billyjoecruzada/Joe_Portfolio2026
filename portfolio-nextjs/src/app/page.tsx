import { Hero, Featured, Showcases, ColorGrading, AIVideosPreview, AIAvatarsPreview, GalleryPreview, EditedPhotos, About, Services } from "@/components/HomeSections";
import ToolsSection from "@/components/ToolsSection";

export const metadata = { title: "Billy Joe Cruzada | Graphic Designer" };

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Showcases />
      <ColorGrading />
      <AIVideosPreview />
      <AIAvatarsPreview />
      <GalleryPreview />
      <EditedPhotos />
      <About />
      <Services />
      <ToolsSection />
    </>
  );
}
