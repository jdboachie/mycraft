// 'us client'



import Craftainer from "@/components/craftainer";
import AnimatedTabs from "@/components/animated-tabs";
import MacOSDock from "@/components/macos-dock";


export default function Home() {
  return (
    <main className="grid w-full max-w-4xl mx-auto min-h-screen items-center p-24 gap-8">
      <Craftainer
        name="Animated Tabs"
        description="Springy animations from one tab to another"
        component={<AnimatedTabs />}
      />
      <Craftainer
        name="MacOS Dock"
        description="Build the magnification effect from the Mac OS dock with React and Framer Motion."
        component={<MacOSDock />}
      />
    </main>
  );
}
